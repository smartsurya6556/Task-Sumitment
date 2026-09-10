const db = require('../models/db');

// Helper to safely parse JSON strings
const safeParse = (str, fallback = []) => {
  try {
    return typeof str === 'string' ? JSON.parse(str) : str;
  } catch (e) {
    return fallback;
  }
};

// GET /api/tracks
exports.getAllTracks = async (req, res) => {
  try {
    const tracks = await db.query('SELECT * FROM tracks ORDER BY id ASC');
    res.json({
      success: true,
      data: tracks
    });
  } catch (error) {
    console.error('Error fetching tracks:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving tracks' });
  }
};

// GET /api/tracks/:slug/tasks
exports.getTasksByTrack = async (req, res) => {
  try {
    const { slug } = req.params;
    const { difficulty, search } = req.query;

    let sql = `
      SELECT t.*, 
        COUNT(s.id) as submission_count,
        MAX(s.submitted_at) as last_submitted_at,
        MAX(s.status) as latest_status
      FROM tasks t
      LEFT JOIN submissions s ON t.id = s.task_id
      WHERE t.track_slug = ?
    `;
    const params = [slug];

    if (difficulty && difficulty !== 'All') {
      sql += ` AND t.difficulty = ?`;
      params.push(difficulty);
    }

    if (search && search.trim() !== '') {
      sql += ` AND (t.title LIKE ? OR t.short_desc LIKE ? OR t.tags LIKE ?)`;
      const searchPattern = `%${search.trim()}%`;
      params.push(searchPattern, searchPattern, searchPattern);
    }

    sql += ` GROUP BY t.id ORDER BY t.task_number ASC`;

    const rawTasks = await db.query(sql, params);

    const formattedTasks = rawTasks.map(task => ({
      ...task,
      tags: safeParse(task.tags),
      requirements: safeParse(task.requirements),
      acceptance_criteria: safeParse(task.acceptance_criteria),
      starter_resources: safeParse(task.starter_resources),
      has_submissions: task.submission_count > 0
    }));

    res.json({
      success: true,
      track_slug: slug,
      total: formattedTasks.length,
      data: formattedTasks
    });
  } catch (error) {
    console.error('Error fetching tasks by track:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving tasks' });
  }
};

// GET /api/tasks/:id
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await db.get('SELECT * FROM tasks WHERE id = ?', [id]);

    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    // Get submissions for this specific task
    const submissions = await db.query(
      'SELECT * FROM submissions WHERE task_id = ? ORDER BY submitted_at DESC',
      [id]
    );

    const formattedTask = {
      ...task,
      tags: safeParse(task.tags),
      requirements: safeParse(task.requirements),
      acceptance_criteria: safeParse(task.acceptance_criteria),
      starter_resources: safeParse(task.starter_resources),
      submissions: submissions
    };

    res.json({
      success: true,
      data: formattedTask
    });
  } catch (error) {
    console.error('Error fetching task details:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving task details' });
  }
};
