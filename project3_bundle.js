/**
 * Project 3: DevFolio • React 19 App
 * Source Archive Bundle for Direct In-Browser Zip Download
 */
(function() {
  'use strict';
  window.PROJECT_BUNDLES = window.PROJECT_BUNDLES || {};

  window.PROJECT_BUNDLES[3] = {
    name: 'my-portfolio.zip',
    title: 'DevFolio • React 19 App',
    files: [
      {
        path: 'package.json',
        data: JSON.stringify({
          "name": "my-portfolio",
          "version": "0.1.0",
          "private": true,
          "dependencies": {
            "@testing-library/dom": "^10.4.1",
            "@testing-library/jest-dom": "^6.9.1",
            "@testing-library/react": "^16.3.2",
            "@testing-library/user-event": "^13.5.0",
            "react": "^19.2.4",
            "react-dom": "^19.2.4",
            "react-router-dom": "^7.13.2",
            "react-scripts": "5.0.1",
            "web-vitals": "^2.1.4"
          },
          "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
          },
          "eslintConfig": {
            "extends": [
              "react-app",
              "react-app/jest"
            ]
          },
          "browserslist": {
            "production": [
              ">0.2%",
              "not dead",
              "not op_mini all"
            ],
            "development": [
              "last 1 chrome version",
              "last 1 firefox version",
              "last 1 safari version"
            ]
          }
        }, null, 2)
      },
      {
        path: 'README.md',
        data: `# My Portfolio - React 19 App\n\nA modern personal developer portfolio built with React 19, React Router v7, canvas particle animations, and dark responsive styling.\n\n## Available Scripts\nIn the project directory, you can run:\n\n### \`npm start\`\nRuns the app in development mode at [http://localhost:3000](http://localhost:3000).\n\n### \`npm run build\`\nBuilds the app for production to the \`build\` folder.\n`
      },
      {
        path: 'public/index.html',
        data: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Surya - Personal Developer Portfolio with React 19" />
    <title>Surya | Developer Portfolio</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`
      },
      {
        path: 'public/manifest.json',
        data: `{\n  "short_name": "Portfolio",\n  "name": "Surya Developer Portfolio",\n  "start_url": ".",\n  "display": "standalone",\n  "theme_color": "#000000",\n  "background_color": "#000000"\n}`
      },
      {
        path: 'public/robots.txt',
        data: "User-agent: *\nDisallow:\n"
      },
      {
        path: 'src/App.js',
        data: `import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Style.css";
import "./Script.js";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`
      },
      {
        path: 'src/index.js',
        data: `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
      },
      {
        path: 'src/index.css',
        data: `body {\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  background: #0a0a0a;\n  color: white;\n}`
      },
      {
        path: 'src/Style.css',
        data: `*{margin:0;padding:0;box-sizing:border-box}

:root{
  --bg:#000;
  --text:#fff;
  --neon:#00ffcc;
}

body{
  font-family:Arial;
  color:var(--text);
  background:#000;
  overflow-x:hidden;
}

nav{
  display:flex;
  justify-content:space-between;
  padding:15px 30px;
  background:rgba(0,0,0,0.6);
}

nav a{
  color:var(--text);
  margin:0 10px;
  text-decoration:none;
  opacity:0.8;
}

nav a:hover{
  opacity:1;
  color:var(--neon);
}

button{
  padding:8px 14px;
  border:none;
  background:var(--neon);
  cursor:pointer;
  opacity:0.7;
  transition:0.3s;
}

button:hover{
  opacity:1;
  transform:scale(1.05);
}

.hero{
  height:90vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  text-align:center;
}

.typing{
  color:var(--neon);
}

.card{
  margin:20px;
  padding:20px;
  border-radius:15px;
  background:rgba(255,255,255,0.05);
  transition:0.3s;
}

.card:hover{
  box-shadow:0 0 15px var(--neon);
}

canvas{
  position:fixed;
  top:0;
  left:0;
  z-index:-1;
}

.btn-download{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:12px 25px;
  border-radius:30px;
  background:#00ffcc;
  color:#000;
  text-decoration:none;
  font-weight:bold;
  position:relative;
  overflow:hidden;
  transition:0.3s;
}

.btn-download:hover{
  transform:scale(1.05);
  box-shadow:0 0 20px #00ffcc;
}

.intro-box{
  margin-top:25px;
  padding:25px;
  max-width:600px;
  border-radius:20px;
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,0.1);
  box-shadow:0 0 15px rgba(255,255,255,0.08);
  text-align:center;
  transition:0.4s ease;
}

.intro-box h2{
  margin-bottom:10px;
  color:#00ffcc;
}

.intro-box p{
  margin:8px 0;
  line-height:1.6;
  opacity:0.85;
}

.intro-box:hover{
  transform:translateY(-5px) scale(1.02);
  box-shadow:
    0 0 20px rgba(0,255,200,0.2),
    0 0 40px rgba(0,255,200,0.1);
}

.about{
  padding:50px 20px;
  text-align:center;
}

.about h1{
  font-size:32px;
  margin-bottom:20px;
  color:var(--neon);
}

.about h2{
  margin-top:40px;
  margin-bottom:15px;
  color:var(--neon);
}

.about-box{
  max-width:600px;
  margin:auto;
  padding:20px;
  border-radius:15px;
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
}

.skills{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:15px;
  margin-top:15px;
}

.projects{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:20px;
  margin-top:30px;
}

.contact-card{
  max-width:500px;
  margin:40px auto;
  padding:30px;
  border-radius:20px;
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
  text-align:center;
}

.contact-card input, .contact-card textarea{
  width:100%;
  padding:12px;
  margin:10px 0;
  background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.2);
  color:#fff;
  border-radius:8px;
}

.btn-send{
  width:100%;
  padding:12px;
  background:#00ffcc;
  color:#000;
  font-weight:bold;
  border-radius:8px;
  cursor:pointer;
}`
      },
      {
        path: 'src/Script.js',
        data: `setTimeout(() => {
  typing();
  initParticles();
  animate();
}, 500);

const text = "Full Stack Java Developer | Learning & Building Projects";
let i = 0;

function typing() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text[i];
    i++;
    setTimeout(typing, 60);
  }
}

let canvas, ctx;
function setupCanvas() {
  if (document.getElementById("bgCanvas")) return;
  canvas = document.createElement("canvas");
  canvas.id = "bgCanvas";
  document.body.appendChild(canvas);
  ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
}

let particles = [];
function initParticles() {
  setupCanvas();
  if (!canvas) return;
  particles = [];
  for (let idx = 0; idx < 75; idx++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8
    });
  }
}

function animate() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "#00ffcc66";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

export {};`
      },
      {
        path: 'src/components/Navbar.jsx',
        data: `import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div style={{fontWeight:'bold', color:'#00ffcc'}}>Surya.dev</div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;`
      },
      {
        path: 'src/pages/Home.jsx',
        data: `import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>Hi, I'm Surya</h1>
        <div className="card">
          <div id="typing" className="typing">
            Full Stack Java Developer | Learning & Building Projects
          </div>
        </div>

        <div className="intro-box">
          <h2>📘 Full Stack Java Learning Roadmap</h2>
          <p>Computer Fundamentals • Java OOP • MySQL • Spring Boot • React</p>
        </div>

        <a href="#contact" className="btn-download" style={{marginTop:'20px'}}>
          🚀 Explore My Portfolio
        </a>
      </section>
    </>
  );
}

export default Home;`
      },
      {
        path: 'src/pages/About.jsx',
        data: `import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <section className="about">
        <h1>About Me</h1>
        <div className="about-box">
          <p>
            I'm Surya, a passionate full-stack developer who builds clean, efficient, and scalable web applications.
          </p>
        </div>
        <h2>Skills</h2>
        <div className="skills">
          <div className="card">Java</div>
          <div className="card">Spring Boot</div>
          <div className="card">JavaScript</div>
          <div className="card">React</div>
          <div className="card">HTML5 & CSS3</div>
          <div className="card">MySQL</div>
          <div className="card">Git & GitHub</div>
        </div>
      </section>
    </>
  );
}

export default About;`
      },
      {
        path: 'src/pages/Contact.jsx',
        data: `import React from "react";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="contact-card">
          <h2>Get In Touch</h2>
          <p style={{margin:'10px 0'}}>Email: smartsurya6556@gmail.com</p>
          <p style={{margin:'10px 0'}}>Location: Chennai, India</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button className="btn-send" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;`
      },
      {
        path: 'src/pages/Projects.jsx',
        data: `import React from "react";
import Navbar from "../components/Navbar";

function Projects() {
  return (
    <>
      <Navbar />
      <div style={{padding:'40px 20px', textAlign:'center'}}>
        <h1 style={{color:'#00ffcc'}}>My Projects</h1>
        <div className="projects">
          <div className="card">
            <h2>🌐 Portfolio Web App</h2>
            <p>Interactive single-page portfolio with React 19 and animations.</p>
          </div>
          <div className="card">
            <h2>💻 Java Billing System</h2>
            <p>Robust desktop invoice and inventory management software.</p>
          </div>
          <div className="card">
            <h2>⚙️ Fullstack Task Portal</h2>
            <p>Comprehensive task submission and engineering roadmap hub.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;`
      }
    ]
  };
})();
