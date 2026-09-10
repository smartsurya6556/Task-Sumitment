const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');

// GET /api/stats
router.get('/', submissionController.getPlatformStats);

module.exports = router;
