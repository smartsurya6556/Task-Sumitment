const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const { tracks, tasks, sampleSubmissions } = require('../seeds/seedData');

const dbDirectory = path.resolve(__dirname, '../../Database');
if (!fs.existsSync(dbDirectory)) {
  fs.mkdirSync(dbDirectory, { recursive: true });
}

const dbPath = path.join(dbDirectory, 'task_portal.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log(`[Database] Connected successfully to SQLite database at ${dbPath}`);
    initDatabase();
  }
});

function initDatabase() {
  db.serialize(() => {
    // 1. Create Tracks Table
    db.run(`
      CREATE TABLE IF NOT EXISTS tracks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        icon TEXT NOT NULL,
        color TEXT NOT NULL,
        badge TEXT,
        task_count INTEGER DEFAULT 0
      )
    `);

    // 2. Create Tasks Table
    db.run(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task_number INTEGER NOT NULL,
        track_slug TEXT NOT NULL,
        title TEXT NOT NULL,
        short_desc TEXT NOT NULL,
        full_desc TEXT NOT NULL,
        difficulty TEXT NOT NULL,
        points INTEGER NOT NULL,
        estimated_time TEXT NOT NULL,
        tags TEXT NOT NULL,
        requirements TEXT NOT NULL,
        acceptance_criteria TEXT NOT NULL,
        starter_resources TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(track_slug) REFERENCES tracks(slug)
      )
    `);

    // 3. Create Submissions Table
    db.run(`
      CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task_id INTEGER NOT NULL,
        candidate_name TEXT NOT NULL,
        candidate_email TEXT NOT NULL,
        github_url TEXT NOT NULL,
        live_demo_url TEXT,
        notes TEXT,
        attachment_path TEXT,
        status TEXT DEFAULT 'Pending',
        score INTEGER DEFAULT NULL,
        reviewer_feedback TEXT,
        submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(task_id) REFERENCES tasks(id)
      )
    `, (err) => {
      if (err) {
        console.error('Error creating tables:', err);
      } else {
        seedInitialData();
      }
    });
  });
}

function seedInitialData() {
  // Check if tracks already exist
  db.get('SELECT COUNT(*) as count FROM tracks', (err, row) => {
    if (err) return console.error('Error querying tracks count:', err);

    if (row.count === 0) {
      console.log('[Database] Seeding initial tracks...');
      const insertTrack = db.prepare(`
        INSERT INTO tracks (slug, title, description, icon, color, badge, task_count)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);

      tracks.forEach(track => {
        insertTrack.run(
          track.slug,
          track.title,
          track.description,
          track.icon,
          track.color,
          track.badge,
          track.task_count
        );
      });
      insertTrack.finalize();
    }
  });

  // Check if tasks already exist
  db.get('SELECT COUNT(*) as count FROM tasks', (err, row) => {
    if (err) return console.error('Error querying tasks count:', err);

    if (row.count === 0) {
      console.log('[Database] Seeding 10 Frontend tasks...');
      const insertTask = db.prepare(`
        INSERT INTO tasks (
          task_number, track_slug, title, short_desc, full_desc,
          difficulty, points, estimated_time, tags,
          requirements, acceptance_criteria, starter_resources
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      tasks.forEach(task => {
        insertTask.run(
          task.task_number,
          task.track_slug,
          task.title,
          task.short_desc,
          task.full_desc,
          task.difficulty,
          task.points,
          task.estimated_time,
          JSON.stringify(task.tags),
          JSON.stringify(task.requirements),
          JSON.stringify(task.acceptance_criteria),
          JSON.stringify(task.starter_resources)
        );
      });
      insertTask.finalize();
    }
  });

  // Check if sample submissions exist
  db.get('SELECT COUNT(*) as count FROM submissions', (err, row) => {
    if (err) return console.error('Error querying submissions count:', err);

    if (row.count === 0) {
      console.log('[Database] Seeding sample submissions...');
      const insertSub = db.prepare(`
        INSERT INTO submissions (
          task_id, candidate_name, candidate_email, github_url,
          live_demo_url, notes, status, score, reviewer_feedback
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      sampleSubmissions.forEach(sub => {
        insertSub.run(
          sub.task_id,
          sub.candidate_name,
          sub.candidate_email,
          sub.github_url,
          sub.live_demo_url,
          sub.notes,
          sub.status,
          sub.score,
          sub.reviewer_feedback
        );
      });
      insertSub.finalize();
    }
  });
}

// Database helper promises
const query = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const get = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

const run = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
};

module.exports = {
  db,
  query,
  get,
  run
};
