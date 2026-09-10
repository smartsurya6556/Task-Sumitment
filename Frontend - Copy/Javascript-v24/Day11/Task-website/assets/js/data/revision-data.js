/**
 * JavaScript Learning & Logic Lab - Quick Revision & Exam Cheat Sheet Data
 */

const revisionData = {
  rapidCards: [
    {
      category: "Variables & Scope",
      icon: "code",
      items: [
        { term: "const", desc: "Cannot be reassigned. Must be initialized immediately. Block scoped." },
        { term: "let", desc: "Can be reassigned. Cannot be re-declared in the same block. Block scoped." },
        { term: "var", desc: "Legacy variable keyword. Function/global scoped. Hoisted with undefined." },
        { term: "Temporal Dead Zone (TDZ)", desc: "The zone from the start of the block until let/const is initialized." }
      ]
    },
    {
      category: "Operators & Logic",
      icon: "divide",
      items: [
        { term: "===", desc: "Strict Equality. Compares BOTH value and data type without coercion." },
        { term: "==", desc: "Loose Equality. Coerces types before comparison (avoid in modern JS)." },
        { term: "&& (AND)", desc: "Returns true only if ALL operands are truthy. Short-circuits on first false." },
        { term: "|| (OR)", desc: "Returns true if AT LEAST ONE operand is truthy. Short-circuits on first true." },
        { term: "! (NOT)", desc: "Inverts boolean truth value (!true === false, !false === true)." },
        { term: "% (Modulus)", desc: "Returns integer remainder of division (e.g. 10 % 3 = 1)." }
      ]
    },
    {
      category: "Array Methods",
      icon: "list",
      items: [
        { term: "push()", desc: "Adds one or more elements to the END of array and returns new length." },
        { term: "pop()", desc: "Removes and returns the LAST element from the array." },
        { term: "includes(val)", desc: "Returns true if element exists in array, otherwise false." },
        { term: "find(fn)", desc: "Returns the FIRST element that satisfies test condition, or undefined." },
        { term: "findIndex(fn)", desc: "Returns the index of the first match, or -1 if not found." },
        { term: "map(fn)", desc: "Creates a brand NEW array with results of calling function on every item." },
        { term: "forEach(fn)", desc: "Executes a function for each array element (returns undefined)." }
      ]
    },
    {
      category: "Objects & Modern ES6+",
      icon: "layers",
      items: [
        { term: "Object.keys(obj)", desc: "Returns an array of an object's enumerable property names." },
        { term: "Object.values(obj)", desc: "Returns an array of an object's own property values." },
        { term: "Object.entries(obj)", desc: "Returns an array of [key, value] pairs." },
        { term: "Spread (...)", desc: "EXPANDS array or object into individual elements/properties." },
        { term: "Rest (...)", desc: "COLLECTS multiple remaining arguments/items into a single array." },
        { term: "Destructuring", desc: "Unpacks values from arrays/objects into distinct variables." }
      ]
    },
    {
      category: "Classes & OOP",
      icon: "box",
      items: [
        { term: "class", desc: "Template/blueprint for creating structured objects." },
        { term: "constructor()", desc: "Special method that runs automatically when an instance is created." },
        { term: "this", desc: "Refers to the specific object instance executing the current code." },
        { term: "new", desc: "Operator that allocates memory and instantiates a class object." }
      ]
    }
  ],

  comparisons: [
    {
      title: "var vs let vs const",
      headers: ["Feature", "var", "let", "const"],
      rows: [
        ["Reassignable?", "Yes", "Yes", "No"],
        ["Re-declarable?", "Yes (Risky)", "No (Error)", "No (Error)"],
        ["Scope", "Function / Global", "Block { }", "Block { }"],
        ["Must initialize?", "No", "No", "Yes (Mandatory)"],
        ["Hoisting behavior", "undefined", "TDZ Error", "TDZ Error"]
      ]
    },
    {
      title: "map() vs forEach()",
      headers: ["Aspect", "map()", "forEach()"],
      rows: [
        ["Return Value", "Returns brand NEW array", "Returns undefined"],
        ["Original Array", "Does not mutate original", "Does not mutate (unless manually done)"],
        ["Chainable?", "Yes (e.g. .map().filter())", "No (cannot chain)"],
        ["Primary Purpose", "Transforming data into new list", "Performing side effects (logs, saving)"]
      ]
    },
    {
      title: "find() vs filter()",
      headers: ["Aspect", "find()", "filter()"],
      rows: [
        ["Output", "Single element (or undefined)", "Array of matching elements (or [])"],
        ["Stops Searching?", "Yes, on FIRST match found", "No, checks entire array"],
        ["Best Used For", "Unique lookups (e.g. by ID)", "Extracting groups (e.g. all passed marks)"]
      ]
    },
    {
      title: "Spread (...) vs Rest (...)",
      headers: ["Aspect", "Spread Operator", "Rest Parameter"],
      rows: [
        ["Core Action", "EXPAND (Unpack items)", "COLLECT (Pack items together)"],
        ["Where Used", "Array literals [], Object literals {}, Function calls", "Function parameter lists (a, ...rest), destructuring"],
        ["Position", "Anywhere inside container", "Must be the LAST parameter in list"],
        ["Mnemonic", "[...arr, 3] -> Expands array", "fn(...args) -> Collects into array"]
      ]
    },
    {
      title: "Parameters vs Arguments",
      headers: ["Aspect", "Parameter", "Argument"],
      rows: [
        ["Definition", "Variable listed in the function declaration", "Actual value passed into function during call"],
        ["Example Code", "function add(a, b) -> 'a' and 'b'", "add(10, 20) -> '10' and '20'"],
        ["Scope", "Local variable inside function body", "Expression evaluated before function runs"]
      ]
    }
  ],

  testTraps: [
    {
      trap: "1. typeof null === 'object'",
      explanation: "This is a historical JavaScript bug from 1995. Even though null is a primitive type, typeof returns 'object'. To check for null safely, always use: val === null."
    },
    {
      trap: "2. '5' + 3 vs '5' - 3",
      explanation: "The '+' operator triggers string concatenation: '5' + 3 becomes '53'. But the '-' operator triggers numeric coercion: '5' - 3 becomes 2."
    },
    {
      trap: "3. 0 == false vs 0 === false",
      explanation: "0 == false evaluates to TRUE due to loose type coercion. 0 === false evaluates to FALSE because Number is not Boolean."
    },
    {
      trap: "4. Implicit return with { } in Arrow Functions",
      explanation: "const fn = () => { 5 }; returns undefined because { } is parsed as a function body, not an object. Write const fn = () => 5; or const fn = () => ({ val: 5 });."
    },
    {
      trap: "5. Objects & Arrays compared by Reference",
      explanation: "[] === [] and {} === {} are both FALSE! JavaScript compares objects by memory reference, not by internal values."
    },
    {
      trap: "6. const object mutation",
      explanation: "const person = { name: 'Surya' }; person.name = 'Kumar'; is 100% VALID. const prevents reassignment of the variable identifier, not internal mutation."
    },
    {
      trap: "7. NaN is a Number",
      explanation: "typeof NaN returns 'number'. NaN === NaN is FALSE! Use Number.isNaN(val) to check for NaN."
    },
    {
      trap: "8. forEach returns undefined",
      explanation: "const res = [1, 2].forEach(x => x * 2); will make res equal to undefined, NOT [2, 4]. Use map() to capture results."
    },
    {
      trap: "9. Short-circuiting with && and ||",
      explanation: "In 'false && anything', the right side never runs. In 'true || anything', the right side never runs. JavaScript halts evaluation immediately."
    },
    {
      trap: "10. Falsy Values in JavaScript",
      explanation: "There are only 8 falsy values: false, 0, -0, 0n, '' (empty string), null, undefined, NaN. Note that '0' (string zero), [], and {} are TRUTHY!"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { revisionData };
}
