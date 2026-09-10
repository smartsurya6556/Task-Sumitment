# 🚀 DevTask Pro — Fullstack Task Submission Platform

A modern, high-performance, and visually stunning **Task Submission & Engineering Evaluation Web Platform** built with **React (Vite + Tailwind CSS + Lucide Icons + Framer Motion/Confetti)**, **Node.js Express REST API**, and a structured **SQLite Database**.

---

## 🎯 Key Features & Requirements

1. **Category & Track Selection**:
   - Interactive track cards on the home screen: **Frontend Development**, Backend Engineering, Fullstack Systems, and UI/UX Design.
   - Clicking **"Frontend Development"** dynamically opens the **10 Frontend Task Cards**.

2. **10 Curated Frontend Task Cards**:
   - **Task 01**: Responsive Modern SaaS Landing Page with Dark Mode (Beginner, 150 XP)
   - **Task 02**: Interactive Authentication & Multi-Step Onboarding Flow (Beginner, 200 XP)
   - **Task 03**: Real-Time Notification Center & Activity Feed (Intermediate, 250 XP)
   - **Task 04**: Advanced E-Commerce Product Catalog with Cart & Checkout (Intermediate, 300 XP)
   - **Task 05**: Drag-and-Drop Kanban Task Management Board (Intermediate, 350 XP)
   - **Task 06**: Multimedia Video Player & Streaming Playlist UI (Intermediate, 300 XP)
   - **Task 07**: Real-Time Collaborative Chat & Messaging Interface (Advanced, 400 XP)
   - **Task 08**: Interactive Crypto & Financial Analytics Dashboard with Charts (Advanced, 450 XP)
   - **Task 09**: Dynamic Schema-Driven Form Wizard with Complex Validation (Advanced, 450 XP)
   - **Task 10**: 3D Glassmorphism Developer Portfolio with Micro-Interactions (Expert, 500 XP)

3. **Detailed Task Modal / Drawer**:
   - Clicking any task card opens its complete specifications:
     - **Specifications & Rubric**: Problem statement, core functional requirements, and acceptance criteria.
     - **Interactive Progress Checklist**: Clickable self-evaluation checklist with live progress tracking.
     - **Starter Resources**: Links to official docs, Figma templates, and APIs.
     - **Submission Form**: Submit candidate info, GitHub repository URL, Live demo URL, notes, and file attachments.

4. **Live Submission & Evaluation System**:
   - Immediate celebration confetti upon submission.
   - Submissions stored in SQLite database (`Database/task_portal.db`).
   - "My Submissions" tab to view real-time evaluation status (`Pending`, `Approved`, `Needs Revision`), score (0-100), and evaluator feedback.
   - **Reviewer / Evaluator Mode (Admin Simulator)**: Switch toggle in the navbar allows evaluators to grade candidate submissions, assign scores, and write feedback.

5. **Leaderboard & Statistics**:
   - Platform metrics: Total tasks, total XP pool, submission count, average score, and top candidate rankings (🥇, 🥈, 🥉).

---

## 🏗️ Architecture & Project Structure

```
d:\FULLSTACK-TASK/
├── Backend/
│   ├── package.json
│   ├── server.js               # Express API entrypoint
│   ├── routes/
│   │   ├── tracks.js           # Track categories
│   │   ├── tasks.js            # 10 Frontend task routes
│   │   ├── submissions.js      # Task submission handling with Multer
│   │   └── stats.js            # Platform metrics & leaderboard
│   ├── controllers/
│   │   ├── taskController.js
│   │   └── submissionController.js
│   ├── models/
│   │   └── db.js               # SQLite schema & automatic seeding
│   ├── seeds/
│   │   └── seedData.js         # 10 Detailed task specifications
│   └── uploads/                # File attachments & screenshots
├── Database/
│   └── task_portal.db          # Auto-generated SQLite Database
└── Frontend/
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── index.html
    └── src/
        ├── App.jsx             # Main Application Controller
        ├── index.css           # Glassmorphism, glow utilities & dark theme
        ├── components/
        │   ├── Navbar.jsx              # Navigation, Reviewer toggle & theme switch
        │   ├── HeroBanner.jsx          # Search, difficulty filters, and progress
        │   ├── TrackSelector.jsx       # Category cards (Frontend, Backend, etc.)
        │   ├── TaskCard.jsx            # Interactive task cards (#01 to #10)
        │   ├── TaskGrid.jsx            # 10 task cards responsive grid
        │   ├── TaskDetailModal.jsx     # Deep task modal & interactive checklist
        │   ├── SubmissionForm.jsx      # GitHub/Demo submission form + Confetti
        │   ├── SubmissionHistory.jsx   # List of submitted tasks with status
        │   ├── AdminReviewDrawer.jsx   # Evaluator grading panel
        │   ├── StatsOverview.jsx       # Leaderboard and platform statistics
        │   └── Toast.jsx               # Floating toast notifications
        └── services/
            └── api.js                  # Centralized API service with offline fallback
```

---

## ⚡ How to Run the Project

### 1. Run the Backend API:
```bash
cd Backend
npm install
npm start
```
*Backend runs on `http://localhost:5000` and automatically connects to and initializes `Database/task_portal.db`.*

### 2. Run the Frontend:
```bash
cd Frontend
npm install
npm run dev
```
*Frontend runs on `http://localhost:5173` with instant hot-reloading.*

---

## 🌐 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tracks` | Fetch all learning tracks |
| `GET` | `/api/tracks/frontend/tasks` | Fetch the 10 Frontend task cards with filters |
| `GET` | `/api/tasks/:id` | Fetch full specifications, checklist, and submissions for a single task |
| `POST` | `/api/submissions` | Submit candidate solution (GitHub URL, Live URL, Notes, File) |
| `GET` | `/api/submissions` | List all submissions |
| `PATCH` | `/api/submissions/:id/review` | Update submission status, score (0-100), and evaluator feedback |
| `GET` | `/api/stats` | Platform statistics and developer leaderboard |
