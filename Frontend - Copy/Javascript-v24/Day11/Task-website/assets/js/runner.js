/**
 * JavaScript Learning & Logic Lab - Code Runner & Terminal Engine
 */

class CodeRunner {
  static run(codeString, outputElementId) {
    const outputEl = document.getElementById(outputElementId);
    if (!outputEl) return;

    // Reset output element
    outputEl.innerHTML = '';
    outputEl.classList.remove('has-error');

    const logs = [];
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    // Helper to format arguments into readable string
    const formatArgs = (args) => {
      return args.map(arg => {
        if (arg === null) return 'null';
        if (arg === undefined) return 'undefined';
        if (typeof arg === 'object') {
          try {
            return JSON.stringify(arg, null, 2);
          } catch (e) {
            return String(arg);
          }
        }
        return String(arg);
      }).join(' ');
    };

    // Override console methods inside execution
    console.log = (...args) => {
      logs.push({ type: 'log', text: formatArgs(args) });
      originalLog.apply(console, args);
    };

    console.warn = (...args) => {
      logs.push({ type: 'warn', text: formatArgs(args) });
      originalWarn.apply(console, args);
    };

    console.error = (...args) => {
      logs.push({ type: 'error', text: formatArgs(args) });
      originalError.apply(console, args);
    };

    try {
      // Execute code safely using Function constructor
      const executeFunction = new Function(codeString);
      executeFunction();

      if (logs.length === 0) {
        outputEl.innerHTML = '<span class="log-empty">// Code executed successfully with no console output.</span>';
      } else {
        outputEl.innerHTML = logs.map(item => {
          const sanitized = this.escapeHtml(item.text);
          return `<div class="terminal-line log-${item.type}"><span class="terminal-bullet">›</span> <span class="log-content">${sanitized}</span></div>`;
        }).join('');
      }
    } catch (error) {
      outputEl.classList.add('has-error');
      outputEl.innerHTML = `<div class="terminal-line log-error"><span class="terminal-bullet">✖</span> <span class="log-content">Execution Error: ${this.escapeHtml(error.message)}</span></div>`;
    } finally {
      // Restore standard console
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
    }
  }

  static escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  static copyToClipboard(text, triggerButton) {
    if (!navigator.clipboard) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.showCopyFeedback(triggerButton);
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      this.showCopyFeedback(triggerButton);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  static showCopyFeedback(button) {
    if (!button) return;
    const originalText = button.innerHTML;
    button.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
    button.classList.add('copied');
    
    // Toast notification
    this.showToast("Code copied to clipboard!");

    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove('copied');
    }, 2000);
  }

  static showToast(message) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
}

// Attach globally
window.CodeRunner = CodeRunner;
