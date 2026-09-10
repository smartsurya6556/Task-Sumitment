const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Initialize SQLite DB
require('./models/db');

const tracksRoutes = require('./routes/tracks');
const tasksRoutes = require('./routes/tasks');
const submissionsRoutes = require('./routes/submissions');
const statsRoutes = require('./routes/stats');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    message: 'Task Portal API is running smoothly'
  });
});

// API Routes
app.use('/api/tracks', tracksRoutes);
app.use('/api/tasks', tasksRoutes);
app.use('/api/submissions', submissionsRoutes);
app.use('/api/stats', statsRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[API Error]:', err.stack || err.message);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`=============================================`);
  console.log(`🚀 Task Portal API Server running on port ${PORT}`);
  console.log(`🔗 API Base: http://localhost:${PORT}/api`);
  console.log(`=============================================`);
});
