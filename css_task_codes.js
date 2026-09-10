// DevTask HUB — CSS3 8-Day Task Code Repository
// Embedded dataset for 100% offline & local file:/// compatibility
// Pure CSS Stylesheets for all 8 CSS Tasks

window.CSS_TASK_CODES = {
  1: `/* ==========================================================================
   CSS-V3 — Day 1: CSS Introduction, Inline, Internal & External Styles
   Task: My Favorite Showcase (Foods, Movies, Places, Actors, Sports)
   Language: Pure CSS3
   ========================================================================== */

/* Page Background & Base Typography */
#indext {
    background-color: #000000;
    color: #f0f8ff;
}

/* Header Banner & Navigation Styling */
header {
    background-color: rgba(236, 196, 168, 0.95);
    padding-top: 20px;
    padding-bottom: 20px;
    color: #000000;
}

#navi {
    text-align: center;
    position: relative;
    bottom: 15px;
}

#navi a {
    color: #000000;
    text-decoration: none;
    padding: 0 10px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* Section 1: Favorite Foods Card */
#food {
    text-align: center;
    background-color: rgb(153, 211, 192);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 50%;
    height: 50%;
    border-radius: 20px;
    position: relative;
    left: 28%;
    top: 10px;
}

/* Section 2: Favorite Movie Banner & Overlay */
#movie {
    background-image: url(movie-bannerr-408.avif);
    color: rgb(255, 240, 240);
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 75%;
    height: 80%;
    background-size: auto;
}

/* Section 3: Favorite Place Container */
#place {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Section 4 & 5: Actor & Sports Containers */
.actor {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.sport {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Media & Image Rounded Corners */
.img {
    width: 300px;
    height: 400px;
    border-radius: 20px;
}

/* Headings Typography */
h1 {
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

h2 {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Footer Styling */
footer {
    background-color: #000000;
    color: #ffffff;
    padding: 20px;
    text-align: center;
}`,

  2: `/* ==========================================================================
   CSS-V3 — Day 2: CSS Selectors, Box Model & Multi-Page Layout
   Task: Multi-Page Student, Hospital & IT Company Directory
   File: assets/css/Home.css
   Language: Pure CSS3
   ========================================================================== */

/* CSS Reset */
* {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Body & Base Typography */
body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    background-color: rgb(1, 1, 1);
    color: #9e9898;
    text-align: center;
}

a {
    text-decoration: none;
    color: inherit;
}

h1 {
    color: rgb(224, 58, 7);
}

/* Navigation Bar Styling */
nav {
    color: rgb(246, 199, 11);
    background-color: rgb(71, 151, 185);
    font-size: x-large;
    padding: 10px;
}

/* Student Section */
.student {
    background-color: beige;
    color: black;
    padding: 20px;
}

/* Favorite Movies Section */
.leo {
    background-color: rgb(148, 110, 60);
    color: black;
    padding: 20px;
}

p, h2 {
    font-weight: 200;
    font-size: medium;
}

/* Hospital Section */
.para {
    background-color: bisque;
    color: black;
    font-size: medium;
    padding: 15px;
}

#depo {
    background-color: rgb(112, 70, 151);
    color: aliceblue;
    font-style: italic;
    padding: 15px;
}

h2 {
    color: rgb(227, 250, 109);
}

/* IT Companies Section */
.body {
    background-color: aliceblue;
    color: black;
    font-size: x-large;
    padding: 20px;
}`,

  3: `/* ==========================================================================
   CSS-V3 — Day 3: CSS Positioning, Flexbox & Component Layouts
   Task: Information Cards (Student, Employee, Product, Movie, Company)
   File: src/css/style.css
   Language: Pure CSS3
   ========================================================================== */

* {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(246, 241, 241);
    text-align: center;
    background-color: black;
}

a {
    text-decoration: dashed;
    color: inherit;
}

nav {
    color: rgb(8, 8, 8);
    padding: 20px;
}

nav a {
    background-color: rgb(95, 84, 73);
    color: aliceblue;
    padding: 20px;
    border-radius: 15px;
    text-decoration: none;
    margin: 0 10px;
}

#top {
    background-color: rgb(201, 184, 130);
    color: rgb(8, 8, 8);
    padding: 30px;
}

/* Flexbox Multi-Card Container */
.card {
    background-color: rgb(98, 121, 88);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px;
    border: 3px solid rgba(255, 255, 255, 0.807);
    color: rgb(8, 8, 8);
    margin: 30px;
    border-radius: 20px;
    gap: 20px;
}

/* Individual Card Component Variants */
.st {
    background-color: rgb(149, 217, 231);
    padding: 20px;
    border: 3px solid rgba(46, 49, 49, 0.807);
    color: rgb(8, 8, 8);
    border-radius: 20px;
    flex: 1 1 250px;
}

.em {
    background-color: rgb(138, 183, 151);
    padding: 20px;
    border: 3px solid rgba(218, 249, 131, 0.997);
    color: rgb(8, 8, 8);
    border-radius: 20px;
    flex: 1 1 250px;
}

.pr {
    background-color: rgb(157, 222, 146);
    padding: 20px;
    border: 3px solid rgba(39, 199, 231, 0.807);
    color: rgb(8, 8, 8);
    border-radius: 20px;
    flex: 1 1 250px;
}

.movie {
    background-color: rgb(237, 208, 146);
    padding: 20px;
    border: 3px solid rgba(160, 156, 78, 0.807);
    color: rgb(8, 8, 8);
    border-radius: 20px;
    flex: 1 1 250px;
}

.company {
    background-color: rgb(229, 170, 255);
    padding: 20px;
    border: 3px solid rgba(160, 156, 78, 0.807);
    color: rgb(8, 8, 8);
    border-radius: 20px;
    flex: 1 1 250px;
}

#foot {
    background-color: rgb(154, 141, 98);
    color: rgb(8, 8, 8);
    padding: 30px;
}`,

  4: `/* ==========================================================================
   CSS-V3 — Day 4: Bootstrap 5.3 – Custom Responsive Grid & Components
   Task: Responsive Grid System, Interactive Cards & Media Breakpoints
   File: assets/css/style.css
   Language: Pure CSS3
   ========================================================================== */

* {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    color: black;
}

a {
    text-decoration: none;
}

/* Main Responsive Flex/Grid Parent Container */
.parent {
    height: auto;
    min-height: 80vh;
    padding: 20px;
    border-radius: 20px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(80, 96, 87, 0.374);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: rgb(15, 15, 15);
    position: relative;
    top: 5vh;
    border: none;
    z-index: 2;
}

/* Child Card Components */
.child {
    background-color: rgba(156, 170, 192, 0.781);
    width: 30%;
    padding: 20px;
    text-align: center;
    border-radius: 20px;
    z-index: 1;
    transition: 0.3s ease;
    cursor: pointer;
}

.child:hover {
    border: 3px solid #e1ee71;
    transform: scale(1.05);
}

.child > h3 {
    text-align: center;
    font-weight: 600;
}

/* Responsive Media Queries */
@media (max-width: 480px) {
    .child {
        width: 100%;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .child {
        width: 45%;
    }
}

@media (min-width: 769px) {
    .child {
        width: 30%;
    }
}

/* Information Banner Box */
.text {
    background-color: antiquewhite;
    min-height: 120px;
    width: 80%;
    max-width: 500px;
    margin: 20px auto;
    border-radius: 20px;
    display: grid;
    align-items: center;
    padding: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}`,

  5: `/* ==========================================================================
   CSS-V3 — Day 5: Bootstrap 5.3 – Advanced Multi-Section Responsive Interface
   Task: Creative Design E-Commerce Showcase (Carousel, Cards, Form, Footer)
   Language: Pure CSS3 (Bootstrap Component Architecture & Styling Rules)
   ========================================================================== */

/* Navbar Brand & Sticky Header */
.navbar {
    transition: all 0.3s ease;
}

.navbar-brand {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.navbar-brand span {
    color: #212529;
}

.nav-link {
    font-weight: 500;
    transition: color 0.2s ease;
}

.nav-link:hover, .nav-link.active {
    color: #0d6efd !important;
}

/* Hero Carousel Customization */
.carousel-item {
    height: 480px;
    min-height: 350px;
}

.carousel-item img {
    height: 100%;
    object-fit: cover;
}

.carousel-caption {
    bottom: 25%;
    z-index: 10;
}

/* Feature & Service Cards */
.card {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    border-radius: 16px;
    overflow: hidden;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1) !important;
}

/* Product Cards & Badges */
.card-img-top {
    height: 220px;
    object-fit: contain;
    padding: 1rem;
    background: #f8f9fa;
}

.card-body .badge {
    font-size: 0.75rem;
    padding: 0.4em 0.8em;
    border-radius: 50rem;
}

/* Account Registration Form Controls */
.form-control {
    border-radius: 10px;
    padding: 0.75rem 1rem;
    border: 1px solid #ced4da;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-control:focus {
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}

/* Primary Button Styling */
.btn-primary {
    background-color: #0d6efd;
    border-color: #0d6efd;
    border-radius: 10px;
    font-weight: 600;
    transition: all 0.2s ease;
}

.btn-primary:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
    transform: translateY(-1px);
}

/* Responsive Media Queries */
@media (max-width: 768px) {
    .carousel-item {
        height: 280px;
    }
}`,

  6: `/* ==========================================================================
   CSS-V3 / Bootstrap 5.3 — Day 3: Multi-Column Layouts & Containers
   Task: Responsive Grid System, Multi-Column Cards & Alignment
   File: Frontend - Copy/Css-v3/Day4/Boostrab-v5.3/Day3/assets/style.css
   Language: Pure CSS3 / Bootstrap 5.3 Integration
   ========================================================================== */

/* Basic Body Style */
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
}

/* Assignment 1 - Container Formatting */
.container {
    border-radius: 8px;
}

/* Assignment 2 - 2-Column Responsive Layout */
.col-6, .col-md-6 {
    min-height: 150px;
}

/* Assignment 3 - 4-Column Responsive Grid */
.col-3, .col-sm-6, .col-md-3 {
    min-height: 150px;
}`,

  7: `/* ==========================================================================
   CSS-V3 — Day 7: Tailwind CSS 4 – Creation & Evolution Encyclopedia UI
   Task: Compact editorial banner, timeline controls, interactive cards,
         smooth pagination, and responsive modal transitions.
   File: Tailwind-v4.3/Day4/style.css
   Language: Pure CSS3
   ========================================================================== */

/* Custom Typography & Base Tokens */
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-serif: 'Newsreader', Georgia, Cambria, 'Times New Roman', serif;
  --font-display: 'Plus Jakarta Sans', var(--font-sans);
  
  --color-brand-50: #f0f9ff;
  --color-brand-100: #e0f2fe;
  --color-brand-600: #0284c7;
  --color-brand-700: #0369a1;
  --color-brand-900: #0c4a6e;
  
  --color-slate-900: #0f172a;
  --color-slate-800: #1e293b;
  --color-slate-700: #334155;
  --color-slate-600: #475569;
  --color-slate-200: #e2e8f0;
  --color-slate-100: #f1f5f9;
  --color-slate-50: #f8fafc;
}

html {
  scroll-behavior: smooth;
  font-family: var(--font-sans);
  color: var(--color-slate-800);
  background-color: #ffffff;
}

.font-serif {
  font-family: var(--font-serif);
}

.font-display {
  font-family: var(--font-display);
}

/* Custom Scrollbar for Sleek Interface */
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background: var(--color-slate-100);
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Modal Smooth Transitions */
.modal-backdrop {
  transition: opacity 0.25s ease-in-out;
}

.modal-content {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease-in-out;
}

.modal-open {
  overflow: hidden;
}

/* Horizontal Timeline Track & Connector Lines */
.timeline-track-container {
  position: relative;
  scrollbar-width: thin;
  scroll-behavior: smooth;
}

.timeline-connector {
  position: absolute;
  top: 34px;
  left: 30px;
  right: 30px;
  height: 2px;
  background-color: var(--color-slate-200);
  z-index: 1;
}

.timeline-node {
  position: relative;
  z-index: 2;
  transition: transform 0.15s ease;
}

.timeline-node:hover {
  transform: translateY(-2px);
}

/* Responsive Editorial Media Queries */
@media (max-width: 640px) {
  .subnav-sticky {
    top: 56px;
  }
}

@media (min-width: 641px) {
  .subnav-sticky {
    top: 64px;
  }
}

/* Hero Gradient Ambient Mesh */
.hero-compact-bg {
  background: linear-gradient(135deg, #090d16 0%, #0d1527 50%, #08111e 100%);
}

.subnav-sticky {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Micro Focus Accessibility */
a:focus-visible, button:focus-visible, input:focus-visible {
  outline: 2px solid #0284c7;
  outline-offset: 2px;
}

/* Print Optimization */
@media print {
  header, nav, footer, #timeline, #search-filter-section, #evolution-reasons, #comparison {
    display: none !important;
  }
  body {
    background: white !important;
    color: black !important;
  }
}`,

  8: `/* ==========================================================================
   CSS-V3 — Day 8: Pseudo Class & Pseudo Elements
   Task: Button Hover, Form Focus, nth-child, ::before, ::after & ::selection
   File: Frontend - Copy/Css-v3/Day8/assets/style.css
   Language: Pure CSS3
   ========================================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    padding: 30px;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

section {
    background-color: white;
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 10px;
}

section h2 {
    margin-bottom: 20px;
}

/* Task 1 - :hover */
.buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.buttons button {
    padding: 12px 25px;
    border: none;
    background-color: #333;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.buttons button:hover {
    background-color: orange;
    color: black;
}

/* Task 2 - :focus */
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
}

form input {
    padding: 12px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
}

form input:focus {
    border-color: blue;
    background-color: #eaf2ff;
}

form button {
    padding: 12px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
}

/* Task 3 - :first-child / :last-child */
.student-list {
    padding-left: 30px;
}

.student-list li {
    padding: 8px;
}

.student-list li:first-child {
    background-color: lightgreen;
    color: darkgreen;
}

.student-list li:last-child {
    background-color: lightcoral;
    color: darkred;
}

/* Task 4 - ::before / ::after */
.headings h3 {
    margin: 15px 0;
    font-size: 24px;
}

.headings h3::before {
    content: "★ ";
    color: orange;
}

.headings h3::after {
    content: " ✔";
    color: green;
}

/* Task 5 - ::first-letter / ::first-line / ::selection */
.paragraphs p {
    margin-bottom: 20px;
    line-height: 1.6;
}

.paragraphs p::first-letter {
    font-size: 35px;
    font-weight: bold;
}

.paragraphs p::first-line {
    color: blue;
}

.paragraphs p::selection {
    background-color: yellow;
    color: black;
}`,

  9: `/* ==========================================================================
   CSS-V3 — Day 9: CSS Transition & Transform
   Task: Button Hover, Image Gallery Zoom, Product Lift, 360° Rotate & Student Cards
   File: Frontend - Copy/Css-v3/Day9/assets/style.css
   Language: Pure CSS3
   ========================================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    padding: 30px;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

section {
    background-color: white;
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 10px;
}

section h2 {
    margin-bottom: 20px;
}

/* Task 1 - Button Hover Animation */
.buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.buttons button {
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: white;
    cursor: pointer;
    transition: 0.5s;
}

.buttons button:hover {
    background-color: orange;
    color: black;
    transform: scale(1.1);
}

/* Task 2 - Image Gallery Zoom */
.gallery {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.gallery img {
    width: 250px;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    transition: 0.5s;
}

.gallery img:hover {
    transform: scale(1.2);
}

/* Task 3 - Product Card Lift */
.products {
    display: flex;
    gap: 25px;
    justify-content: center;
    flex-wrap: wrap;
}

.product-card {
    width: 220px;
    padding: 15px;
    background-color: #f8f8f8;
    text-align: center;
    border-radius: 10px;
    transition: 0.4s;
}

.product-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
}

.product-card h3 {
    margin: 12px 0;
}

.product-card p {
    margin-bottom: 12px;
    font-weight: bold;
}

.product-card button {
    padding: 10px 20px;
    border: none;
    background-color: #333;
    color: white;
    border-radius: 5px;
}

.product-card:hover {
    transform: translateY(-10px);
}

/* Task 4 - Company Logo Rotation */
.logos {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.logos div {
    width: 120px;
    height: 120px;
    background-color: #eee;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: 1s;
}

.logos div:hover {
    transform: rotate(360deg);
}

/* Task 5 - Student Profile Cards */
.students {
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
}

.student-card {
    width: 230px;
    padding: 20px;
    text-align: center;
    background-color: #f8f8f8;
    border-radius: 10px;
    transition: 0.5s;
}

.student-card img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
}

.student-card:hover {
    transform: scale(1.05) translateY(-8px);
}`,

  10: `/* ==========================================================================
   CSS-V3 — Day 10: CSS3 Media Queries & Responsive Flex Cards
   Task: Responsive Student Cards, Product Grid, Team, Services & Portfolio
   File: Frontend - Copy/Css-v3/Day10/assets/style.css
   Language: Pure CSS3
   ========================================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: white;
    padding: 30px;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

section {
    background-color: #f8f8f8;
    padding: 25px;
    margin-bottom: 30px;
    border-radius: 10px;
}

section h2 {
    text-align: center;
    margin-bottom: 20px;
}

/* Task 1 - Student Cards */
.student-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.student-card {
    width: 30%;
    background-color: white;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
}

.student-card img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 10px;
}

/* Task 2 - Product Cards */
.product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.product-card {
    width: 23%;
    padding: 15px;
    background-color: white;
    text-align: center;
    border-radius: 10px;
}

.product-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
}

/* Media Queries for Responsive Screens */
@media (max-width: 992px) {
    .student-card { width: 45%; }
    .product-card { width: 45%; }
}

@media (max-width: 600px) {
    .student-card { width: 100%; }
    .product-card { width: 100%; }
}`,

  11: `/* ==========================================================================
   CSS-V3 — Day 11: CSS Flexbox – Flex Design & Card Wrapping
   Task: Navbar flex layout, responsive card wrapping, and button styling
   File: Frontend - Copy/Css-v3/Day-11/assets/style.css
   Language: Pure CSS3
   ========================================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    background-color: #222;
}

.navbar h2 {
    color: white;
}

.nav-links {
    display: flex;
    gap: 25px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 17px;
}

.nav-links a:hover {
    color: orange;
}

/* Cards */
.cards {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 25px;
    padding: 50px;
    flex-wrap: wrap;
}

.card {
    width: 280px;
    padding: 25px;
    background-color: white;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.card h2 {
    margin-bottom: 15px;
}

.card p {
    line-height: 1.5;
    margin-bottom: 20px;
}

.card button {
    padding: 10px 20px;
    border: none;
    background-color: #222;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.card button:hover {
    background-color: orange;
}`
};
