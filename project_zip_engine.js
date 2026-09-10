/**
 * DevTask HUB - High-Performance In-Browser ZIP Archive Generator & Downloader
 * Generates standard PKZip 2.0 (Store / RFC 1952) archives entirely client-side.
 * Works 100% offline, zero dependencies, zero permissions required.
 */

(function () {
  'use strict';

  window.PROJECT_BUNDLES = window.PROJECT_BUNDLES || {};

  // Standard CRC32 table generator (Polynomial 0xEDB88320)
  const crcTable = (function () {
    let c;
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      }
      table[n] = c;
    }
    return table;
  })();

  function crc32(bytes) {
    let crc = 0 ^ (-1);
    for (let i = 0; i < bytes.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ bytes[i]) & 0xFF];
    }
    return (crc ^ (-1)) >>> 0;
  }

  /**
   * Generates a standard PKZIP archive Blob from an array of file records
   * @param {Array<{path: string, data: string|Uint8Array}>} files
   * @returns {Blob}
   */
  function createZipBlob(files) {
    const textEncoder = new TextEncoder();
    const fileRecords = [];
    let currentOffset = 0;

    for (const file of files) {
      // Normalize slashes to forward slashes for cross-platform ZIP compatibility
      const normPath = file.path.replace(/\\/g, '/').replace(/^\/+/, '');
      const nameBytes = textEncoder.encode(normPath);
      const dataBytes = typeof file.data === 'string' ? textEncoder.encode(file.data) : file.data;
      const crc = crc32(dataBytes);
      const size = dataBytes.length;

      // Local file header (30 bytes + name length)
      const localHeader = new Uint8Array(30 + nameBytes.length);
      const dv = new DataView(localHeader.buffer);
      dv.setUint32(0, 0x04034b50, true); // Local header signature 'PK\x03\x04'
      dv.setUint16(4, 20, true);         // Version needed to extract (2.0)
      dv.setUint16(6, 0x0800, true);     // General purpose bit flag (UTF-8 filename bit 11)
      dv.setUint16(8, 0, true);          // Compression method (0 = STORE, uncompressed)
      dv.setUint16(10, 0, true);         // File last mod time
      dv.setUint16(12, 0x5821, true);    // File last mod date (2024-01-01)
      dv.setUint32(14, crc, true);       // CRC-32
      dv.setUint32(18, size, true);      // Compressed size
      dv.setUint32(22, size, true);      // Uncompressed size
      dv.setUint16(26, nameBytes.length, true); // File name length
      dv.setUint16(28, 0, true);         // Extra field length
      localHeader.set(nameBytes, 30);

      fileRecords.push({
        path: normPath,
        nameBytes,
        dataBytes,
        crc,
        size,
        offset: currentOffset,
        localHeader
      });

      currentOffset += localHeader.length + dataBytes.length;
    }

    // Central Directory Headers
    let centralDirSize = 0;
    const centralDirHeaders = [];
    for (const rec of fileRecords) {
      const cdHeader = new Uint8Array(46 + rec.nameBytes.length);
      const dv = new DataView(cdHeader.buffer);
      dv.setUint32(0, 0x02014b50, true); // Central directory header signature 'PK\x01\x02'
      dv.setUint16(4, 20, true);         // Version made by
      dv.setUint16(6, 20, true);         // Version needed to extract
      dv.setUint16(8, 0x0800, true);     // General purpose bit flag (UTF-8)
      dv.setUint16(10, 0, true);         // Compression method (0 = STORE)
      dv.setUint16(12, 0, true);         // File last mod time
      dv.setUint16(14, 0x5821, true);    // File last mod date
      dv.setUint32(16, rec.crc, true);   // CRC-32
      dv.setUint32(20, rec.size, true);  // Compressed size
      dv.setUint32(24, rec.size, true);  // Uncompressed size
      dv.setUint16(28, rec.nameBytes.length, true); // File name length
      dv.setUint16(30, 0, true);         // Extra field length
      dv.setUint16(32, 0, true);         // File comment length
      dv.setUint16(34, 0, true);         // Disk number start
      dv.setUint16(36, 0, true);         // Internal file attributes
      dv.setUint32(38, 0x00000020, true); // External file attributes (standard archive file)
      dv.setUint32(42, rec.offset, true); // Relative offset of local header
      cdHeader.set(rec.nameBytes, 46);

      centralDirHeaders.push(cdHeader);
      centralDirSize += cdHeader.length;
    }

    // End of Central Directory Record (EOCD - 22 bytes)
    const eocd = new Uint8Array(22);
    const dvEocd = new DataView(eocd.buffer);
    dvEocd.setUint32(0, 0x06054b50, true); // EOCD signature 'PK\x05\x06'
    dvEocd.setUint16(4, 0, true);          // Number of this disk
    dvEocd.setUint16(6, 0, true);          // Disk where central directory starts
    dvEocd.setUint16(8, fileRecords.length, true);  // Number of records on this disk
    dvEocd.setUint16(10, fileRecords.length, true); // Total number of records
    dvEocd.setUint32(12, centralDirSize, true);     // Size of central directory
    dvEocd.setUint32(16, currentOffset, true);      // Offset of start of central directory
    dvEocd.setUint16(20, 0, true);                  // Comment length

    // Assemble all chunks into a single Blob
    const blobParts = [];
    for (const rec of fileRecords) {
      blobParts.push(rec.localHeader);
      blobParts.push(rec.dataBytes);
    }
    for (const cdh of centralDirHeaders) {
      blobParts.push(cdh);
    }
    blobParts.push(eocd);

    return new Blob(blobParts, { type: 'application/zip' });
  }

  /**
   * Triggers an immediate browser download of a given Blob
   */
  function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 2500);
  }

  /**
   * Shows a stylish floating notification
   */
  function showZipToast(message, isSuccess) {
    let toast = document.getElementById('project-zip-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'project-zip-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '24px';
      toast.style.right = '24px';
      toast.style.zIndex = '999999';
      toast.style.padding = '12px 20px';
      toast.style.borderRadius = '14px';
      toast.style.fontSize = '13px';
      toast.style.fontWeight = '700';
      toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)';
      toast.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      toast.style.display = 'flex';
      toast.style.alignItems = 'center';
      toast.style.gap = '10px';
      toast.style.pointerEvents = 'none';
      document.body.appendChild(toast);
    }

    toast.style.background = isSuccess !== false ? '#0f172a' : '#7f1d1d';
    toast.style.color = '#ffffff';
    toast.style.border = isSuccess !== false ? '1px solid #38bdf8' : '1px solid #f87171';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${isSuccess !== false ? '#38bdf8' : '#f87171'}" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      <span>${message}</span>
    `;

    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0) scale(1)';

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px) scale(0.95)';
    }, 3500);
  }

  /**
   * Main download function invoked by the .Zip button in MY PROJECT
   */
  window.downloadProjectZip = function (day, projectTitle) {
    // If not in frontend track, handle backend/database external zip links
    if (typeof activeDomain !== 'undefined' && activeDomain !== 'frontend') {
      const taskObj = (PORTAL_DATA[activeDomain] && PORTAL_DATA[activeDomain].tasks['MY PROJECT'])
        ? PORTAL_DATA[activeDomain].tasks['MY PROJECT'].find(function(t) { return t.day === day; })
        : null;
      if (taskObj && taskObj.zip) {
        showZipToast(`⬇️ Downloading ${projectTitle || 'Project ' + day} .Zip...`, true);
        const a = document.createElement('a');
        a.href = taskObj.zip;
        a.download = '';
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { document.body.removeChild(a); }, 1000);
        return;
      }
    }

    // Project 1: Has pre-existing Creation&Evolution.zip
    if (day === 1) {
      showZipToast('⬇️ Downloading Creation&Evolution.zip...', true);
      const a = document.createElement('a');
      a.href = 'Frontend - Copy/Tailwind-v4.3/Day4/Creation%26Evolution.zip';
      a.download = 'Creation&Evolution.zip';
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { document.body.removeChild(a); }, 1000);
      return;
    }

    const bundle = window.PROJECT_BUNDLES[day];
    if (bundle && bundle.files && bundle.files.length > 0) {
      showZipToast(`⬇️ Generating & Downloading ${bundle.name}...`, true);
      try {
        const blob = createZipBlob(bundle.files);
        triggerDownload(blob, bundle.name);
        setTimeout(function () {
          showZipToast(`✅ ${bundle.name} downloaded successfully!`, true);
        }, 800);
      } catch (err) {
        console.error('ZIP generation failed:', err);
        showZipToast('Failed to create ZIP archive: ' + err.message, false);
      }
    } else {
      showZipToast(`Preparing archive for Project ${day}...`, false);
    }
  };

  // Expose builder for testing or custom exports
  window.createZipBlob = createZipBlob;
  window.triggerDownload = triggerDownload;
})();
