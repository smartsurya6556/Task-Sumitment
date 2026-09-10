/**
 * Project 2: JS Lab • Logic & Practice (Part 1)
 * Application Structure & Core Script Assets
 */
(function() {
  'use strict';
  window.PROJECT_BUNDLES = window.PROJECT_BUNDLES || {};
  window.PROJECT_BUNDLES[2] = window.PROJECT_BUNDLES[2] || {
    name: 'Lab-javascript-learning.zip',
    title: 'JS Lab • Logic & Practice',
    files: []
  };

  window.PROJECT_BUNDLES[2].files.push(
    {
      path: 'index.html',
      data: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS LAB — Learn JavaScript & Practice Logic</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

  <!-- Top Navigation Bar -->
  <header class="top-navbar">
    <div class="navbar-inner">
      <a href="../../../index.html" onclick="if(window.history.length > 1){ window.history.back(); return false; }" style="background:#3b0764; color:#c084fc; border:1px solid #6b21a8; padding:6px 14px; border-radius:9999px; text-decoration:none; font-weight:bold; font-size:12px; margin-right:12px; display:inline-flex; align-items:center; gap:6px;">← DevTask HUB</a>
      <a href="#dashboard" class="brand-logo-link" data-view="dashboard">
        <span class="logo-icon-badge">JS</span>
        <span class="logo-text-title">LAB<span class="logo-text-dot">.</span></span>
      </a>

      <ul class="nav-links-list">
        <li><a href="#dashboard" class="nav-link active" data-view="dashboard">Dashboard</a></li>
        <li><a href="#topics" class="nav-link" data-view="topics">Topics</a></li>
        <li><a href="#practice" class="nav-link" data-view="practice">Logical Practice</a></li>
        <li><a href="#cheat" class="nav-link" data-view="cheat">JS Cheat Lab</a></li>
      </ul>

      <div class="search-box-wrap">
        <svg class="search-icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          id="global-search-input" 
          class="search-input-field" 
          placeholder="Search JavaScript topics or logical questions..." 
          autocomplete="off"
          spellcheck="false"
        >
        <div id="search-dropdown-results" class="search-dropdown-panel hidden"></div>
      </div>

      <button class="mobile-toggle-btn" id="mobile-menu-toggle" aria-label="Toggle navigation">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>

    <nav class="mobile-nav-menu" id="mobile-nav-menu">
      <ul class="mobile-nav-list">
        <li><a href="#dashboard" class="mobile-nav-link active" data-view="dashboard">Dashboard</a></li>
        <li><a href="#topics" class="mobile-nav-link" data-view="topics">Topics</a></li>
        <li><a href="#practice" class="mobile-nav-link" data-view="practice">Logical Practice</a></li>
        <li><a href="#cheat" class="mobile-nav-link" data-view="cheat">JS Cheat Lab</a></li>
      </ul>
    </nav>
  </header>

  <main class="main-content">
    <section class="app-view active-view" id="view-dashboard">
      <div class="hero-card">
        <span class="hero-tag">JS LAB • Developer Study Workspace</span>
        <h1 class="hero-title">JavaScript Learning Lab</h1>
        <p class="hero-description">
          Learn JavaScript fundamentals, build logical thinking, and prepare for coding tests.
        </p>
        <div class="hero-slogan-flow">
          <span>Learn</span> &rarr; <span>Understand</span> &rarr; <span>Practice</span> &rarr; <span>Improve</span>
        </div>
        <div class="hero-actions-row">
          <button class="btn-primary-solid" data-goto="topics">Explore Topics</button>
          <button class="btn-secondary-outline" data-goto="practice">Practice Logic</button>
        </div>
      </div>

      <div class="stats-grid-four">
        <div class="stat-metric-card"><div class="stat-number">10</div><div class="stat-label">JavaScript Topics</div></div>
        <div class="stat-metric-card"><div class="stat-number">10</div><div class="stat-label">Logical Questions</div></div>
        <div class="stat-metric-card"><div class="stat-number" style="color: #f87171;">5</div><div class="stat-label">Hard Problems</div></div>
        <div class="stat-metric-card"><div class="stat-number" style="color: #34d399;">5</div><div class="stat-label">Easy Problems</div></div>
      </div>

      <h2 class="dashboard-block-title">Learning & Practice Hub</h2>
      <div class="dash-sections-grid">
        <div class="dash-feature-card" data-goto="topics">
          <div>
            <div class="dash-card-header"><span class="topic-num-badge">Section A</span><span class="topic-category-pill">10 Topics</span></div>
            <h3 class="dash-card-title">10 Important JavaScript Topics</h3>
            <p class="dash-card-desc">Variables, Data Types, Operators, Conditions, Functions, Arrays, Objects, Destructuring, and Classes.</p>
          </div>
          <span class="dash-card-link link-gold">Explore Topics &rarr;</span>
        </div>
        <div class="dash-feature-card border-hard" data-goto="practice" data-filter="hard">
          <div>
            <div class="dash-card-header"><span class="diff-badge badge-hard">🔴 Hard Set</span><span class="topic-category-pill">5 Questions</span></div>
            <h3 class="dash-card-title">Advanced OOP & Systems Logic</h3>
            <p class="dash-card-desc">Bank Account, Shopping Cart, ATM Withdrawal, Bank Loan, and Student Result System.</p>
          </div>
          <span class="dash-card-link link-red">Practice 5 Hard Questions &rarr;</span>
        </div>
        <div class="dash-feature-card border-easy" data-goto="practice" data-filter="easy">
          <div>
            <div class="dash-card-header"><span class="diff-badge badge-easy">🟢 Easy Set</span><span class="topic-category-pill">5 Questions</span></div>
            <h3 class="dash-card-title">Core Logic & Range Drills</h3>
            <p class="dash-card-desc">Weather Checker, Delivery Charge, Car Speed, Shopping Discount, and Login Security.</p>
          </div>
          <span class="dash-card-link link-green">Practice 5 Easy Questions &rarr;</span>
        </div>
      </div>
    </section>

    <section class="app-view hidden" id="view-topics">
      <div class="view-header-box">
        <span class="view-badge-indicator">Section A • Complete Fundamentals</span>
        <h1 class="view-headline">JavaScript Topics</h1>
        <p class="view-subtext">Master the fundamentals with syntax, interactive code, output, and test points.</p>
      </div>
      <div class="topics-grid-container" id="topics-grid-container"></div>
    </section>

    <section class="app-view hidden" id="view-practice">
      <div class="view-header-box">
        <span class="view-badge-indicator">Section B • 10 Core Programs (5 Hard • 5 Easy)</span>
        <h1 class="view-headline">Logical Practice</h1>
        <p class="view-subtext">Practice real-world JavaScript logic using simple conditions, functions, arrays, and objects.</p>
      </div>
      <div class="segmented-filter-bar">
        <button class="filter-tab-btn active" data-practice-filter="all">ALL (10)</button>
        <button class="filter-tab-btn" data-practice-filter="hard">HARD (5)</button>
        <button class="filter-tab-btn" data-practice-filter="easy">EASY (5)</button>
      </div>
      <div class="practice-section-group" id="hard-questions-group">
        <div class="practice-group-header">
          <div class="group-header-left"><span class="diff-badge badge-hard">HARD</span><h2 class="group-title">Advanced OOP & System Practice</h2></div>
          <span class="group-count-tag">5 Questions</span>
        </div>
        <div class="questions-grid-container" id="hard-questions-grid"></div>
      </div>
      <div class="practice-section-group" id="easy-questions-group">
        <div class="practice-group-header">
          <div class="group-header-left"><span class="diff-badge badge-easy">EASY</span><h2 class="group-title">Core Logic Drills</h2></div>
          <span class="group-count-tag">5 Questions</span>
        </div>
        <div class="questions-grid-container" id="easy-questions-grid"></div>
      </div>
    </section>

    <section class="app-view hidden" id="view-cheat">
      <div class="view-header-box">
        <span class="view-badge-indicator">Quick Visual Learning Reference</span>
        <h1 class="view-headline">JavaScript Cheat Lab</h1>
        <p class="view-subtext">Understand JavaScript concepts quickly with simple examples and syntax.</p>
      </div>
      <div class="practice-section-group">
        <div class="cheat-cards-grid" id="cheat-cards-grid"></div>
      </div>
    </section>
  </main>

  <div class="modal-overlay" id="detail-modal-overlay">
    <div class="modal-container">
      <button class="modal-close-btn" id="detail-modal-close" aria-label="Close modal">✕</button>
      <div class="modal-scrollable-body" id="detail-modal-body"></div>
    </div>
  </div>

  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-brand-title">JS LAB</div>
        <div>Learn JavaScript. Build Logic. Practice Better.</div>
        <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 4px;">© 2026 JS LAB • Developer Study Workspace</div>
      </div>
    </div>
  </footer>

  <script src="assets/js/runner.js"></script>
  <script src="assets/js/data/topics-data.js"></script>
  <script src="assets/js/data/questions-data.js"></script>
  <script src="assets/js/data/cheat-data.js"></script>
  <script src="assets/js/data/revision-data.js"></script>
  <script src="assets/js/app.js"></script>
</body>
</html>`
    },
    {
      path: 'assets/css/style.css',
      data: `:root {
  --bg-main: #090d16;
  --bg-surface: #0f172a;
  --bg-surface-elevated: #152138;
  --bg-card: #131e33;
  --bg-card-hover: #192742;
  --bg-input: #0b1220;
  --bg-code: #080c14;
  --bg-terminal: #04070d;
  --border-subtle: #1e293b;
  --border-medium: #2c3e5a;
  --border-strong: #3b5072;
  --border-focus: #f59e0b;
  --primary: #f59e0b;
  --primary-hover: #d97706;
  --primary-light: #fbbf24;
  --accent-cyan: #38bdf8;
  --accent-purple: #c084fc;
  --accent-red: #f43f5e;
  --accent-green: #10b981;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --max-width: 1200px;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: var(--bg-main); color: var(--text-main); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; min-height: 100vh; line-height: 1.5; }
.top-navbar { background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border-subtle); position: sticky; top: 0; z-index: 50; }
.navbar-inner { max-width: var(--max-width); margin: 0 auto; height: 64px; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; }
.brand-logo-link { display: flex; align-items: center; gap: 8px; text-decoration: none; }
.logo-icon-badge { background: #f59e0b; color: #000; font-weight: 900; font-size: 13px; padding: 4px 7px; border-radius: 6px; }
.logo-text-title { font-size: 18px; font-weight: 800; color: #fff; letter-spacing: -0.5px; }
.logo-text-dot { color: #f59e0b; }
.nav-links-list { display: flex; list-style: none; gap: 6px; }
.nav-link { color: var(--text-muted); text-decoration: none; font-size: 13px; font-weight: 600; padding: 8px 14px; border-radius: 8px; transition: 0.2s; }
.nav-link:hover, .nav-link.active { color: #fff; background: rgba(255, 255, 255, 0.08); }
.search-box-wrap { position: relative; width: 280px; }
.search-input-field { width: 100%; background: var(--bg-input); border: 1px solid var(--border-subtle); border-radius: 20px; color: #fff; font-size: 12px; padding: 8px 14px 8px 34px; outline: none; }
.search-icon-svg { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-dim); }
.main-content { max-width: var(--max-width); margin: 0 auto; padding: 30px 20px; }
.hero-card { background: linear-gradient(135deg, rgba(245,158,11,0.08), rgba(15,23,42,0.6)); border: 1px solid rgba(245,158,11,0.25); border-radius: 16px; padding: 40px; text-align: center; margin-bottom: 35px; }
.hero-tag { display: inline-block; font-size: 11px; font-weight: 700; color: #f59e0b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
.hero-title { font-size: 36px; font-weight: 800; color: #fff; margin-bottom: 12px; }
.hero-description { color: var(--text-muted); font-size: 15px; max-width: 600px; margin: 0 auto 20px; }
.hero-slogan-flow { display: flex; justify-content: center; gap: 12px; color: var(--primary-light); font-weight: 700; font-size: 13px; margin-bottom: 25px; }
.hero-actions-row { display: flex; justify-content: center; gap: 15px; }
.btn-primary-solid { background: #f59e0b; color: #000; border: none; font-weight: 700; padding: 10px 24px; border-radius: 8px; cursor: pointer; transition: 0.2s; }
.btn-primary-solid:hover { background: #d97706; transform: translateY(-2px); }
.btn-secondary-outline { background: transparent; color: #fff; border: 1px solid var(--border-medium); font-weight: 600; padding: 10px 20px; border-radius: 8px; cursor: pointer; transition: 0.2s; }
.btn-secondary-outline:hover { background: rgba(255,255,255,0.06); }
.stats-grid-four { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 35px; }
.stat-metric-card { background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 18px; text-align: center; }
.stat-number { font-size: 26px; font-weight: 800; color: #f59e0b; }
.stat-label { font-size: 12px; color: var(--text-muted); margin-top: 4px; font-weight: 600; }
.dashboard-block-title { font-size: 20px; font-weight: 700; margin-bottom: 18px; color: #fff; }
.dash-sections-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.dash-feature-card { background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer; transition: 0.3s; }
.dash-feature-card:hover { transform: translateY(-4px); border-color: #f59e0b; box-shadow: 0 10px 30px rgba(245,158,11,0.1); }
.border-hard:hover { border-color: #f43f5e; box-shadow: 0 10px 30px rgba(244,63,94,0.1); }
.border-easy:hover { border-color: #10b981; box-shadow: 0 10px 30px rgba(16,185,129,0.1); }
.dash-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.dash-card-title { font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 8px; }
.dash-card-desc { font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 18px; }
.dash-card-link { font-size: 12px; font-weight: 700; }
.link-gold { color: #f59e0b; }
.link-red { color: #f87171; }
.link-green { color: #34d399; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); display: none; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
.modal-overlay.active { display: flex; }
.modal-container { background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: 16px; width: 100%; max-width: 800px; max-height: 88vh; display: flex; flex-direction: column; position: relative; overflow: hidden; }
.modal-close-btn { position: absolute; right: 16px; top: 16px; background: transparent; border: none; color: #94a3b8; font-size: 18px; cursor: pointer; }
.modal-scrollable-body { padding: 30px; overflow-y: auto; color: #e2e8f0; font-size: 14px; }
.app-footer { border-top: 1px solid var(--border-subtle); padding: 30px 20px; text-align: center; margin-top: 60px; font-size: 13px; color: var(--text-dim); }`
    },
    {
      path: 'assets/js/runner.js',
      data: `/**
 * JavaScript Learning & Logic Lab - Code Runner & Terminal Engine
 */
class CodeRunner {
  static run(codeString, outputElementId) {
    const outputEl = document.getElementById(outputElementId);
    if (!outputEl) return;
    outputEl.innerHTML = '';
    const logs = [];
    const originalLog = console.log;
    console.log = (...args) => {
      logs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '));
      originalLog.apply(console, args);
    };
    try {
      new Function(codeString)();
      outputEl.innerHTML = logs.map(line => '<div>' + line + '</div>').join('');
    } catch (err) {
      outputEl.innerHTML = '<div style="color:#f87171">Error: ' + err.message + '</div>';
    } finally {
      console.log = originalLog;
    }
  }
}
window.CodeRunner = CodeRunner;`
    },
    {
      path: 'assets/js/index.js',
      data: `// 1. Bank Account System — Classes & Nested Arrow Functions
class SBIbankaccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

const bankSystem = (account) => {
  const checkBalance = () => { console.log(\`Current Balance : ₹\${account.balance} \`); };
  const deposit = (amount) => {
    if (amount > 0) {
      account.balance += amount;
      console.log(\`Deposite : ₹ \${amount}\`);
    } else {
      console.log("Invalid Deposite Amount");
    }
  };
  const withraw = (amount) => {
    if (amount <= account.balance) {
      account.balance -= amount;
      console.log(\`Withraw : ₹ \${amount}\`);
    } else {
      console.log("Insufficient Balance");
    }
  };
  console.log(\`=== Bank Operations for: \${account.name} ===\`);
  checkBalance();
  deposit(12000);
  withraw(3500);
  checkBalance();
};

const account = new SBIbankaccount("Sarath", 45000);
bankSystem(account);`
    }
  );
})();
