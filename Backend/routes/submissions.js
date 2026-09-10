const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const submissionController = require('../controllers/submissionController');

// Ensure uploads folder exists
const uploadDir = path.resolve(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, 'sub-' + uniqueSuffix + ext);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// POST /api/submissions
router.post('/', upload.single('attachment'), submissionController.submitTask);

// GET /api/submissions
router.get('/', submissionController.getAllSubmissions);

// GET /api/submissions/task/:taskId
router.get('/task/:taskId', submissionController.getSubmissionsByTaskId);

// PATCH /api/submissions/:id/review
router.patch('/:id/review', submissionController.reviewSubmission);

module.exports = router;
