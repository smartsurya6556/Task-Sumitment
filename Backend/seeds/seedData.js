const tracks = [
  {
    slug: 'frontend',
    title: 'Frontend Development',
    description: 'React, Tailwind CSS, TypeScript, Kanban boards, video players, and 3D portfolio experiences.',
    icon: 'Layout',
    color: 'from-cyan-500 to-blue-600',
    badge: '10 Tasks Active',
    task_count: 10
  },
  {
    slug: 'backend',
    title: 'Backend Engineering',
    description: 'REST & GraphQL APIs, JWT Auth, WebSockets, Redis caching, Stripe webhooks, and BullMQ queues.',
    icon: 'Server',
    color: 'from-emerald-500 to-teal-600',
    badge: '10 Tasks Active',
    task_count: 10
  },
  {
    slug: 'fullstack',
    title: 'Fullstack Systems',
    description: 'End-to-end fullstack platforms: E-Commerce store, real-time doc editor, AI chat, and multi-tenant SaaS.',
    icon: 'Layers',
    color: 'from-purple-500 to-indigo-600',
    badge: '10 Tasks Active',
    task_count: 10
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Figma design systems, SaaS landing wireframes, fintech mobile app UI, and smart animate prototypes.',
    icon: 'Palette',
    color: 'from-pink-500 to-rose-600',
    badge: '10 Tasks Active',
    task_count: 10
  }
];

const tasks = [
  // ================= FRONTEND TRACK (10 TASKS) =================
  {
    task_number: 1, track_slug: 'frontend', title: 'Responsive SaaS Landing Page with Dark Mode',
    short_desc: 'Build a modern responsive landing page with sticky navigation, hero section, pricing table, and persistent dark mode.',
    full_desc: 'Design and build a responsive landing page with sticky navigation, hero section, pricing table with monthly/annual 20% discount toggle, FAQ accordion, and dark mode.',
    difficulty: 'Beginner', points: 150, estimated_time: '2 - 3 Hours', tags: ['React', 'Tailwind CSS', 'Responsive', 'LocalStorage'],
    requirements: ['Sticky navigation bar with smooth section scroll links', 'Hero section with dynamic headline and CTA buttons', 'Interactive pricing table with monthly/annual discount toggle', 'Expandable FAQ accordion with smooth open/close transitions', 'Dark and Light theme switcher with localStorage persistence'],
    acceptance_criteria: ['Zero horizontal scrollbars on mobile and desktop', 'Lighthouse Performance score >= 90', 'Theme persists smoothly upon reload'],
    starter_resources: [{ name: 'Tailwind Docs', url: 'https://tailwindcss.com' }, { name: 'Lucide Icons', url: 'https://lucide.dev' }]
  },
  {
    task_number: 2, track_slug: 'frontend', title: 'Interactive Authentication & Multi-Step Onboarding',
    short_desc: 'Build an auth flow with Login/Register tabs, inline regex email validation, dynamic password meter, and 3-step wizard.',
    full_desc: 'Build an auth flow with Login/Register tabs, inline regex email validation, dynamic password strength meter, and a 3-step profile onboarding wizard.',
    difficulty: 'Beginner', points: 200, estimated_time: '3 - 4 Hours', tags: ['React', 'Validation', 'Step Wizard', 'Forms'],
    requirements: ['Login and Sign Up tab toggle with smooth transition', 'Real-time inline email and password validation', 'Dynamic password strength meter with 4 criterion checks', '3-Step onboarding wizard (Role selection, Tech stack, Workspace)', 'Animated step progress bar with back and forward controls'],
    acceptance_criteria: ['Form prevents submission with invalid fields', 'Toast notification upon registration', 'Full keyboard accessibility support'],
    starter_resources: [{ name: 'Form Validation Guide', url: 'https://developer.mozilla.org' }]
  },
  {
    task_number: 3, track_slug: 'frontend', title: 'Real-Time Notification Center & Activity Feed',
    short_desc: 'Construct a notification popover similar to GitHub/Slack with unread count badges and filter tabs.',
    full_desc: 'Construct a notification popover similar to GitHub/Slack with unread count badges, filter tabs (All, Mentions, System), and "Mark all as read" actions.',
    difficulty: 'Intermediate', points: 250, estimated_time: '3 - 4 Hours', tags: ['React', 'Notification Center', 'UI/UX', 'State'],
    requirements: ['Interactive notification bell with animated unread count badge', 'Popover with categories (All, Mentions, System)', 'Mark single notification as read and "Mark All as Read" action', 'Swipe or click to dismiss notifications with smooth exit animation', 'Simulated incoming notification trigger button'],
    acceptance_criteria: ['Unread badge count updates dynamically', 'Empty state graphic when no notifications exist'],
    starter_resources: [{ name: 'Headless UI Popover', url: 'https://headlessui.com' }]
  },
  {
    task_number: 4, track_slug: 'frontend', title: 'Advanced E-Commerce Product Catalog with Cart & Checkout',
    short_desc: 'Build an e-commerce storefront with multi-faceted filtering, sorting, fuzzy search, and slide-over Cart drawer.',
    full_desc: 'Build an e-commerce storefront with multi-faceted filtering (category, price slider, rating), sorting, instant fuzzy search, and slide-over Cart drawer.',
    difficulty: 'Intermediate', points: 300, estimated_time: '4 - 5 Hours', tags: ['React', 'E-Commerce', 'Cart State', 'Faceted Filters'],
    requirements: ['Product catalog grid with high-resolution images and discount tags', 'Multi-filter sidebar (Category checkboxes, Price range dual-slider)', 'Slide-over Cart Drawer with add/remove/quantity update controls', 'Promo code voucher system (e.g. "DEV20" for 20% discount)', 'Cart state persistence across browser reload'],
    acceptance_criteria: ['Accurate price, tax, and discount calculation', 'Snappy optimistic UI updates for cart items'],
    starter_resources: [{ name: 'FakeStore API', url: 'https://fakestoreapi.com' }]
  },
  {
    task_number: 5, track_slug: 'frontend', title: 'Drag-and-Drop Kanban Task Management Board',
    short_desc: 'Build a Trello-style board supporting drag-and-drop between columns, subtask checklists, and priority badges.',
    full_desc: 'Build a Trello-style board supporting drag-and-drop between columns (Backlog, In Progress, Review, Done), subtask checklists, and priority badges.',
    difficulty: 'Intermediate', points: 350, estimated_time: '4 - 6 Hours', tags: ['React', 'Drag and Drop', 'Kanban', 'Productivity'],
    requirements: ['Multiple Kanban columns with dynamic task counters', 'Seamless drag-and-drop of cards across different columns', 'Create and edit task cards with priority tags (Low, Med, High, Urgent)', 'Subtask completion checklist updating progress on the card', 'Filter cards by priority tag or keyword search'],
    acceptance_criteria: ['Smooth drop animations', 'Board auto-saves to localStorage'],
    starter_resources: [{ name: 'Hello Pangea DnD', url: 'https://github.com/hello-pangea/dnd' }]
  },
  {
    task_number: 6, track_slug: 'frontend', title: 'Multimedia Video Player & Streaming Playlist UI',
    short_desc: 'Develop a custom media player with custom overlay controls, scrubbable seek bar, and playlist queue.',
    full_desc: 'Develop a custom media player inspired by YouTube/Netflix with custom overlay controls, scrubbable seek bar, playback speed selector, and playlist queue.',
    difficulty: 'Intermediate', points: 300, estimated_time: '4 - 5 Hours', tags: ['React', 'HTML5 Video', 'Custom Controls', 'Media'],
    requirements: ['Custom video controls overlay that hides on idle', 'Scrubbable timeline seek bar with hover time preview', 'Playback speed options (0.5x, 1x, 1.5x, 2x)', 'Keyboard shortcuts (Space: Play/Pause, M: Mute, F: Fullscreen)', 'Interactive playlist sidebar with auto-play next'],
    acceptance_criteria: ['Controls fade out after 2s inactivity', 'Responsive aspect ratio preserved'],
    starter_resources: [{ name: 'MDN Video API', url: 'https://developer.mozilla.org' }]
  },
  {
    task_number: 7, track_slug: 'frontend', title: 'Real-Time Collaborative Chat & Messaging Interface',
    short_desc: 'Create an engaging messaging interface featuring multi-channel sidebar, direct messages, and emoji reactions.',
    full_desc: 'Create an engaging messaging interface featuring multi-channel sidebar (#general, #dev), direct messages list, emoji reactions, and simulated bot responses.',
    difficulty: 'Advanced', points: 400, estimated_time: '5 - 6 Hours', tags: ['React', 'Chat UI', 'Real-time', 'Emoji Picker'],
    requirements: ['Sidebar with Channel List, Direct Messages, and Online Status', 'Message stream with user avatars and timestamp grouping', 'Rich input with emoji picker, file attachment preview, and Enter key send', 'Emoji reactions with count badges', 'Simulated automated bot response after 1.5s'],
    acceptance_criteria: ['Auto-scroll to bottom on new message', 'Real-time search filtering'],
    starter_resources: [{ name: 'Slack Design System', url: 'https://slack.com' }]
  },
  {
    task_number: 8, track_slug: 'frontend', title: 'Interactive Crypto & Financial Analytics Dashboard',
    short_desc: 'Build a financial trading dashboard with live market tickers, interactive price charts, and portfolio breakdown.',
    full_desc: 'Build a financial trading dashboard with live market tickers (BTC, ETH, SOL), interactive price charts with timeframe toggles, and portfolio allocation breakdown.',
    difficulty: 'Advanced', points: 450, estimated_time: '5 - 7 Hours', tags: ['React', 'Charts', 'Fintech', 'Data Viz'],
    requirements: ['Live metric cards showing Current Balance, 24h P&L (+8.4%), and Active Orders', 'Interactive price chart with timeframe selector (1D, 1W, 1M, 1Y, ALL)', 'Asset Allocation breakdown chart (BTC, ETH, SOL, USDT)', 'Quick Buy / Sell simulated trade widget with balance update', 'Filterable transaction history table with export to CSV'],
    acceptance_criteria: ['Responsive charts with tooltips', 'Real-time trade calculation updates'],
    starter_resources: [{ name: 'Recharts', url: 'https://recharts.org' }]
  },
  {
    task_number: 9, track_slug: 'frontend', title: 'Dynamic Schema-Driven Form Wizard with Complex Validation',
    short_desc: 'Create a 4-step enterprise application wizard with dynamic repeatable fields and summary review.',
    full_desc: 'Create a 4-step enterprise application wizard. Includes personal details, dynamic repeatable job experience fields, skill chips selector, and summary review.',
    difficulty: 'Advanced', points: 450, estimated_time: '5 - 7 Hours', tags: ['React', 'Dynamic Forms', 'Dropzone', 'Validation'],
    requirements: ['4-Step structured wizard with step-indicator navigation', 'Conditional field rendering based on user inputs', 'Repeatable field arrays to add/remove multiple job experiences', 'Drag-and-drop file uploader with size/type validation', 'Final summary review page allowing jump-links to edit any step'],
    acceptance_criteria: ['Prevents proceeding with invalid fields', 'Draft survives page reload'],
    starter_resources: [{ name: 'React Hook Form', url: 'https://react-hook-form.com' }]
  },
  {
    task_number: 10, track_slug: 'frontend', title: '3D Glassmorphism Developer Portfolio with Micro-Interactions',
    short_desc: 'Build an ultra-modern developer portfolio featuring 3D perspective tilt cards and interactive terminal.',
    full_desc: 'Build an ultra-modern developer portfolio featuring interactive particle background, 3D perspective tilt cards on project hover, and interactive terminal console.',
    difficulty: 'Advanced', points: 500, estimated_time: '6 - 8 Hours', tags: ['React', '3D Effects', 'Glassmorphism', 'Canvas API'],
    requirements: ['Hero section with dynamic typing effect and particle background', 'Bento-grid project showcase with 3D perspective mouse tilt effect', 'Interactive terminal component responding to commands (`help`, `skills`)', 'Subtle UI sound effects toggle', 'Copy email to clipboard button with animated checkmark'],
    acceptance_criteria: ['60 FPS smooth rendering', 'Flawless responsive fallback on mobile'],
    starter_resources: [{ name: 'Vanilla Tilt', url: 'https://micku7zu.github.io/vanilla-tilt.js/' }]
  },

  // ================= BACKEND TRACK (10 TASKS) =================
  {
    task_number: 1, track_slug: 'backend', title: 'RESTful CRUD API with JWT Authentication & SQLite',
    short_desc: 'Build a secure Node.js Express REST API with user registration, password hashing (bcrypt), and JWT tokens.',
    full_desc: 'Build a secure Node.js Express REST API with user registration, password hashing (bcrypt), JWT access tokens, and full CRUD operations on tasks.',
    difficulty: 'Beginner', points: 150, estimated_time: '2 - 3 Hours', tags: ['Node.js', 'Express', 'JWT', 'SQLite', 'bcrypt'],
    requirements: ['User registration and login endpoints with input validation', 'Password hashing using bcrypt with salt rounds', 'JWT token generation, verification middleware, and auth header checking', 'CRUD endpoints for task management with user ownership checks', 'Centralized error handling middleware'],
    acceptance_criteria: ['Returns appropriate HTTP status codes (200, 201, 400, 401, 404)', 'Passwords stored hashed in database'],
    starter_resources: [{ name: 'Express Docs', url: 'https://expressjs.com' }]
  },
  {
    task_number: 2, track_slug: 'backend', title: 'Role-Based Access Control (RBAC) & Permission Middleware',
    short_desc: 'Implement an enterprise RBAC system with Admin, Editor, and Viewer roles protecting routes.',
    full_desc: 'Implement an enterprise RBAC system with Admin, Editor, and Viewer roles, protecting specific API routes and resources dynamically.',
    difficulty: 'Beginner', points: 200, estimated_time: '3 - 4 Hours', tags: ['Express', 'RBAC', 'Security', 'Middleware'],
    requirements: ['Database schema for Roles, Permissions, and User associations', 'Reusable requirePermission middleware', 'Admin routes to assign and revoke user roles', 'Audit log table tracking unauthorized access attempts', 'Automated unit tests for access denial responses (403)'],
    acceptance_criteria: ['Enforces strict role permissions', 'Returns 403 Forbidden with descriptive error JSON'],
    starter_resources: [{ name: 'OWASP RBAC Guide', url: 'https://owasp.org' }]
  },
  {
    task_number: 3, track_slug: 'backend', title: 'Scalable File & Asset Upload API with Multer & Storage',
    short_desc: 'Build a file upload service with Multer supporting image resizing, MIME validation, and secure names.',
    full_desc: 'Build a file upload service with Multer supporting image resizing, MIME type validation, file size limits, and unique CDN filename generation.',
    difficulty: 'Intermediate', points: 250, estimated_time: '3 - 4 Hours', tags: ['Multer', 'File Upload', 'Sharp', 'Cloud Storage'],
    requirements: ['Multer storage config with strict filetype whitelist (PNG, JPG, PDF)', 'Automatic thumbnail generation using Sharp for uploaded images', 'Secure filename hashing preventing path traversal attacks', 'Static file serving endpoint with caching headers', 'API endpoint to delete and clean up orphan uploaded files'],
    acceptance_criteria: ['Rejects files exceeding 10MB limit', 'Images automatically optimized'],
    starter_resources: [{ name: 'Multer GitHub', url: 'https://github.com/expressjs/multer' }]
  },
  {
    task_number: 4, track_slug: 'backend', title: 'Real-Time WebSocket Messaging & Room Broadcast Engine',
    short_desc: 'Develop a Socket.io server supporting multi-room joining, instant message broadcasts, and typing events.',
    full_desc: 'Develop a Socket.io / WebSocket server supporting multi-room joining, instant message broadcasts, typing indicators, and user presence.',
    difficulty: 'Intermediate', points: 300, estimated_time: '4 - 5 Hours', tags: ['WebSockets', 'Socket.io', 'Real-time', 'Rooms'],
    requirements: ['WebSocket server handshake with JWT authentication', 'Join and leave channel rooms with broadcast notifications', 'Real-time message dispatch and persistence to SQLite database', 'Live user typing status events with debounce', 'Online user presence tracker and disconnect cleanup'],
    acceptance_criteria: ['Broadcasts messages only to room participants', 'Handles reconnections seamlessly'],
    starter_resources: [{ name: 'Socket.io Docs', url: 'https://socket.io' }]
  },
  {
    task_number: 5, track_slug: 'backend', title: 'Redis Caching Layer & IP Rate Limiting Engine',
    short_desc: 'Implement caching for expensive queries and sliding window rate limiting to prevent API abuse.',
    full_desc: 'Implement caching for expensive database queries with cache invalidation on mutations and sliding window rate limiting to prevent API abuse.',
    difficulty: 'Intermediate', points: 350, estimated_time: '4 - 5 Hours', tags: ['Redis', 'Caching', 'Rate Limiting', 'Performance'],
    requirements: ['Redis client integration with fallback memory cache', 'Cache-aside pattern for GET /api/tasks with TTL expiration', 'Automatic cache purge middleware when tasks are modified', 'Sliding window rate limiter middleware (max 100 requests per 15 mins)', 'Return X-RateLimit headers'],
    acceptance_criteria: ['Response latency dropped significantly on cached routes', 'Returns 429 Too Many Requests when rate exceeded'],
    starter_resources: [{ name: 'Redis Documentation', url: 'https://redis.io' }]
  },
  {
    task_number: 6, track_slug: 'backend', title: 'Payment Gateway Webhook Handler & Idempotency System',
    short_desc: 'Build a Stripe webhook listener handling payment successes and preventing duplicate processing.',
    full_desc: 'Build a Stripe webhook listener handling payment successes, subscription renewals, refunds, and preventing duplicate processing via idempotency keys.',
    difficulty: 'Intermediate', points: 300, estimated_time: '4 - 5 Hours', tags: ['Stripe', 'Webhooks', 'Idempotency', 'Payments'],
    requirements: ['Verify raw webhook signatures using Stripe SDK secret', 'Handle checkout.session.completed and subscription cancellations', 'Idempotency database table preventing double fulfillment on retries', 'Order state update in transaction and trigger email receipt notification', 'Simulate webhook test events using Stripe CLI'],
    acceptance_criteria: ['Duplicate webhook events ignored safely', 'Cryptographic signature verified strictly'],
    starter_resources: [{ name: 'Stripe Webhooks Guide', url: 'https://stripe.com/docs/webhooks' }]
  },
  {
    task_number: 7, track_slug: 'backend', title: 'Background Job Queue & Task Scheduler with BullMQ',
    short_desc: 'Implement a distributed background worker for async tasks like sending emails and scheduled backups.',
    full_desc: 'Implement a distributed background worker for async tasks like sending email digests, generating PDF reports, and scheduled database backups.',
    difficulty: 'Advanced', points: 400, estimated_time: '5 - 6 Hours', tags: ['BullMQ', 'Redis', 'Worker', 'Cron Scheduler'],
    requirements: ['BullMQ job queue for processing email notifications asynchronously', 'Worker concurrency settings with exponential backoff on failure', 'Scheduled cron job running daily at midnight for statistics aggregation', 'Dead letter queue (DLQ) for inspecting failed jobs', 'Admin queue dashboard showing active and failed counts'],
    acceptance_criteria: ['Jobs processed asynchronously without blocking main thread', 'Failed jobs retry automatically up to 3 times'],
    starter_resources: [{ name: 'BullMQ Docs', url: 'https://bullmq.io' }]
  },
  {
    task_number: 8, track_slug: 'backend', title: 'Database Indexing, Query Optimization & Pagination Engine',
    short_desc: 'Optimize relational queries with composite B-Tree indexes and cursor-based infinite pagination.',
    full_desc: 'Optimize relational database queries with composite B-Tree indexes, cursor-based infinite pagination, and execution plan analysis (`EXPLAIN QUERY PLAN`).',
    difficulty: 'Advanced', points: 450, estimated_time: '5 - 6 Hours', tags: ['SQL', 'Indexes', 'Cursor Pagination', 'Optimization'],
    requirements: ['Implement cursor-based pagination using WHERE id > ? LIMIT ?', 'Add composite indexes on frequently filtered columns', 'Run EXPLAIN QUERY PLAN to verify index scans vs full table scans', 'Full-text search engine using SQLite FTS5 for lightning fast queries', 'Benchmark query performance comparison before and after indexing'],
    acceptance_criteria: ['Zero full-table scans on paginated filtered queries', 'Paging works with millions of rows without performance degradation'],
    starter_resources: [{ name: 'SQLite Indexing Guide', url: 'https://www.sqlite.org/queryplanner.html' }]
  },
  {
    task_number: 9, track_slug: 'backend', title: 'Microservices API Gateway & Service Token Verifier',
    short_desc: 'Construct an API gateway routing requests between Auth, Tasks, and Notifications with circuit breaking.',
    full_desc: 'Construct an API gateway routing requests between Auth Service, Task Service, and Notification Service with load balancing and circuit breaking.',
    difficulty: 'Advanced', points: 450, estimated_time: '5 - 7 Hours', tags: ['API Gateway', 'Microservices', 'Proxy', 'Circuit Breaker'],
    requirements: ['Reverse proxy forwarding /api/auth/* and /api/tasks/* to downstream services', 'Unified authentication token inspection at the gateway level', 'Circuit breaker pattern returning graceful fallback when a service is down', 'Request logging with unique correlation IDs', 'Health check monitoring for all registered microservices'],
    acceptance_criteria: ['Gateway returns 503 when downstream is down without crashing', 'Propagates correlation ID across all service logs'],
    starter_resources: [{ name: 'Express Gateway', url: 'https://www.express-gateway.io' }]
  },
  {
    task_number: 10, track_slug: 'backend', title: 'Server Health Monitoring, Metric Logging & Alert System',
    short_desc: 'Build a production monitoring suite exposing Prometheus /metrics and Discord/Slack crash webhooks.',
    full_desc: 'Build a production monitoring suite exposing Prometheus /metrics (CPU, Memory, Event Loop Lag, Request Latency), and Discord/Slack crash webhooks.',
    difficulty: 'Advanced', points: 500, estimated_time: '6 - 8 Hours', tags: ['Prometheus', 'Metrics', 'Health Check', 'Alerting'],
    requirements: ['Expose Prometheus compatible /metrics endpoint with memory & latency histograms', 'Structured JSON logger with Winston / Pino including log levels', 'Liveness (/health/live) and Readiness (/health/ready) probe endpoints', 'Automated webhook alert dispatch to Discord/Slack on unhandled exceptions (500)', 'Zero-downtime graceful shutdown handler on SIGINT/SIGTERM'],
    acceptance_criteria: ['Metrics endpoint parseable by Prometheus server', 'Crash alerts fire within 2 seconds of error'],
    starter_resources: [{ name: 'Prometheus Node Client', url: 'https://github.com/siimon/prom-client' }]
  },

  // ================= FULLSTACK TRACK (10 TASKS) =================
  {
    task_number: 1, track_slug: 'fullstack', title: 'Fullstack Auth & Session System with React & Node',
    short_desc: 'Build a complete authentication portal with React frontend, Express backend, SQLite DB, and HTTP-only cookies.',
    full_desc: 'Build a complete authentication portal with React frontend, Express backend, SQLite database, HTTP-only secure cookies, and password reset email flow.',
    difficulty: 'Beginner', points: 200, estimated_time: '3 - 4 Hours', tags: ['React', 'Express', 'SQLite', 'Cookies', 'Fullstack'],
    requirements: ['React frontend with form validation and animated auth states', 'Express backend issuing secure HTTP-only cookies with JWT', 'Password reset flow with temporary crypto tokens and expiry', 'Protected frontend routes redirecting unauthorized users to login', 'Persistent user profile synchronization across page refreshes'],
    acceptance_criteria: ['Cookies protected against XSS attacks', 'Auth token survives browser restarts securely'],
    starter_resources: [{ name: 'React Router Auth', url: 'https://reactrouter.com' }]
  },
  {
    task_number: 2, track_slug: 'fullstack', title: 'Fullstack E-Commerce Store with Cart & Stripe Checkout',
    short_desc: 'Connect a modern React shopping frontend with an Express API, server cart calculation, and Stripe checkout.',
    full_desc: 'Connect a modern React shopping frontend with an Express product catalog API, server-side cart calculation, and live Stripe Checkout session.',
    difficulty: 'Intermediate', points: 300, estimated_time: '4 - 5 Hours', tags: ['Fullstack', 'Stripe', 'Shopping Cart', 'Express'],
    requirements: ['Dynamic product catalog loaded from backend database', 'Server-side price verification preventing client price tampering', 'Stripe Checkout integration redirecting to success and cancel pages', 'Webhook confirmation updating order status to "Paid"', 'User order history dashboard with status tracking'],
    acceptance_criteria: ['Prices verified strictly on backend', 'Orders recorded upon successful webhook fulfillment'],
    starter_resources: [{ name: 'Stripe React Guide', url: 'https://stripe.com/docs/payments/accept-a-payment' }]
  },
  {
    task_number: 3, track_slug: 'fullstack', title: 'Real-Time Collaborative Document Editor with WebSockets',
    short_desc: 'Build a Google Docs inspired collaborative note editor where multiple users type concurrently with live cursors.',
    full_desc: 'Build a Google Docs / Notion inspired collaborative note editor where multiple users can type concurrently with live cursor positions and auto-save.',
    difficulty: 'Intermediate', points: 350, estimated_time: '4 - 6 Hours', tags: ['WebSockets', 'Rich Text', 'Collaboration', 'Auto-save'],
    requirements: ['Rich text editing canvas with Markdown formatting tools', 'Real-time WebSocket synchronization of document edits between connected clients', 'Live colored cursor position indicators for active collaborators', 'Debounced auto-save to database with "Saved" status indicator', 'Document version history with rollback capability'],
    acceptance_criteria: ['Conflict resolution handles simultaneous edits', 'Live cursor position matches accurately across browsers'],
    starter_resources: [{ name: 'Quill.js', url: 'https://quilljs.com' }]
  },
  {
    task_number: 4, track_slug: 'fullstack', title: 'Fullstack Project Management & Kanban Board with SQLite',
    short_desc: 'Develop a complete project management app where frontend React drag-and-drop actions persist to SQLite.',
    full_desc: 'Develop a complete project management app where frontend React drag-and-drop actions automatically persist card column changes to the backend database.',
    difficulty: 'Intermediate', points: 350, estimated_time: '4 - 6 Hours', tags: ['React', 'Drag & Drop', 'SQLite API', 'Fullstack'],
    requirements: ['Frontend drag & drop updating task status immediately via optimistic UI', 'Backend endpoint PATCH /api/tasks/:id/reorder persisting column & index', 'Task card subtasks, assignees, and file attachments stored in database', 'Activity audit log recording who moved or edited what card', 'Filter tasks by assignee, priority, and due date on frontend and backend'],
    acceptance_criteria: ['Optimistic UI rollbacks if backend returns error', 'Columns and card ordering persist accurately on reload'],
    starter_resources: [{ name: 'Tailwind Kanban', url: 'https://tailwindui.com' }]
  },
  {
    task_number: 5, track_slug: 'fullstack', title: 'Fullstack Social Feed with Likes, Comments & Media Upload',
    short_desc: 'Create a social platform with feed posts, instant like counter toggle, nested comments, and Multer upload.',
    full_desc: 'Create an Instagram/Twitter style social platform with feed posts, instant like counter toggle, nested comments thread, and image upload with Multer.',
    difficulty: 'Intermediate', points: 350, estimated_time: '4 - 6 Hours', tags: ['Social Feed', 'Comments', 'Multer', 'Optimistic UI'],
    requirements: ['Post creation form with multiple image upload support', 'Instant optimistic like/unlike toggle with debounce database sync', 'Recursive nested comments system (replies to comments)', 'User profile page showing created posts and stats', 'Infinite scroll pagination fetching next page of posts as user scrolls'],
    acceptance_criteria: ['Like counter updates instantly without lag', 'Nested replies nest cleanly up to 3 levels deep'],
    starter_resources: [{ name: 'Infinite Scroll React', url: 'https://tanstack.com/query/latest' }]
  },
  {
    task_number: 6, track_slug: 'fullstack', title: 'Multi-Room Video & Audio Conferencing Web Portal',
    short_desc: 'Develop a WebRTC video meeting app where users create rooms, share screen, mute mic, and chat in real time.',
    full_desc: 'Develop a WebRTC / WebSocket video meeting app where users can create unique meeting rooms, share screen, mute mic, and send in-call chat messages.',
    difficulty: 'Advanced', points: 450, estimated_time: '5 - 7 Hours', tags: ['WebRTC', 'WebSockets', 'Video Call', 'Screen Share'],
    requirements: ['WebSocket signaling server exchanging WebRTC SDP offers/answers & ICE candidates', 'Video grid layout automatically adapting to participant count', 'Toggle Camera On/Off, Microphone Mute, and Screen Sharing stream', 'In-meeting real-time chat drawer with timestamped messages', 'Unique shareable room link with participant join permission controls'],
    acceptance_criteria: ['Audio and video streams synchronize with low latency', 'Screen sharing stream toggles without interrupting audio'],
    starter_resources: [{ name: 'WebRTC API MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API' }]
  },
  {
    task_number: 7, track_slug: 'fullstack', title: 'AI Assistant Platform with Streaming Responses & Memory',
    short_desc: 'Build an AI chat workspace with streaming token responses, syntax highlighting, and conversation history.',
    full_desc: 'Build an AI chat workspace with streaming token responses, code syntax highlighting, conversation history branching, and custom system persona selector.',
    difficulty: 'Advanced', points: 450, estimated_time: '5 - 7 Hours', tags: ['AI', 'Server-Sent Events', 'LLM Stream', 'Fullstack'],
    requirements: ['Server-Sent Events (SSE) streaming API response tokens in real-time to frontend', 'Markdown renderer with code copy button and syntax highlighting', 'Conversations saved in database with title auto-generation', 'System prompt selector (e.g. "Code Assistant", "UX Writer", "DB Optimizer")', 'Export conversation transcript as Markdown or PDF'],
    acceptance_criteria: ['Tokens stream smoothly without stutter', 'Code snippets format with syntax highlighting'],
    starter_resources: [{ name: 'Server-Sent Events Guide', url: 'https://developer.mozilla.org' }]
  },
  {
    task_number: 8, track_slug: 'fullstack', title: 'Fullstack Multi-Tenant SaaS Workspace with Role Permissions',
    short_desc: 'Build a multi-tenant platform where users create organizations, invite members via email, and manage roles.',
    full_desc: 'Build a multi-tenant platform where users can create organizations/workspaces, invite team members via email tokens, and manage role access.',
    difficulty: 'Advanced', points: 450, estimated_time: '5 - 7 Hours', tags: ['Multi-Tenant', 'SaaS', 'Team Invites', 'Security'],
    requirements: ['Organization creation with subdomain/slug identifier and isolation', 'Team member email invitation system with acceptance links and tokens', 'Role management per workspace (Owner, Admin, Member, Guest)', 'Workspace switcher dropdown preserving active context in frontend state', 'Billing plan usage limit enforcer (e.g., max 5 members on Free tier)'],
    acceptance_criteria: ['Strict data isolation between workspaces', 'Invitations expire safely after 48 hours'],
    starter_resources: [{ name: 'Multi-Tenant Architecture', url: 'https://martinfowler.com' }]
  },
  {
    task_number: 9, track_slug: 'fullstack', title: 'Dockerized Fullstack Web App with CI/CD Pipeline',
    short_desc: 'Containerize React Frontend and Express Backend with Docker Compose, Nginx proxy, and GitHub Actions CI.',
    full_desc: 'Containerize both React Frontend and Express Backend with Docker Compose, Nginx reverse proxy, SQLite volume persistence, and GitHub Actions CI workflow.',
    difficulty: 'Advanced', points: 450, estimated_time: '5 - 7 Hours', tags: ['Docker', 'Nginx', 'CI/CD', 'DevOps'],
    requirements: ['Multi-stage Dockerfile for React frontend producing optimized static build', 'Dockerfile for Express backend with non-root security user', 'docker-compose.yml running frontend, backend, and Nginx proxy with 1 command', 'Volume mounting for persistent database and file uploads', 'GitHub Actions workflow running linting, tests, and Docker build on push'],
    acceptance_criteria: ['docker compose up starts entire application with zero errors', 'Nginx proxies /api to backend and / to frontend correctly'],
    starter_resources: [{ name: 'Docker Compose Docs', url: 'https://docs.docker.com/compose/' }]
  },
  {
    task_number: 10, track_slug: 'fullstack', title: 'Real-Time Crypto Trading Simulator & Portfolio Tracker',
    short_desc: 'Build a fintech simulation app with live price feeds, candlestick charts, buy/sell orders, and P&L math.',
    full_desc: 'Build a fintech simulation web app with live price feeds, interactive candlestick charts, buy/sell limit orders, and automatic P&L calculation.',
    difficulty: 'Advanced', points: 500, estimated_time: '6 - 8 Hours', tags: ['Fintech', 'WebSockets', 'Charts', 'Fullstack'],
    requirements: ['WebSocket client streaming live price tickers for top cryptos', 'Interactive Chart with Technical Indicators (SMA, EMA, RSI)', 'Order placement widget executing simulated buy/sell orders with wallet balance deduction', 'Portfolio allocation breakdown chart and trade history log', 'CSV export for simulated transaction tax statement'],
    acceptance_criteria: ['Live ticker updates within 100ms of WebSocket event', 'Wallet deductions calculate accurately with slippage'],
    starter_resources: [{ name: 'TradingView Lightweight Charts', url: 'https://www.tradingview.com/lightweight-charts/' }]
  },

  // ================= UI/UX TRACK (10 TASKS) =================
  {
    task_number: 1, track_slug: 'ui-ux', title: 'Modern SaaS Design System & Typography / Color Tokens',
    short_desc: 'Create a comprehensive Figma design system with color tokens, typography scales, button variants, and icons.',
    full_desc: 'Create a comprehensive Figma design system including primary/neutral color tokens, typography scales, button component variants, and icon sets.',
    difficulty: 'Beginner', points: 150, estimated_time: '2 - 3 Hours', tags: ['Figma', 'Design System', 'Tokens', 'Components'],
    requirements: ['Harmonious color palette (Primary, Secondary, Neutral, Semantic states)', 'Typography scale based on 8pt grid with desktop & mobile font styles', 'Button component set with variants (Filled, Outlined, Ghost), states (Hover, Active, Disabled)', 'Input fields, toggle switches, and checkbox component sets', 'Auto-layout configured on all components with auto-resizing rules'],
    acceptance_criteria: ['100% components use Auto-Layout', 'Design tokens documented clearly in Figma styles'],
    starter_resources: [{ name: 'Figma Community Design Systems', url: 'https://www.figma.com/community' }]
  },
  {
    task_number: 2, track_slug: 'ui-ux', title: 'Responsive SaaS Landing Page Wireframe & High-Fi Prototype',
    short_desc: 'Design a high-converting landing page in desktop (1440px) and mobile (390px) with hero, bento-grid, and pricing.',
    full_desc: 'Design a high-converting landing page for a developer tool in desktop (1440px) and mobile (390px) with hero section, feature bento-grid, and pricing.',
    difficulty: 'Beginner', points: 200, estimated_time: '3 - 4 Hours', tags: ['Figma', 'Landing Page', 'Responsive', 'Bento Grid'],
    requirements: ['Desktop (1440px) and Mobile (390px) responsive layout frames', 'Hero section with prominent value proposition, CTA, and product preview', 'Bento-grid feature showcase highlighting key product capabilities', 'Interactive 3-tier pricing cards with recommended plan badge', 'Footer with newsletter subscription and organized site links'],
    acceptance_criteria: ['Responsive layout maintains visual rhythm', 'High visual polish with modern dark theme'],
    starter_resources: [{ name: 'Landingfolio Inspiration', url: 'https://www.landingfolio.com' }]
  },
  {
    task_number: 3, track_slug: 'ui-ux', title: 'Interactive User Onboarding & Auth Screen Flows',
    short_desc: 'Design an intuitive auth and 3-step onboarding flow with role picker, preferences, and progress dots.',
    full_desc: 'Design an intuitive user authentication and 3-step onboarding flow with role picker, personal preference tags, and interactive progress indicators.',
    difficulty: 'Beginner', points: 200, estimated_time: '3 - 4 Hours', tags: ['Figma', 'Onboarding', 'Auth Flow', 'UX Research'],
    requirements: ['Clean Login & Sign Up screen variations with social login buttons', 'Form validation state designs (Default, Focused, Error, Success)', '3-Step personalized onboarding flow with animated progress dots', 'Role selection cards with custom illustrated icons', 'Welcome modal celebrating completed onboarding with quick action jump-links'],
    acceptance_criteria: ['Covers all error and empty states', 'Clear step progression visual hierarchy'],
    starter_resources: [{ name: 'PageFlows Onboarding UX', url: 'https://pageflows.com' }]
  },
  {
    task_number: 4, track_slug: 'ui-ux', title: 'Fintech Mobile Banking App UI with Dark Mode',
    short_desc: 'Design an iOS mobile banking app with virtual card carousel, spending analytics, and quick money transfer sheet.',
    full_desc: 'Design an iOS mobile banking application with virtual card carousel, spending analytics pie chart, quick money transfer sheet, and dark theme.',
    difficulty: 'Intermediate', points: 300, estimated_time: '4 - 5 Hours', tags: ['Figma', 'Fintech', 'iOS Design', 'Dark Mode'],
    requirements: ['Card slider showcase with debit/credit card gradient mockups', 'Recent transactions list grouped by date with category icons', 'Interactive bottom sheet modal for "Send Money to Contacts"', 'Spending insights breakdown chart with weekly/monthly toggles', 'Complete Dark Mode and Light Mode frame variations'],
    acceptance_criteria: ['Follows Apple Human Interface Guidelines (HIG)', 'Includes both light and dark mode variations'],
    starter_resources: [{ name: 'Apple HIG Design Kit', url: 'https://developer.apple.com/design/' }]
  },
  {
    task_number: 5, track_slug: 'ui-ux', title: 'E-Commerce Storefront & Checkout Funnel UX Prototype',
    short_desc: 'Design an end-to-end shopping journey from product discovery, multi-variant selector, cart, to checkout.',
    full_desc: 'Design an end-to-end shopping journey from product discovery, multi-variant selector (Size, Color), sliding cart drawer, to 3-step checkout.',
    difficulty: 'Intermediate', points: 300, estimated_time: '4 - 5 Hours', tags: ['Figma', 'E-Commerce', 'Checkout UX', 'Prototype'],
    requirements: ['Product detail page with thumbnail gallery and variant selector chips', 'Slide-over cart drawer with subtotal breakdown and promo code input', 'Streamlined 3-step checkout flow (Shipping, Payment, Confirmation)', 'Order confirmation screen with animated receipt card', 'Figma Smart Animate connections demonstrating the checkout transition'],
    acceptance_criteria: ['Interactive clickable prototype connection in Figma', 'Frictionless checkout UX minimizing form abandonment'],
    starter_resources: [{ name: 'Mobbin E-Commerce UX', url: 'https://mobbin.com' }]
  },
  {
    task_number: 6, track_slug: 'ui-ux', title: 'Healthcare Doctor Appointment Booking Mobile App',
    short_desc: 'Create an accessible healthcare app allowing patients to search doctors, select calendar slots, and call.',
    full_desc: 'Create an accessible healthcare app UI allowing patients to search doctors by specialty, select calendar time slots, and view telemedicine consultations.',
    difficulty: 'Intermediate', points: 300, estimated_time: '4 - 5 Hours', tags: ['Healthcare', 'Mobile App', 'Calendar UI', 'Accessibility'],
    requirements: ['Specialist search screen with filter chips (Cardiology, Dermatology, etc.)', 'Doctor profile screen with credentials, patient reviews, and clinic location', 'Interactive calendar date picker and time slot selection grid', 'Telemedicine video consultation mockup with call controls', 'High-contrast accessible color scheme adhering to WCAG standards'],
    acceptance_criteria: ['Accessible color contrast ratios (>= 4.5:1)', 'Clear doctor availability slot states'],
    starter_resources: [{ name: 'Dribbble Healthcare UI', url: 'https://dribbble.com' }]
  },
  {
    task_number: 7, track_slug: 'ui-ux', title: 'B2B Enterprise Analytics Dashboard with Data Widgets',
    short_desc: 'Design a SaaS analytics dashboard with revenue charts, customer cohort retention heatmap, and data table.',
    full_desc: 'Design a clean SaaS analytics dashboard with revenue charts, customer cohort retention heatmap, KPI metric cards, and filterable data table.',
    difficulty: 'Advanced', points: 400, estimated_time: '5 - 6 Hours', tags: ['Dashboard', 'B2B SaaS', 'Data Viz', 'Heatmap'],
    requirements: ['Top metric KPI cards with sparklines and percentage delta tags (+12.4%)', 'Revenue growth area chart with hover tooltip states', 'Customer cohort retention matrix heatmap with color gradient scale', 'Filterable data table with sortable column headers and row action menus', 'Collapsible left sidebar navigation with badge indicators'],
    acceptance_criteria: ['Dashboard widgets align to 8px baseline grid', 'Clear hierarchy for dense data visualization'],
    starter_resources: [{ name: 'Chart UI Kits', url: 'https://www.figma.com/community' }]
  },
  {
    task_number: 8, track_slug: 'ui-ux', title: 'Food Delivery Mobile App with Live Order Tracking Map',
    short_desc: 'Design a food delivery app with restaurant menus, customized toppings modal, and live GPS courier tracking map.',
    full_desc: 'Design a food delivery app featuring restaurant menu categories, customized item modal (extra toppings), and a real-time GPS courier delivery map.',
    difficulty: 'Advanced', points: 400, estimated_time: '5 - 6 Hours', tags: ['Food Delivery', 'Map UI', 'Mobile UI', 'Figma'],
    requirements: ['Restaurant discovery home screen with food category carousel', 'Customizable food item modal with checkbox add-ons (Extra cheese, spice level)', 'Checkout summary with delivery address selector and tipping options', 'Live order tracking map screen with courier rider location pin & ETA timer', 'Push notification banner mockups (Order Prepared, Rider on the way)'],
    acceptance_criteria: ['Map screen showcases clear status step progress', 'Intuitive item customizer interaction'],
    starter_resources: [{ name: 'Uber Eats UX Breakdown', url: 'https://growth.design' }]
  },
  {
    task_number: 9, track_slug: 'ui-ux', title: 'Interactive Figma Prototype with Smart Animate Micro-Interactions',
    short_desc: 'Build an advanced interactive prototype with animated menu overlays, drag-to-dismiss cards, and hover physics.',
    full_desc: 'Build an advanced interactive Figma prototype with animated menu overlays, drag-to-dismiss cards, hover button physics, and modal transitions.',
    difficulty: 'Advanced', points: 450, estimated_time: '5 - 7 Hours', tags: ['Figma', 'Smart Animate', 'Micro-Interactions', 'Prototyping'],
    requirements: ['Navigation drawer with spring physics open/close transitions', 'Interactive toggle switches and animated progress bars using Component Variants', 'Drag-to-delete gesture on list items with smooth card collapse', 'Hover state elevation and micro-particle glow effects', 'Shareable Figma Prototype preview link demonstrating smooth 60fps animations'],
    acceptance_criteria: ['Fluid 60 FPS transitions between frames', 'Smart Animate parameters configured with ease-out springs'],
    starter_resources: [{ name: 'Figma Smart Animate Tutorial', url: 'https://help.figma.com' }]
  },
  {
    task_number: 10, track_slug: 'ui-ux', title: 'Comprehensive Accessibility (WCAG 2.1 AA) Design Audit & Kit',
    short_desc: 'Design an accessible UI audit showcasing 4.5:1 contrast ratios, screen reader focus rings, and touch targets.',
    full_desc: 'Design an accessible UI design audit showcasing 4.5:1 color contrast ratios, screen reader focus rings, scalable typography, and touch target guides.',
    difficulty: 'Advanced', points: 500, estimated_time: '6 - 8 Hours', tags: ['Accessibility', 'WCAG 2.1', 'Design Audit', 'Inclusive Design'],
    requirements: ['Color contrast compliance matrix testing all brand colors against white & dark backgrounds', 'Visible focus ring indicator styles for keyboard navigation on all interactive elements', 'Minimum 48x48px touch target guide for mobile UI elements', 'Text scaling comparison frame testing layouts at 200% font zoom', 'Documentation guide on ARIA labels and alt-text best practices for developers'],
    acceptance_criteria: ['100% color combinations pass WCAG 2.1 AA contrast check', 'Clear visual documentation for engineering handoff'],
    starter_resources: [{ name: 'Stark Accessibility Tool', url: 'https://www.getstark.co' }]
  }
];

const sampleSubmissions = [
  {
    task_id: 1,
    candidate_name: 'Alex Johnson',
    candidate_email: 'alex.dev@example.com',
    github_url: 'https://github.com/alexj-dev/saas-landing-darkmode',
    live_demo_url: 'https://saas-landing-darkmode.vercel.app',
    notes: 'Implemented responsive SaaS landing page with sticky glass navbar and persistent dark mode.',
    status: 'Approved',
    score: 98,
    reviewer_feedback: 'Outstanding implementation! Clean component hierarchy and pixel-perfect responsiveness.'
  },
  {
    task_id: 11,
    candidate_name: 'Sophia Chen',
    candidate_email: 'sophia.chen@example.com',
    github_url: 'https://github.com/sophiac/express-jwt-sqlite-api',
    live_demo_url: 'https://api-task-demo.onrender.com',
    notes: 'Express REST API with bcrypt password hashing, JWT auth, and SQLite storage.',
    status: 'Approved',
    score: 96,
    reviewer_feedback: 'Great regex validation and clean error handling middleware.'
  }
];

module.exports = {
  tracks,
  tasks,
  sampleSubmissions
};
