/**
 * Project 4: CodeHub • Fullstack Learning
 * Source Archive Bundle for Direct In-Browser Zip Download
 */
(function() {
  'use strict';
  window.PROJECT_BUNDLES = window.PROJECT_BUNDLES || {};

  window.PROJECT_BUNDLES[4] = {
    name: 'Fullstack-learning-site.zip',
    title: 'CodeHub • Fullstack Learning',
    files: [
      {
        path: 'index.html',
        data: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fullstack Learning Hub - Computer Fundamentals</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <nav>
            <div style="display:flex; align-items:center; gap:12px;">
                <a href="../../../index.html" style="background:#00ffd5; color:black; font-weight:bold; text-decoration:none; padding:6px 14px; border-radius:20px; font-size:12px;">← DevTask HUB</a>
                <div class="logo">Fullstack Learning</div>
            </div>
            <ul>
                <a href="pages/aptitude.html">Aptitude</a>
                <a href="pages/frontend.html">Frontend</a>
                <a href="pages/backend.html">Backend</a>
                <a href="pages/database.html">Database</a>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h1>Software Fundamentals</h1>  
        <p>Click any card to view topics and explanations</p>
    </section>

    <section class="cards">
        <div class="card" data-key="computer">
            <i class="fa-solid fa-desktop"></i>
            <h3>Computer Fundamentals</h3>
            <p class="card-desc">10 basic concepts every beginner should know first.</p>
            <button onclick="showTopics('computer')">Visit</button>
        </div>

        <div class="card">
            <i class="fa-solid fa-code"></i>
            <h3>Frontend</h3>
            <p class="card-desc">HTML, CSS and JavaScript, explained topic by topic.</p>
            <a href="pages/frontend.html"><button>Visit</button></a>
        </div>

        <div class="card">
            <i class="fa-solid fa-server"></i>
            <h3>Backend</h3>
            <p class="card-desc">Java and OOP concepts in the order you should learn them.</p>
            <a href="pages/backend.html"><button>Visit</button></a>
        </div>

        <div class="card">
            <i class="fa-solid fa-database"></i>
            <h3>Database</h3>
            <p class="card-desc">MySQL basics and the commands you'll use every day.</p>
            <a href="pages/database.html"><button>Visit</button></a>
        </div>
    </section>

    <section id="topics"></section>

    <footer>Fullstack Learning &copy; 2026</footer>

    <script src="assets/js/script.js"></script>
</body>
</html>`
      },
      {
        path: 'pages/aptitude.html',
        data: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Logical Training - Aptitude</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">Logical Training</div>
            <ul>
                <a href="../index.html">Home</a>
                <a href="aptitude.html" class="active">Aptitude</a>
                <a href="frontend.html">Frontend</a>
                <a href="backend.html">Backend</a>
                <a href="database.html">Database</a> 
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h1>Logical Aptitude</h1>
        <p>10 beginner-friendly aptitude topics with explanations</p>
    </section>

    <section class="cards">
        <div class="card" data-key="html">
            <i class="fa-solid fa-sack-dollar"></i>
            <h3>Profit & Loss</h3>
            <p class="card-desc">Beginner-friendly aptitude lessons covering Profit & Loss, Percentage, Ratio, Time & Work, and more.</p>
            <button onclick="showTopics('html')">Visit</button>
        </div>

        <div class="card" data-key="aptitude">
            <i class="fa-solid fa-coins"></i>
            <h3>Simple Interest</h3>
            <p class="card-desc">Practice Simple Interest questions with formulas, tricks, and detailed solutions.</p>
            <button onclick="showTopics('aptitude')">Visit</button>
        </div>

        <div class="card" data-key="javascript">
            <i class="fa-solid fa-money-bill-wave"></i>
            <h3>Compound Interest</h3>
            <p class="card-desc">Build a strong foundation in Compound Interest through clear concepts and solved problems.</p>
            <button onclick="showTopics('javascript')">Visit</button>
        </div>
    </section>

    <section id="topics"></section>

    <footer>Fullstack Learning &copy; 2026</footer>

    <script src="../assets/js/script.js"></script>
</body>
</html>`
      },
      {
        path: 'pages/backend.html',
        data: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Backend Developing - Java & OOP</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
    <nav>
        <div class="logo">Backend Developing</div>
        <ul>
            <a href="../index.html">Home</a>
            <a href="aptitude.html">Aptitude</a>
            <a href="frontend.html">Frontend</a>
            <a href="backend.html" class="active">Backend</a>
            <a href="database.html">Database</a> 
        </ul>
    </nav>
    </header>

    <section class="hero">
        <h1>Backend Functions</h1>
        <p>Functions & OOP's ➜ click to view the topics in learning order</p>
    </section>

    <section class="cards">
        <div class="card" data-key="backend">
            <i class="fa-brands fa-java"></i>
            <h3>Java & OOP</h3>
            <p class="card-desc">From Java basics through OOP, Collections, JDBC, Spring Boot and REST APIs.</p>
            <button onclick="showTopics('backend')">Visit</button>
        </div>

        <div class="card" data-key="functions">
            <i class="fa-solid fa-code-branch"></i>
            <h3>Functions & Conditions</h3>
            <p class="card-desc">Learn functions from basics to advanced, including parameters, return values, arrow functions, and real-world examples.</p>
            <button onclick="showTopics('functions')">Visit</button>
        </div>
    </section>

    <section id="topics"></section>

    <footer>Fullstack Learning &copy; 2026</footer>

    <script src="../assets/js/script.js"></script>
</body>
</html>`
      },
      {
        path: 'pages/database.html',
        data: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Database - CRUD Learning</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">CRUD Learning</div>
            <ul>
                <a href="../index.html">Home</a>
                <a href="aptitude.html">Aptitude</a>
                <a href="frontend.html">Frontend</a>
                <a href="backend.html">Backend</a>
                <a href="database.html" class="active">Database</a> 
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h1>Data Storage</h1>
        <p>SQL to view essential commands with explanations</p>
    </section>

    <section class="cards">
        <div class="card" data-key="mysql">
            <i class="fa-solid fa-database"></i>
            <h3>MySQL</h3>
            <p class="card-desc">Learn MySQL from basics to advanced with SQL commands, database design, queries, joins, and real-world examples.</p>
            <button onclick="showTopics('mysql')">Visit</button>
        </div>

        <div class="card" data-key="mysql">
            <i class="fa-solid fa-leaf"></i>
            <h3>MongoDB</h3>
            <p class="card-desc">Master MongoDB with collections, documents, CRUD operations, queries, indexing, and practical database examples.</p>
            <button onclick="showTopics('mysql')">Visit</button>
        </div>
    </section>

    <section id="topics"></section>

    <footer>Fullstack Learning &copy; 2026</footer>

    <script src="../assets/js/script.js"></script>
</body>
</html>`
      },
      {
        path: 'pages/frontend.html',
        data: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frontend Task Portfolio - Fullstack Learning</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">Ui Ux Designing</div>
            <ul>
                <a href="../index.html">Home</a>
                <a href="aptitude.html">Aptitude</a>
                <a href="frontend.html" class="active">Frontend</a>
                <a href="backend.html">Backend</a>
                <a href="database.html">Database</a> 
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h1>Frontend Task Portfolio</h1>
        <p>Comprehensive repository of completed course tasks, hands-on assignments, and personal full-stack projects.</p>
    </section>

    <main class="portfolio-section">
        <div class="section-divider-title" id="coreTopicsSection">
            <h2><i class="fa-solid fa-graduation-cap"></i> Core Frontend Knowledge Base</h2>
            <p>Click any card below to expand the 10 core conceptual interview topics for each pillar</p>
        </div>

        <section class="cards">
            <div class="card" data-key="html">
                <i class="fa-brands fa-html5"></i>
                <h3>HTML</h3>
                <p class="card-desc">Structure of the web — tags, forms, semantic elements.</p>
                <button onclick="showTopics('html')">Explore Topics</button>
            </div>

            <div class="card" data-key="css">
                <i class="fa-brands fa-css3-alt"></i>
                <h3>CSS</h3>
                <p class="card-desc">Styling, layout, Flexbox, Grid and responsive design.</p>
                <button onclick="showTopics('css')">Explore Topics</button>
            </div>

            <div class="card" data-key="javascript">
                <i class="fa-brands fa-js"></i>
                <h3>JavaScript</h3>
                <p class="card-desc">Logic and interactivity — variables, functions, the DOM.</p>
                <button onclick="showTopics('javascript')">Explore Topics</button>
            </div>
        </section>

        <section id="topics"></section>
    </main>

    <footer>Fullstack Learning &copy; 2026</footer>

    <script src="../assets/js/script.js"></script>
    <script src="../assets/js/tasks-portfolio.js"></script>
</body>
</html>`
      },
      {
        path: 'assets/css/style.css',
        data: `*{margin:0;padding:0;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;}
html{scroll-behavior:smooth;}
body{background:#0b1120;color:#fff;line-height:1.6;}
nav{display:flex;justify-content:space-between;align-items:center;padding:20px 50px;background:#77b6c1;position:sticky;top:0;z-index:1000;}
.logo{font-size:28px;font-weight:bold;color:#201402;}
nav ul{display:flex;list-style:none;gap:20px;}
nav ul a{text-decoration:none;color:white;padding:10px 18px;border-radius:8px;transition:.3s;font-weight:bold;}
nav ul a:hover,nav ul a.active{background:#7d7a7ade;color:#000;}
.hero{text-align:center;padding:60px 20px 40px;}
.hero h1{color:#00ffd5;font-size:45px;margin-bottom:12px;}
.hero p{font-size:18px;color:#ccc;}
.cards{width:90%;max-width:1200px;margin:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:25px;padding:20px 0 50px;}
.card{background:#1b2432;border-radius:15px;padding:30px 20px;text-align:center;transition:.35s;border:1px solid #232d3f;}
.card:hover{transform:translateY(-8px);border-color:#00ffd5;box-shadow:0 0 25px rgba(0,255,213,0.3);}
.card i{font-size:40px;color:#bf9654;margin-bottom:18px;display:block;}
.card h3{margin-bottom:8px;font-size:20px;}
.card p.card-desc{color:#9aa4b2;font-size:14px;margin-bottom:18px;min-height:40px;}
.card button,.btn{padding:10px 26px;border:none;background:#62d3c0e4;color:#000;font-weight:bold;border-radius:30px;cursor:pointer;font-size:14px;transition:.25s;text-decoration:none;display:inline-block;}
.card button:hover,.btn:hover{background:#af7866;transform:scale(1.05);}
#topics{display:none;width:90%;max-width:900px;margin:0 auto 60px;padding:0 10px;}
.topics-heading{color:#6ef3dd;font-size:28px;margin-bottom:8px;border-left:5px solid #50e0c8;padding-left:15px;}
.topics-sub{color:#9aa4b2;margin-bottom:25px;padding-left:20px;font-size:14px;}
.topic-item{background:#1b2432;border-radius:12px;margin-bottom:14px;overflow:hidden;border:1px solid #232d3f;transition:.3s;}
.topic-item.open{border-color:#00ffd5;}
.topic-question{display:flex;align-items:center;gap:15px;padding:18px 22px;cursor:pointer;user-select:none;}
.topic-number{color:#0b1120;background:#00ffd5;min-width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;flex-shrink:0;}
.topic-question h4{flex:1;font-size:17px;color:#fff;}
.topic-question .arrow{color:#00ffd5;transition:.3s;font-size:14px;}
.topic-item.open .arrow{transform:rotate(180deg);}
.topic-answer{max-height:0;overflow:hidden;transition:max-height .35s ease;}
.topic-answer p{padding:0 22px 20px 67px;color:#c3cbd6;font-size:15px;}
.topic-answer code{background:#0b1120;color:#00ffd5;padding:2px 8px;border-radius:5px;font-size:13px;}
.topic-answer pre{margin:10px 22px 20px 67px;background:#0b1120;color:#00ffd5;padding:12px 15px;border-radius:8px;font-size:13px;overflow-x:auto;}
footer{text-align:center;padding:25px;background:#111827;margin-top:40px;color:#8892a0;font-size:14px;}`
      },
      {
        path: 'assets/js/script.js',
        data: `/* Active navbar link */
document.querySelectorAll("nav ul a, nav ul li a").forEach(link=>{
    const current = window.location.pathname.split("/").pop() || "index.html";
    const linkPage = link.getAttribute("href");
    if(linkPage === current){
        link.classList.add("active");
    }
});

const TOPIC_DATA = {
    computer: {
        heading: "Computer Fundamentals",
        sub: "10 basic topics every beginner should know",
        points: [
            { q:"1. What is a Computer?", a:"A computer is an electronic machine that accepts input, processes it using a set of instructions (a program), and produces output. It follows the basic cycle: Input → Process → Output → Storage." },
            { q:"2. Input Devices", a:"Devices used to give data or instructions to a computer, such as a keyboard, mouse, scanner, and microphone." },
            { q:"3. Output Devices", a:"Devices that display or produce the result of processing, such as a monitor, printer, and speakers." },
            { q:"4. CPU (Central Processing Unit)", a:"Known as the brain of the computer, the CPU performs arithmetic, logic, control, and input/output operations." },
            { q:"5. Memory - RAM & ROM", a:"RAM is temporary memory for running programs. ROM is permanent memory that stores startup firmware." },
            { q:"6. Storage Devices", a:"Permanent storage like SSDs, HDDs, and flash memory." },
            { q:"7. Operating System", a:"System software that manages hardware and resources (Windows, macOS, Linux, Android)." },
            { q:"8. Number Systems", a:"Binary (base 2), Decimal (base 10), Octal (base 8), and Hexadecimal (base 16)." },
            { q:"9. Hardware vs Software", a:"Hardware is physical; software is programs and instructions." },
            { q:"10. Computer Networks", a:"Interconnected computers sharing resources via TCP/IP and HTTP protocols." }
        ]
    },
    html: {
        heading: "HTML5 Fundamentals",
        sub: "10 essential HTML topics",
        points: [
            { q:"1. Document Structure", a:"<!DOCTYPE html> with <html>, <head>, and <body>." },
            { q:"2. Tags & Elements", a:"Building blocks like <div>, <p>, and <h1>." },
            { q:"3. Headings & Paragraphs", a:"Headings <h1>-<h6> and text paragraphs <p>." },
            { q:"4. Attributes", a:"href, src, alt, class, id, style." },
            { q:"5. Links & Images", a:"<a href='...'> and <img src='...' alt='...'>." },
            { q:"6. Lists", a:"<ol>, <ul>, and <li>." },
            { q:"7. Tables", a:"<table>, <tr>, <th>, and <td>." },
            { q:"8. Forms & Inputs", a:"<form> with inputs, buttons, selects." },
            { q:"9. Semantic Tags", a:"<header>, <nav>, <main>, <section>, <footer>." },
            { q:"10. Containers", a:"Block-level <div> and inline <span>." }
        ]
    },
    css: {
        heading: "CSS3 Styling",
        sub: "10 essential CSS topics",
        points: [
            { q:"1. Syntax & Selectors", a:"Classes, IDs, element selectors, and attributes." },
            { q:"2. Box Model", a:"Content, padding, border, margin." },
            { q:"3. Flexbox", a:"1D flexible layout system with justify-content and align-items." },
            { q:"4. CSS Grid", a:"2D grid system for rows and columns." },
            { q:"5. Responsive Design", a:"Media queries (@media) for mobile-first layouts." },
            { q:"6. Typography", a:"Fonts, sizes, line heights, letter spacing." },
            { q:"7. Transitions & Animations", a:"Smooth keyframe animations and transitions." },
            { q:"8. Positioning", a:"static, relative, absolute, fixed, sticky." },
            { q:"9. Colors & Gradients", a:"HEX, RGB, HSL, and linear/radial gradients." },
            { q:"10. Modern CSS Variables", a:":root { --primary-color: #00ffd5; }" }
        ]
    },
    javascript: {
        heading: "JavaScript Engine",
        sub: "10 essential JavaScript topics",
        points: [
            { q:"1. Variables", a:"let, const, and var with block scope." },
            { q:"2. Data Types", a:"Primitives and reference objects." },
            { q:"3. Functions", a:"Arrow functions, callbacks, higher-order functions." },
            { q:"4. Conditionals & Loops", a:"if/else, switch, for, while, forEach." },
            { q:"5. Arrays & Objects", a:"map, filter, reduce, destructuring." },
            { q:"6. DOM Manipulation", a:"querySelector, addEventListener, classList." },
            { q:"7. Async JavaScript", a:"Promises, async/await, fetch API." },
            { q:"8. ES6+ Features", a:"Spread operator, template literals, modules." },
            { q:"9. Scope & Closures", a:"Lexical scope and closure preservation." },
            { q:"10. Event Loop", a:"Call stack, Web APIs, task queue, microtasks." }
        ]
    },
    backend: {
        heading: "Backend Development",
        sub: "Java & Object Oriented Programming",
        points: [
            { q:"1. Java Syntax", a:"Classes, main method, primitive types, operators." },
            { q:"2. OOP Principles", a:"Encapsulation, Inheritance, Polymorphism, Abstraction." },
            { q:"3. Collections", a:"List, Set, Map, ArrayList, HashMap." },
            { q:"4. Exception Handling", a:"try-catch-finally and custom exceptions." },
            { q:"5. JDBC & Spring Boot", a:"Database connectivity, JPA, and RESTful APIs." }
        ]
    },
    mysql: {
        heading: "MySQL & Database",
        sub: "10 essential SQL concepts",
        points: [
            { q:"1. SQL Basics", a:"CREATE DATABASE, USE, CREATE TABLE." },
            { q:"2. CRUD Operations", a:"SELECT, INSERT, UPDATE, DELETE." },
            { q:"3. Clauses", a:"WHERE, ORDER BY, GROUP BY, HAVING." },
            { q:"4. Joins", a:"INNER JOIN, LEFT JOIN, RIGHT JOIN." },
            { q:"5. Primary & Foreign Keys", a:"Relational integrity constraints." }
        ]
    },
    aptitude: {
        heading: "Aptitude Fundamentals",
        sub: "Core quantitative problem solving",
        points: [
            { q:"1. Percentage", a:"Value / Total * 100." },
            { q:"2. Profit & Loss", a:"Profit = SP - CP, Loss = CP - SP." },
            { q:"3. Simple Interest", a:"SI = (P * R * T) / 100." }
        ]
    }
};

function renderTopics(key) {
    const data = TOPIC_DATA[key];
    const container = document.getElementById("topics");
    if (!data || !container) return;

    let html = '<h2 class="topics-heading">' + data.heading + '</h2><p class="topics-sub">' + data.sub + '</p>';
    data.points.forEach((point, i) => {
        html += '<div class="topic-item" data-index="' + i + '"><div class="topic-question" onclick="toggleTopic(this)"><span class="topic-number">' + (i + 1) + '</span><h4>' + point.q + '</h4><span class="arrow">▼</span></div><div class="topic-answer"><p>' + point.a + '</p></div></div>';
    });

    container.innerHTML = html;
    container.style.display = "block";
}

function toggleTopic(headerEl) {
    const item = headerEl.parentElement;
    const answer = item.querySelector(".topic-answer");
    const isOpen = item.classList.contains("open");

    item.parentElement.querySelectorAll(".topic-item.open").forEach(openItem => {
        if (openItem !== item) {
            openItem.classList.remove("open");
            openItem.querySelector(".topic-answer").style.maxHeight = null;
        }
    });

    if (isOpen) {
        item.classList.remove("open");
        answer.style.maxHeight = null;
    } else {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
}

function showTopics(key) {
    renderTopics(key);
    const topicsEl = document.getElementById("topics");
    if (topicsEl) {
        window.scrollTo({ top: topicsEl.offsetTop - 20, behavior: "smooth" });
    }
}`
      }
    ]
  };
})();
