/**
 * JavaScript Learning & Logic Lab - Main Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentView: 'dashboard',
    activePracticeFilter: 'all', // 'all', 'hard', 'easy'
    searchQuery: '',
    completedTopics: JSON.parse(localStorage.getItem('js_lab_completed_topics') || '[]'),
    completedQuestions: JSON.parse(localStorage.getItem('js_lab_completed_questions') || '[]')
  };

  // DOM Elements
  const elements = {
    navLinks: document.querySelectorAll('.nav-link[data-view], .mobile-nav-link[data-view]'),
    viewSections: document.querySelectorAll('.app-view'),
    mobileMenuBtn: document.getElementById('mobile-menu-toggle'),
    mobileNav: document.getElementById('mobile-nav-menu'),
    searchInput: document.getElementById('global-search-input'),
    searchResults: document.getElementById('search-dropdown-results'),
    searchWrapper: document.querySelector('.search-box-wrap'),
    
    // Containers
    topicsGrid: document.getElementById('topics-grid-container'),
    hardQuestionsGrid: document.getElementById('hard-questions-grid'),
    easyQuestionsGrid: document.getElementById('easy-questions-grid'),
    hardQuestionsGroup: document.getElementById('hard-questions-group'),
    easyQuestionsGroup: document.getElementById('easy-questions-group'),
    
    // JS Cheat Lab Containers
    cheatCardsGrid: document.getElementById('cheat-cards-grid'),
    cheatFormulaContainer: document.getElementById('cheat-formula-container'),
    cheatMistakesContainer: document.getElementById('cheat-mistakes-container'),
    cheatRememberContainer: document.getElementById('cheat-remember-container'),
    
    // Detail Modal
    detailOverlay: document.getElementById('detail-modal-overlay'),
    detailModalBody: document.getElementById('detail-modal-body'),
    detailModalClose: document.getElementById('detail-modal-close')
  };

  // ==========================================
  // 1. Initialization
  // ==========================================
  function init() {
    setupNavigation();
    setupMobileMenu();
    setupSearch();
    setupModals();
    renderTopics();
    renderQuestions();
    renderCheatLab();
    
    // Handle URL hash or default view
    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
  }

  // ==========================================
  // 2. Navigation & Views Routing
  // ==========================================
  function setupNavigation() {
    // Top Nav & Mobile Nav Links
    elements.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = link.getAttribute('data-view');
        const filter = link.getAttribute('data-filter');
        
        if (filter) {
          state.activePracticeFilter = filter;
          updatePracticeFilterUI();
          renderQuestions();
        }
        
        navigateToView(targetView);
        closeMobileMenu();
      });
    });

    // Quick Action Buttons (Explore Topics / Practice Logic / Cheat Lab)
    document.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('data-goto');
        const filter = btn.getAttribute('data-filter');
        if (filter) {
          state.activePracticeFilter = filter;
          updatePracticeFilterUI();
          renderQuestions();
        }
        navigateToView(target);
      });
    });

    // Logical Practice Filter Tabs [ All ] [ Hard ] [ Easy ]
    document.querySelectorAll('.filter-tab-btn[data-practice-filter]').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab-btn[data-practice-filter]').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activePracticeFilter = tab.getAttribute('data-practice-filter');
        renderQuestions();
      });
    });
  }

  function navigateToView(viewName) {
    state.currentView = viewName;
    window.location.hash = viewName;

    // Update active class on desktop and mobile nav
    elements.navLinks.forEach(link => {
      if (link.getAttribute('data-view') === viewName && !link.getAttribute('data-filter')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Toggle view sections
    elements.viewSections.forEach(section => {
      if (section.id === `view-${viewName}`) {
        section.classList.remove('hidden');
        section.classList.add('active-view');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        section.classList.add('hidden');
        section.classList.remove('active-view');
      }
    });
  }

  function handleHashNavigation() {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('topic-')) {
      const topicId = parseInt(hash.replace('topic-', ''), 10);
      const topic = topicsData.find(t => t.id === topicId);
      if (topic) {
        navigateToView('topics');
        openTopicDetail(topic);
        return;
      }
    }
    if (hash.startsWith('question-')) {
      const qId = parseInt(hash.replace('question-', ''), 10);
      const question = questionsData.find(q => q.id === qId);
      if (question) {
        navigateToView('practice');
        openQuestionDetail(question);
        return;
      }
    }
    if (hash.startsWith('cheat-')) {
      navigateToView('cheat');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('card-highlight');
          setTimeout(() => el.classList.remove('card-highlight'), 1800);
        }
      }, 100);
      return;
    }
    if (['dashboard', 'topics', 'practice', 'cheat'].includes(hash)) {
      navigateToView(hash);
    } else {
      navigateToView('dashboard');
    }
  }

  function updatePracticeFilterUI() {
    document.querySelectorAll('.filter-tab-btn[data-practice-filter]').forEach(tab => {
      if (tab.getAttribute('data-practice-filter') === state.activePracticeFilter) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  // ==========================================
  // 3. Mobile Navigation Menu
  // ==========================================
  function setupMobileMenu() {
    if (elements.mobileMenuBtn && elements.mobileNav) {
      elements.mobileMenuBtn.addEventListener('click', () => {
        elements.mobileNav.classList.toggle('open');
      });
    }
  }

  function closeMobileMenu() {
    if (elements.mobileNav) {
      elements.mobileNav.classList.remove('open');
    }
  }

  // ==========================================
  // 4. Topics Rendering (10 Cards)
  // ==========================================
  function renderTopics() {
    if (!elements.topicsGrid) return;
    elements.topicsGrid.innerHTML = '';

    topicsData.forEach(topic => {
      const numStr = topic.id < 10 ? `0${topic.id}` : `${topic.id}`;
      
      const card = document.createElement('div');
      card.className = 'topic-card';
      card.setAttribute('data-topic-id', topic.id);
      
      card.innerHTML = `
        <div class="card-top-row">
          <span class="topic-num-badge">${numStr}</span>
          <span class="topic-category-pill">${topic.category}</span>
        </div>
        
        <h3 class="topic-card-title">${topic.title}</h3>
        <p class="topic-card-desc">${topic.summary}</p>
        
        <div class="card-bottom-row">
          <span class="topic-action-link">
            View Topic
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        openTopicDetail(topic);
      });

      elements.topicsGrid.appendChild(card);
    });
  }

  function openTopicDetail(topic) {
    if (!elements.detailModalBody) return;

    let comparisonHtml = '';
    if (topic.comparisonTable) {
      const headers = topic.comparisonTable.headers.map(h => `<th>${h}</th>`).join('');
      const rows = topic.comparisonTable.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
      comparisonHtml = `
        <div class="modal-section-block">
          <h4 class="modal-sec-title">Comparison Table</h4>
          <div class="clean-table-responsive">
            <table class="clean-table">
              <thead><tr>${headers}</tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      `;
    }

    let whenToUseHtml = '';
    if (topic.whenToUse) {
      whenToUseHtml = `
        <div class="modal-section-block">
          <h4 class="modal-sec-title">When to use let vs const</h4>
          <div class="rule-box-grid">
            <div class="rule-card">
              <span class="rule-title rule-let">let</span>
              <p>${topic.whenToUse.letRule}</p>
            </div>
            <div class="rule-card">
              <span class="rule-title rule-const">const</span>
              <p>${topic.whenToUse.constRule}</p>
            </div>
          </div>
        </div>
      `;
    }

    const mistakesHtml = topic.commonMistakes.map(m => `
      <div class="mistake-card">
        <div class="mistake-title">⚠️ ${m.mistake}</div>
        <p class="mistake-desc">${m.explanation}</p>
        <div class="mistake-fix"><strong>Fix:</strong> ${m.fix}</div>
      </div>
    `).join('');

    const testPointsHtml = topic.importantForTest.map(p => `
      <li class="clean-list-item">
        <span class="list-bullet">•</span>
        <span>${p}</span>
      </li>
    `).join('');

    const howItWorksHtml = topic.howItWorks.map((step, idx) => `
      <div class="step-card">
        <div class="step-badge">Step ${idx + 1}</div>
        <div class="step-content">${step.replace(/^[0-9]+\.\s*/, '')}</div>
      </div>
    `).join('');

    const codeId = `topic-code-${topic.id}`;
    const outputId = `topic-output-${topic.id}`;

    elements.detailModalBody.innerHTML = `
      <div class="modal-header-block">
        <span class="modal-category-tag">${topic.badge} • ${topic.category}</span>
        <h2 class="modal-main-title">${topic.title}</h2>
        <p class="modal-sub-desc">${topic.summary}</p>
      </div>

      <!-- 1. What is it? & Why is it used? -->
      <div class="modal-grid-two">
        <div class="info-card">
          <h4 class="info-card-title">WHAT IS IT?</h4>
          <p class="info-card-text">${topic.whatIsIt}</p>
        </div>
        <div class="info-card">
          <h4 class="info-card-title">WHY IS IT USED?</h4>
          <p class="info-card-text">${topic.whyUseIt}</p>
        </div>
      </div>

      <!-- 2. Basic Syntax -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">SYNTAX</h4>
        <div class="code-box-wrapper">
          <div class="code-box-header">
            <span class="code-box-filename">syntax.js</span>
            <button class="code-copy-btn" data-copy-target="${topic.id}-syntax">
              Copy Syntax
            </button>
          </div>
          <pre class="code-content"><code id="${topic.id}-syntax">${escapeHtml(topic.syntax)}</code></pre>
        </div>
      </div>

      <!-- Tables / Rules if exist -->
      ${comparisonHtml}
      ${whenToUseHtml}

      <!-- 3. Example Code & Live Output -->
      <div class="modal-section-block">
        <div class="section-title-actions">
          <h4 class="modal-sec-title">EXAMPLE</h4>
          <div class="btn-group-sm">
            <button class="btn-action-primary" id="run-${codeId}">
              Run Code
            </button>
            <button class="btn-action-secondary" id="copy-${codeId}">
              Copy Code
            </button>
          </div>
        </div>

        <div class="code-box-wrapper">
          <div class="code-box-header">
            <span class="code-box-filename">${topic.slug}.js</span>
            <span class="code-lang-tag">JavaScript ES6</span>
          </div>
          <pre class="code-content"><code id="${codeId}">${escapeHtml(topic.codeExample)}</code></pre>
        </div>

        <!-- Terminal Console -->
        <div class="terminal-box-wrapper">
          <div class="terminal-box-header">
            <span>OUTPUT (Console Output)</span>
          </div>
          <div class="terminal-box-body" id="${outputId}">
            ${formatTerminalOutput(topic.expectedOutput)}
          </div>
        </div>
      </div>

      <!-- 4. Explanation -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">HOW IT WORKS</h4>
        <div class="steps-flow-wrap">
          ${howItWorksHtml}
        </div>
      </div>

      <!-- 5. Important for Test -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">IMPORTANT POINTS</h4>
        <ul class="clean-list-wrap">
          ${testPointsHtml}
        </ul>
      </div>

      <!-- 6. Common Beginner Mistakes -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">COMMON MISTAKES</h4>
        <div class="mistakes-wrap">
          ${mistakesHtml}
        </div>
      </div>
    `;

    // Hook up Run Code button
    const runBtn = document.getElementById(`run-${codeId}`);
    if (runBtn) {
      runBtn.addEventListener('click', () => {
        CodeRunner.run(topic.codeExample, outputId);
      });
    }

    // Hook up Copy buttons
    const copyBtn = document.getElementById(`copy-${codeId}`);
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        CodeRunner.copyToClipboard(topic.codeExample, copyBtn);
      });
    }

    const syntaxCopyBtn = elements.detailModalBody.querySelector(`[data-copy-target="${topic.id}-syntax"]`);
    if (syntaxCopyBtn) {
      syntaxCopyBtn.addEventListener('click', () => {
        CodeRunner.copyToClipboard(topic.syntax, syntaxCopyBtn);
      });
    }

    openDetailModal();
  }

  // ==========================================
  // 5. Logical Questions Rendering (5 Hard + 5 Easy = 10)
  // ==========================================
  function renderQuestions() {
    if (!elements.hardQuestionsGrid || !elements.easyQuestionsGrid) return;
    elements.hardQuestionsGrid.innerHTML = '';
    elements.easyQuestionsGrid.innerHTML = '';

    const hardQuestions = questionsData.filter(q => q.difficulty === 'Hard');
    const easyQuestions = questionsData.filter(q => q.difficulty === 'Easy');

    // Handle filter visibility
    if (state.activePracticeFilter === 'hard') {
      if (elements.hardQuestionsGroup) elements.hardQuestionsGroup.classList.remove('hidden');
      if (elements.easyQuestionsGroup) elements.easyQuestionsGroup.classList.add('hidden');
    } else if (state.activePracticeFilter === 'easy') {
      if (elements.hardQuestionsGroup) elements.hardQuestionsGroup.classList.add('hidden');
      if (elements.easyQuestionsGroup) elements.easyQuestionsGroup.classList.remove('hidden');
    } else {
      if (elements.hardQuestionsGroup) elements.hardQuestionsGroup.classList.remove('hidden');
      if (elements.easyQuestionsGroup) elements.easyQuestionsGroup.classList.remove('hidden');
    }

    // Helper to create a single question card
    const createQuestionCard = (q) => {
      const isHard = q.difficulty === 'Hard';
      const card = document.createElement('div');
      card.className = `question-card ${isHard ? 'card-border-hard' : 'card-border-easy'}`;
      card.setAttribute('data-question-id', q.id);

      const conceptsTags = q.concepts.map(c => `<span class="concept-badge">${c}</span>`).join('');

      card.innerHTML = `
        <div class="card-top-row">
          <span class="diff-badge ${isHard ? 'badge-hard' : 'badge-easy'}">${isHard ? 'HARD' : 'EASY'} #${q.numberStr}</span>
          <span class="topic-category-pill">${q.category}</span>
        </div>

        <h3 class="question-card-title">${q.title}</h3>
        <p class="question-card-desc">${q.summary}</p>

        <div class="concepts-tag-row">
          ${conceptsTags}
        </div>

        <div class="card-bottom-row">
          <span class="question-action-link ${isHard ? 'link-hard' : 'link-easy'}">
            Practice Logic &rarr;
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        openQuestionDetail(q);
      });

      return card;
    };

    // Render Hard Questions (1 to 5)
    hardQuestions.forEach(q => {
      elements.hardQuestionsGrid.appendChild(createQuestionCard(q));
    });

    // Render Easy Questions (6 to 10)
    easyQuestions.forEach(q => {
      elements.easyQuestionsGrid.appendChild(createQuestionCard(q));
    });
  }

  function openQuestionDetail(q) {
    if (!elements.detailModalBody) return;
    const isHard = q.difficulty === 'Hard';

    const conceptsHtml = q.concepts.map(c => `<span class="concept-badge">${c}</span>`).join('');
    const rulesHtml = q.rules.map(r => `<li class="clean-list-item"><span class="list-bullet">•</span><span>${r}</span></li>`).join('');
    
    const stepsHtml = q.stepByStepExplanation.map((step, idx) => `
      <div class="step-card">
        <div class="step-badge">Step ${idx + 1}</div>
        <div class="step-content">${step.replace(/^[Ss]tep\s*[0-9]+(\s*→|\s*:)?\s*/, '')}</div>
      </div>
    `).join('');

    const takeawaysHtml = (q.keyTakeaways || []).map(t => `
      <li class="clean-list-item">
        <span class="list-bullet">•</span>
        <span>${t}</span>
      </li>
    `).join('');

    const codeId = `q-code-${q.id}`;
    const outputId = `q-output-${q.id}`;

    elements.detailModalBody.innerHTML = `
      <div class="modal-header-block">
        <div class="modal-category-tag">
          <span class="diff-badge ${isHard ? 'badge-hard' : 'badge-easy'}">${isHard ? 'HARD' : 'EASY'} #${q.numberStr}</span>
          <span>${q.category}</span>
        </div>
        <h2 class="modal-main-title">${q.title}</h2>
        <p class="modal-sub-desc">${q.summary}</p>
      </div>

      <!-- 1. Question (Problem Statement & Scenario) -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">1. Problem Statement</h4>
        <div class="problem-box">
          <p class="problem-statement-text">${q.problemStatement}</p>
          <div class="problem-scenario-wrap">
            <strong>Real-World Scenario:</strong> ${q.scenario}
          </div>
        </div>
      </div>

      <!-- 2. Given Data -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">2. Given Data</h4>
        <div class="code-box-wrapper">
          <div class="code-box-header">
            <span class="code-box-filename">given-data.js</span>
          </div>
          <pre class="code-content compact-code"><code>${escapeHtml(q.givenData)}</code></pre>
        </div>
      </div>

      <!-- 3. Rules & Conditions -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">3. Rules & Conditions</h4>
        <div class="rules-card">
          <ul class="clean-list-wrap">
            ${rulesHtml}
          </ul>
        </div>
      </div>

      <!-- 4. Solution (JavaScript Code) -->
      <div class="modal-section-block">
        <div class="section-title-actions">
          <h4 class="modal-sec-title">4. JavaScript Solution</h4>
          <div class="btn-group-sm">
            <button class="btn-action-primary" id="run-${codeId}">
              Run Solution
            </button>
            <button class="btn-action-secondary" id="copy-${codeId}">
              Copy Code
            </button>
          </div>
        </div>

        <div class="code-box-wrapper">
          <div class="code-box-header">
            <span class="code-box-filename">${q.slug}.js</span>
            <span class="code-lang-tag">JavaScript ES6</span>
          </div>
          <pre class="code-content"><code id="${codeId}">${escapeHtml(q.sourceCode)}</code></pre>
        </div>
      </div>

      <!-- 5. Output -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">5. Console Output</h4>
        <div class="terminal-box-wrapper">
          <div class="terminal-box-header">
            <span>Terminal Output</span>
          </div>
          <div class="terminal-box-body" id="${outputId}">
            ${formatTerminalOutput(q.expectedOutput)}
          </div>
        </div>
      </div>

      <!-- 6. Step-by-Step Explanation -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">6. Step-by-Step Explanation</h4>
        <div class="steps-flow-wrap">
          ${stepsHtml}
        </div>
      </div>

      <!-- 7. Concepts Used -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">7. Concepts Used</h4>
        <div class="concepts-tag-row">
          ${conceptsHtml}
        </div>
      </div>

      <!-- 8. Key Takeaways -->
      <div class="modal-section-block">
        <h4 class="modal-sec-title">8. Key Takeaways</h4>
        <div class="rules-card">
          <ul class="clean-list-wrap">
            ${takeawaysHtml}
          </ul>
        </div>
      </div>
    `;

    // Hook up Run Code button
    const runBtn = document.getElementById(`run-${codeId}`);
    if (runBtn) {
      runBtn.addEventListener('click', () => {
        CodeRunner.run(q.sourceCode, outputId);
      });
    }

    // Hook up Copy code button
    const copyBtn = document.getElementById(`copy-${codeId}`);
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        CodeRunner.copyToClipboard(q.sourceCode, copyBtn);
      });
    }

    openDetailModal();
  }

  // ==========================================
  // 6. JS CHEAT LAB Rendering
  // ==========================================
  function renderCheatLab() {
    if (typeof cheatLabData === 'undefined') return;

    // 1. Render 16 Quick Learning Cards (WHAT → SYNTAX → EXAMPLE → REMEMBER)
    if (elements.cheatCardsGrid) {
      elements.cheatCardsGrid.innerHTML = '';
      cheatLabData.cards.forEach((card, idx) => {
        const div = document.createElement('div');
        div.className = 'cheat-learning-card';
        div.id = card.id;

        const codeId = `cheat-code-${idx}`;

        div.innerHTML = `
          <div class="cheat-card-header">
            <div class="cheat-card-badge-wrap">
              <span class="cheat-card-num">${card.badge}</span>
              <span class="cheat-card-category">${card.category}</span>
            </div>
            <h3 class="cheat-card-title">${card.title}</h3>
          </div>

          <div class="cheat-card-body">
            <!-- WHAT -->
            <div class="cheat-flow-segment">
              <span class="cheat-segment-label label-what">WHAT</span>
              <div class="cheat-segment-text">${card.what.replace(/\n/g, '<br>')}</div>
            </div>

            <!-- SYNTAX -->
            <div class="cheat-flow-segment">
              <span class="cheat-segment-label label-syntax">SYNTAX</span>
              <pre class="cheat-code-block"><code>${escapeHtml(card.syntax)}</code></pre>
            </div>

            <!-- EXAMPLE -->
            <div class="cheat-flow-segment">
              <div class="cheat-example-header">
                <span class="cheat-segment-label label-example">EXAMPLE</span>
                <button class="cheat-copy-btn" data-copy-cheat="${codeId}">Copy</button>
              </div>
              <pre class="cheat-code-block" id="${codeId}"><code>${escapeHtml(card.example)}</code></pre>
            </div>

            <!-- REMEMBER -->
            <div class="cheat-flow-segment">
              <span class="cheat-segment-label label-remember">REMEMBER</span>
              <div class="cheat-remember-pill">${card.remember}</div>
            </div>
          </div>
        `;

        // Attach copy event
        const copyBtn = div.querySelector(`[data-copy-cheat="${codeId}"]`);
        if (copyBtn) {
          copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            CodeRunner.copyToClipboard(card.example, copyBtn);
          });
        }

        elements.cheatCardsGrid.appendChild(div);
      });
    }

    // 2. Render Think Like JavaScript (Logic Formula)
    if (elements.cheatFormulaContainer) {
      elements.cheatFormulaContainer.innerHTML = '';
      const formula = cheatLabData.logicFormula;

      const stepsHtml = formula.steps.map(s => `
        <div class="formula-step-box">
          <div class="formula-step-num">${s.step}</div>
          <div class="formula-step-info">
            <h4 class="formula-step-title">${s.title}</h4>
            <p class="formula-step-desc">${s.desc}</p>
          </div>
        </div>
      `).join('');

      const chainHtml = formula.exampleFlow.chain.map((c, i) => `
        <div class="chain-step-node">
          <span class="chain-num">${i + 1}</span>
          <span class="chain-text">${c.replace(/^[0-9]+\.\s*/, '')}</span>
        </div>
      `).join('<div class="chain-arrow">↓</div>');

      elements.cheatFormulaContainer.innerHTML = `
        <div class="formula-main-card">
          <div class="formula-header">
            <h3 class="formula-title">${formula.title}</h3>
            <p class="formula-subtitle">${formula.subtitle}</p>
          </div>
          <div class="formula-steps-flow">
            ${stepsHtml}
          </div>
          
          <div class="formula-example-block mt-4">
            <h4 class="example-chain-title">${formula.exampleFlow.title}</h4>
            <div class="chain-vertical-list">
              ${chainHtml}
            </div>
          </div>
        </div>
      `;
    }

    // 3. Render Don't Make These Mistakes
    if (elements.cheatMistakesContainer) {
      elements.cheatMistakesContainer.innerHTML = '';
      cheatLabData.commonMistakes.forEach(m => {
        const div = document.createElement('div');
        div.className = 'cheat-mistake-card';
        div.id = `cheat-mistake-${m.id}`;

        div.innerHTML = `
          <div class="mistake-card-top">
            <span class="mistake-warning-badge">Mistake #${m.id}</span>
            <h4 class="mistake-card-title">${m.title}</h4>
          </div>
          <div class="mistake-comparison-row">
            <div class="code-box-bad">
              <span class="code-box-label label-bad">❌ WRONG</span>
              <pre><code>${escapeHtml(m.bad)}</code></pre>
            </div>
            <div class="code-box-good">
              <span class="code-box-label label-good">✅ CORRECT</span>
              <pre><code>${escapeHtml(m.fix)}</code></pre>
            </div>
          </div>
          <p class="mistake-card-explanation">${m.explanation}</p>
        `;
        elements.cheatMistakesContainer.appendChild(div);
      });
    }

    // 4. Render "Remember This" Visual Cheat Sheet
    if (elements.cheatRememberContainer) {
      elements.cheatRememberContainer.innerHTML = '';
      const itemsHtml = cheatLabData.rememberThis.map(item => `
        <div class="remember-item-row">
          <code class="remember-key">${item.key}</code>
          <span class="remember-arrow">&rarr;</span>
          <span class="remember-val">${item.value}</span>
        </div>
      `).join('');

      elements.cheatRememberContainer.innerHTML = `
        <div class="remember-sheet-card">
          <div class="remember-items-grid">
            ${itemsHtml}
          </div>
        </div>
      `;
    }
  }

  // ==========================================
  // 7. Global Search Engine (Topics + Questions + JS Cheat Lab)
  // ==========================================
  function setupSearch() {
    if (!elements.searchInput || !elements.searchResults) return;

    elements.searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      state.searchQuery = query;

      if (query.length === 0) {
        elements.searchResults.classList.add('hidden');
        elements.searchResults.innerHTML = '';
        return;
      }

      const results = performSearch(query);
      renderSearchResults(results);
    });

    // Close search dropdown on click outside
    document.addEventListener('click', (e) => {
      if (elements.searchWrapper && !elements.searchWrapper.contains(e.target)) {
        elements.searchResults.classList.add('hidden');
      }
    });

    // Reopen dropdown on focus if text present
    elements.searchInput.addEventListener('focus', () => {
      if (elements.searchInput.value.trim().length > 0) {
        const results = performSearch(elements.searchInput.value.trim().toLowerCase());
        renderSearchResults(results);
      }
    });

    // Escape key closes search
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        elements.searchResults.classList.add('hidden');
      }
    });
  }

  function performSearch(query) {
    const results = {
      topics: [],
      questions: [],
      cheats: []
    };

    // Search JavaScript Topics
    topicsData.forEach(t => {
      const inTitle = t.title.toLowerCase().includes(query);
      const inSummary = t.summary.toLowerCase().includes(query);
      const inSlug = t.slug.toLowerCase().includes(query);
      const inSyntax = t.syntax.toLowerCase().includes(query);
      const inWhat = (t.whatIsIt || '').toLowerCase().includes(query);
      
      if (inTitle || inSummary || inSlug || inSyntax || inWhat) {
        results.topics.push(t);
      }
    });

    // Search Logical Questions
    questionsData.forEach(q => {
      const inTitle = q.title.toLowerCase().includes(query);
      const inSummary = q.summary.toLowerCase().includes(query);
      const inProblem = q.problemStatement.toLowerCase().includes(query);
      const inConcepts = q.concepts.some(c => c.toLowerCase().includes(query));
      const inSlug = q.slug.toLowerCase().includes(query);

      if (inTitle || inSummary || inProblem || inConcepts || inSlug) {
        results.questions.push(q);
      }
    });

    // Search JS Cheat Lab
    if (typeof cheatLabData !== 'undefined') {
      cheatLabData.cards.forEach(c => {
        const inTitle = c.title.toLowerCase().includes(query);
        const inWhat = c.what.toLowerCase().includes(query);
        const inSyntax = c.syntax.toLowerCase().includes(query);
        const inRemember = c.remember.toLowerCase().includes(query);

        if (inTitle || inWhat || inSyntax || inRemember) {
          results.cheats.push(c);
        }
      });
    }

    return results;
  }

  function renderSearchResults(results) {
    const totalCount = results.topics.length + results.questions.length + results.cheats.length;
    
    if (totalCount === 0) {
      elements.searchResults.innerHTML = `<div class="search-empty-state">No results found for "${escapeHtml(state.searchQuery)}"</div>`;
      elements.searchResults.classList.remove('hidden');
      return;
    }

    let html = '';

    // 1. JavaScript Topics Group
    if (results.topics.length > 0) {
      html += `<div class="search-group-heading">JAVASCRIPT TOPICS</div>`;
      results.topics.forEach(t => {
        html += `
          <div class="search-item-row" data-search-topic="${t.id}">
            <div class="search-item-left">
              <span class="search-item-badge">${t.badge}</span>
              <span class="search-item-title">${t.title}</span>
            </div>
            <span class="search-item-arrow">→</span>
          </div>
        `;
      });
    }

    // 2. Logical Questions Group
    if (results.questions.length > 0) {
      html += `<div class="search-group-heading">LOGICAL QUESTIONS</div>`;
      results.questions.forEach(q => {
        const isHard = q.difficulty === 'Hard';
        html += `
          <div class="search-item-row" data-search-question="${q.id}">
            <div class="search-item-left">
              <span class="search-item-badge ${isHard ? 'badge-hard' : 'badge-easy'}">${q.difficultyBadge} #${q.numberStr}</span>
              <span class="search-item-title">${q.title}</span>
            </div>
            <span class="search-item-arrow">→</span>
          </div>
        `;
      });
    }

    // 3. JS Cheat Lab Group
    if (results.cheats.length > 0) {
      html += `<div class="search-group-heading">JS CHEAT LAB</div>`;
      results.cheats.forEach(c => {
        html += `
          <div class="search-item-row" data-search-cheat="${c.id}">
            <div class="search-item-left">
              <span class="search-item-badge badge-cheat">Cheat Lab</span>
              <span class="search-item-title">JS Cheat Lab → ${c.title}</span>
            </div>
            <span class="search-item-arrow">→</span>
          </div>
        `;
      });
    }

    elements.searchResults.innerHTML = html;
    elements.searchResults.classList.remove('hidden');

    // Attach click events
    elements.searchResults.querySelectorAll('[data-search-topic]').forEach(row => {
      row.addEventListener('click', () => {
        const topicId = parseInt(row.getAttribute('data-search-topic'), 10);
        const topic = topicsData.find(t => t.id === topicId);
        if (topic) {
          navigateToView('topics');
          openTopicDetail(topic);
          elements.searchResults.classList.add('hidden');
          elements.searchInput.value = '';
        }
      });
    });

    elements.searchResults.querySelectorAll('[data-search-question]').forEach(row => {
      row.addEventListener('click', () => {
        const qId = parseInt(row.getAttribute('data-search-question'), 10);
        const question = questionsData.find(q => q.id === qId);
        if (question) {
          navigateToView('practice');
          openQuestionDetail(question);
          elements.searchResults.classList.add('hidden');
          elements.searchInput.value = '';
        }
      });
    });

    elements.searchResults.querySelectorAll('[data-search-cheat]').forEach(row => {
      row.addEventListener('click', () => {
        const cardId = row.getAttribute('data-search-cheat');
        navigateToView('cheat');
        elements.searchResults.classList.add('hidden');
        elements.searchInput.value = '';
        
        setTimeout(() => {
          const cardEl = document.getElementById(cardId);
          if (cardEl) {
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            cardEl.classList.add('card-highlight');
            setTimeout(() => cardEl.classList.remove('card-highlight'), 1800);
          }
        }, 150);
      });
    });
  }

  // ==========================================
  // 8. Modals Controller
  // ==========================================
  function setupModals() {
    if (elements.detailModalClose) {
      elements.detailModalClose.addEventListener('click', closeDetailModal);
    }
    if (elements.detailOverlay) {
      elements.detailOverlay.addEventListener('click', (e) => {
        if (e.target === elements.detailOverlay) {
          closeDetailModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.detailOverlay && elements.detailOverlay.classList.contains('show')) {
        closeDetailModal();
      }
    });
  }

  function openDetailModal() {
    if (elements.detailOverlay) {
      elements.detailOverlay.classList.add('show');
      document.body.style.overflow = 'hidden';
      if (elements.detailModalBody) {
        elements.detailModalBody.scrollTop = 0;
      }
    }
  }

  function closeDetailModal() {
    if (elements.detailOverlay) {
      elements.detailOverlay.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  // ==========================================
  // 9. Helpers
  // ==========================================
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatTerminalOutput(text) {
    return text.split('\n').map(line => {
      const sanitized = escapeHtml(line);
      return `<div class="terminal-line"><span class="terminal-prompt">&gt;</span> <span>${sanitized}</span></div>`;
    }).join('');
  }

  // Start Application
  init();
});
