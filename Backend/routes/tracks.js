const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// GET /api/tracks
router.get('/', taskController.getAllTracks);

// GET /api/tracks/:slug/tasks
router.get('/:slug/tasks', taskController.getTasksByTrack);

module.exports = router;
