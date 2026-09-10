/**
 * Project 2: JS Lab • Logic & Practice (Part 2)
 * Data Models & Interactive Curriculum Assets
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
      path: 'assets/js/data/cheat-data.js',
      data: `/**
 * JavaScript Learning & Logic Lab - JS Cheat Lab Data
 */
const cheatLabData = {
  cards: [
    {
      id: "cheat-variables",
      title: "Variables",
      category: "Fundamentals",
      badge: "01",
      what: "Storage containers in memory for holding values.\n• let → value can change\n• const → value cannot be reassigned\n• var → legacy variable",
      syntax: "let age = 20;\nconst name = 'Surya';",
      example: "let score = 100;\nscore = 105;",
      remember: "let = change • const = fixed • var = avoid"
    },
    {
      id: "cheat-data-types",
      title: "Data Types",
      category: "Fundamentals",
      badge: "02",
      what: "Primitive types: String, Number, Boolean, Null, Undefined, Symbol, BigInt. Reference: Object, Array, Function.",
      syntax: "typeof 'hello' // 'string'",
      example: "const price = 99.99;\nconst inStock = true;",
      remember: "Primitives pass by value; objects pass by reference."
    },
    {
      id: "cheat-operators",
      title: "Operators & Equality",
      category: "Operators",
      badge: "03",
      what: "=== strict equality without type conversion. !== strict not equal. && AND, || OR, ! NOT.",
      syntax: "a === b && c !== d",
      example: "5 === '5' // false\n5 == '5' // true",
      remember: "Always use === and !== in modern JavaScript."
    }
  ]
};`
    },
    {
      path: 'assets/js/data/revision-data.js',
      data: `/**
 * JavaScript Learning & Logic Lab - Quick Revision Data
 */
const revisionData = {
  rapidCards: [
    {
      category: "Variables & Scope",
      icon: "code",
      items: [
        { term: "const", desc: "Cannot be reassigned. Block scoped." },
        { term: "let", desc: "Can be reassigned. Block scoped." },
        { term: "var", desc: "Function/global scoped. Hoisted with undefined." }
      ]
    },
    {
      category: "Array Methods",
      icon: "list",
      items: [
        { term: "map()", desc: "Transforms each element into a new array." },
        { term: "filter()", desc: "Returns subset of elements matching condition." },
        { term: "reduce()", desc: "Aggregates array values into a single accumulator." }
      ]
    }
  ]
};`
    },
    {
      path: 'assets/js/data/topics-data.js',
      data: `/**
 * JavaScript Learning & Logic Lab - 10 Core Topics Data
 */
const topicsData = [
  { id: 1, slug: "variables", title: "Variables — var, let, const", badge: "Topic 01", summary: "Memory storage containers and scoping rules." },
  { id: 2, slug: "data-types", title: "Data Types & Primitives", badge: "Topic 02", summary: "Strings, numbers, booleans, objects, and symbols." },
  { id: 3, slug: "operators", title: "Operators & Expressions", badge: "Topic 03", summary: "Arithmetic, comparison, logical, and ternary operators." },
  { id: 4, slug: "conditionals", title: "Conditionals (if/else/switch)", badge: "Topic 04", summary: "Decision branching and multi-case evaluation." },
  { id: 5, slug: "functions", title: "Functions & Parameters", badge: "Topic 05", summary: "Declarations, expressions, returns, and arguments." },
  { id: 6, slug: "arrow-functions", title: "ES6 Arrow Functions", badge: "Topic 06", summary: "Concise syntax and lexical this binding." },
  { id: 7, slug: "arrays", title: "Arrays & Iteration", badge: "Topic 07", summary: "Indexed collections, push, pop, shift, forEach." },
  { id: 8, slug: "objects", title: "Objects & Key-Value Maps", badge: "Topic 08", summary: "Object literals, dot/bracket notation, methods." },
  { id: 9, slug: "destructuring", title: "Destructuring & Spread", badge: "Topic 09", summary: "Unpacking values and spreading arrays/objects." },
  { id: 10, slug: "classes", title: "ES6 Classes & OOP", badge: "Topic 10", summary: "Class blueprints, constructors, and methods." }
];`
    },
    {
      path: 'assets/js/data/questions-data.js',
      data: `/**
 * JavaScript Learning & Logic Lab - 10 Logical Practice Questions
 */
const questionsData = [
  { id: 1, title: "Bank Account System", difficulty: "Hard", summary: "Deposit, withdraw and balance management using OOP." },
  { id: 2, title: "Online Shopping Cart", difficulty: "Hard", summary: "Item catalog, quantity counting and cart totals." },
  { id: 3, title: "ATM Withdrawal Simulator", difficulty: "Hard", summary: "PIN verification and multiple denomination calculations." },
  { id: 4, title: "Bank Loan Eligibility", difficulty: "Hard", summary: "Credit score, salary, and age requirement engine." },
  { id: 5, title: "Student Result Grading System", difficulty: "Hard", summary: "Score calculations, grade thresholds, and ranking." },
  { id: 6, title: "Weather Status Checker", difficulty: "Easy", summary: "Temperature ranges and rain condition alerts." },
  { id: 7, title: "Delivery Charge Calculator", difficulty: "Easy", summary: "Order distance calculation and free shipping rules." },
  { id: 8, title: "Car Speed Radar Checker", difficulty: "Easy", summary: "Speed limits and speeding penalty notifications." },
  { id: 9, title: "Shopping Store Discount", difficulty: "Easy", summary: "Bill amounts and seasonal percentage discounts." },
  { id: 10, title: "User Login Security Verification", difficulty: "Easy", summary: "Username and password credential verification." }
];`
    },
    {
      path: 'assets/js/app.js',
      data: `/**
 * JavaScript Learning & Logic Lab - Main Application Logic
 */
document.addEventListener('DOMContentLoaded', () => {
  const state = {
    currentView: 'dashboard'
  };

  function navigateTo(viewId) {
    document.querySelectorAll('.app-view').forEach(v => v.classList.add('hidden'));
    const target = document.getElementById('view-' + viewId);
    if (target) target.classList.remove('hidden');

    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.getAttribute('data-view') === viewId);
    });
  }

  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(el.getAttribute('data-view'));
    });
  });

  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(btn.getAttribute('data-goto'));
    });
  });
});`
    }
  );
})();
