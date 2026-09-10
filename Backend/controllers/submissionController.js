const db = require('../models/db');

// POST /api/submissions
exports.submitTask = async (req, res) => {
  try {
    const { task_id, candidate_name, candidate_email, github_url, live_demo_url, notes } = req.body;
    let attachment_path = null;

    if (req.file) {
      attachment_path = `/uploads/${req.file.filename}`;
    }

    // Basic Validation
    if (!task_id) {
      return res.status(400).json({ success: false, message: 'Task ID is required' });
    }
    if (!candidate_name || candidate_name.trim() === '') {
      return res.status(400).json({ success: false, message: 'Candidate name is required' });
    }
    if (!candidate_email || !candidate_email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Valid candidate email is required' });
    }
    if (!github_url || !github_url.trim().startsWith('http')) {
      return res.status(400).json({ success: false, message: 'Valid GitHub repository URL starting with http/https is required' });
    }

    // Verify task exists
    const task = await db.get('SELECT * FROM tasks WHERE id = ?', [task_id]);
    if (!task) {
      return res.status(404).json({ success: false, message: 'Target task does not exist' });
    }

    const insertSql = `
      INSERT INTO submissions (
        task_id, candidate_name, candidate_email, github_url,
        live_demo_url, notes, attachment_path, status, submitted_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, 'Pending', datetime('now'))
    `;

    const result = await db.run(insertSql, [
      task_id,
      candidate_name.trim(),
      candidate_email.trim().toLowerCase(),
      github_url.trim(),
      live_demo_url ? live_demo_url.trim() : null,
      notes ? notes.trim() : null,
      attachment_path
    ]);

    const createdSubmission = await db.get(
      'SELECT * FROM submissions WHERE id = ?',
      [result.id]
    );

    res.status(201).json({
      success: true,
      message: 'Task submitted successfully!',
      data: {
        ...createdSubmission,
        task_title: task.title,
        task_number: task.task_number,
        points: task.points
      }
    });
  } catch (error) {
    console.error('Error submitting task:', error);
    res.status(500).json({ success: false, message: 'Server error processing submission' });
  }
};

// GET /api/submissions
exports.getAllSubmissions = async (req, res) => {
  try {
    const { status, email } = req.query;
    let sql = `
      SELECT s.*, t.title as task_title, t.task_number, t.difficulty, t.points, t.track_slug
      FROM submissions s
      JOIN tasks t ON s.task_id = t.id
      WHERE 1=1
    `;
    const params = [];

    if (status && status !== 'All') {
      sql += ' AND s.status = ?';
      params.push(status);
    }

    if (email) {
      sql += ' AND s.candidate_email = ?';
      params.push(email.trim().toLowerCase());
    }

    sql += ' ORDER BY s.submitted_at DESC';

    const submissions = await db.query(sql, params);

    res.json({
      success: true,
      total: submissions.length,
      data: submissions
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving submissions' });
  }
};

// GET /api/submissions/task/:taskId
exports.getSubmissionsByTaskId = async (req, res) => {
  try {
    const { taskId } = req.params;
    const submissions = await db.query(
      'SELECT * FROM submissions WHERE task_id = ? ORDER BY submitted_at DESC',
      [taskId]
    );

    res.json({
      success: true,
      data: submissions
    });
  } catch (error) {
    console.error('Error fetching submissions for task:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving submissions' });
  }
};

// PATCH /api/submissions/:id/review
exports.reviewSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, score, reviewer_feedback } = req.body;

    const existing = await db.get('SELECT * FROM submissions WHERE id = ?', [id]);
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }

    const newStatus = status || existing.status;
    const newScore = score !== undefined ? parseInt(score, 10) : existing.score;
    const newFeedback = reviewer_feedback !== undefined ? reviewer_feedback : existing.reviewer_feedback;

    await db.run(
      `UPDATE submissions 
       SET status = ?, score = ?, reviewer_feedback = ? 
       WHERE id = ?`,
      [newStatus, newScore, newFeedback, id]
    );

    const updated = await db.get('SELECT * FROM submissions WHERE id = ?', [id]);

    res.json({
      success: true,
      message: 'Submission reviewed successfully',
      data: updated
    });
  } catch (error) {
    console.error('Error reviewing submission:', error);
    res.status(500).json({ success: false, message: 'Server error updating review' });
  }
};

// GET /api/stats
exports.getPlatformStats = async (req, res) => {
  try {
    const totalTasksRow = await db.get('SELECT COUNT(*) as count, SUM(points) as total_xp FROM tasks');
    const totalSubmissionsRow = await db.get('SELECT COUNT(*) as count FROM submissions');
    const approvedSubmissionsRow = await db.get("SELECT COUNT(*) as count FROM submissions WHERE status = 'Approved'");
    const pendingSubmissionsRow = await db.get("SELECT COUNT(*) as count FROM submissions WHERE status = 'Pending'");
    
    // Top candidates leaderboard
    const leaderboard = await db.query(`
      SELECT 
        candidate_name, 
        candidate_email,
        COUNT(id) as total_submissions,
        SUM(CASE WHEN status = 'Approved' THEN 1 ELSE 0 END) as approved_count,
        AVG(score) as avg_score
      FROM submissions
      GROUP BY candidate_email
      ORDER BY approved_count DESC, avg_score DESC
      LIMIT 5
    `);

    res.json({
      success: true,
      data: {
        total_tasks: totalTasksRow.count || 0,
        total_xp: totalTasksRow.total_xp || 0,
        total_submissions: totalSubmissionsRow.count || 0,
        approved_submissions: approvedSubmissionsRow.count || 0,
        pending_submissions: pendingSubmissionsRow.count || 0,
        leaderboard
      }
    });
  } catch (error) {
    console.error('Error fetching platform stats:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving statistics' });
  }
};
