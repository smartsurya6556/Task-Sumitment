/**
 * JavaScript Learning & Logic Lab - JS Cheat Lab Data
 * Quick Visual Learning Reference: Read → Understand → Remember
 */

const cheatLabData = {
  // Quick Learning Reference Cards
  cards: [
    // 1. Variables
    {
      id: "cheat-variables",
      title: "Variables",
      category: "Fundamentals",
      badge: "01",
      what: "Storage containers in memory for holding values.\n• let → value can change\n• const → value cannot be reassigned\n• var → older way of declaring variables",
      syntax: `let age = 20;\nconst name = "Surya";\nvar city = "Chennai";`,
      example: `let age = 20;\nage = 21; // Valid\n\nconst name = "Surya";\n// name = "Kumar"; // Error! Cannot reassign const`,
      remember: "let = change  •  const = fixed  •  var = old style"
    },

    // 2. Data Types
    {
      id: "cheat-data-types",
      title: "Data Types",
      category: "Fundamentals",
      badge: "02",
      what: "The types of values JavaScript can store and evaluate:\n• String → \"Hello\" (Text in quotes)\n• Number → 100 or 99.5 (Numeric values)\n• Boolean → true / false (Yes/No flags)\n• Undefined → no value assigned yet\n• Null → intentionally empty",
      syntax: `typeof value // Used to check the type of a value`,
      example: `typeof "Hello"  // "string"\ntypeof 100      // "number"\ntypeof true     // "boolean"\ntypeof undefined// "undefined"\ntypeof null     // "object"`,
      remember: "Text → String  •  Number → Number  •  Yes/No → Boolean"
    },

    // 3. Comparison Operators
    {
      id: "cheat-comparison-operators",
      title: "Comparison Operators",
      category: "Operators",
      badge: "03",
      what: "Used to compare two values and return a Boolean (true / false):\n• >   Greater than\n• <   Less than\n• >=  Greater than or equal\n• <=  Less than or equal\n• === Equal value + type (Strict)\n• !== Not equal value/type (Strict)",
      syntax: `value1 === value2\nvalue1 >= value2`,
      example: `const age = 20;\nage >= 18; // true (checks if age is greater than or equal to 18)\n\n5 === "5"; // false (number vs string)\n5 == "5";  // true (avoid loose comparison!)`,
      remember: "=== → strict comparison (value + type)  •  !== → strict not equal"
    },

    // 4. Logical Operators
    {
      id: "cheat-logical-operators",
      title: "Logical Operators",
      category: "Operators",
      badge: "04",
      what: "Used to combine or invert conditional checks:\n• && (AND) → Both conditions must be true\n• || (OR)  → At least one condition must be true\n• !  (NOT) → Reverse true to false and false to true",
      syntax: `condition1 && condition2\ncondition1 || condition2\n!condition`,
      example: `// AND (&&)\nage >= 18 && active === true // true if both pass\n\n// OR (||)\ntemp > 50 || temp < -10 // true if either is true\n\n// NOT (!)\n!active // returns true if active is false`,
      remember: "&& → ALL conditions true  •  || → ANY condition true  •  ! → OPPOSITE"
    },

    // 5. If / Else
    {
      id: "cheat-if-else",
      title: "If / Else",
      category: "Conditions",
      badge: "05",
      what: "Conditional branching flow in JavaScript:\n\nif\n ↓\nCondition true?\n ↓\nYES → execute if block\nNO  → execute else block",
      syntax: `if (condition) {\n    // runs when true\n} else {\n    // runs when false\n}`,
      example: `const mark = 75;\n\nif (mark >= 50) {\n    console.log("Pass");\n} else {\n    console.log("Fail");\n}`,
      remember: "if → check condition  •  else → otherwise"
    },

    // 6. Else If
    {
      id: "cheat-else-if",
      title: "Else If",
      category: "Conditions",
      badge: "06",
      what: "Use else if when testing multiple sequential conditions.\nConditions evaluate strictly from top to bottom.",
      syntax: `if (condition1) {\n    // block 1\n} else if (condition2) {\n    // block 2\n} else {\n    // fallback\n}`,
      example: `const mark = 85;\nlet grade;\n\nif (mark >= 90) {\n    grade = "A";\n} else if (mark >= 80) {\n    grade = "B";\n} else {\n    grade = "C";\n}\nconsole.log(grade); // "B"`,
      remember: "if → else if → else (Conditions are checked from top to bottom)"
    },

    // 7. Functions
    {
      id: "cheat-functions",
      title: "Functions",
      category: "Functions",
      badge: "07",
      what: "Function Formula:\nCreate Function → Call Function → Get Result\n\n• a, b → parameters (variables declared in function)\n• 10, 20 → arguments (actual values passed in call)\n• return → sends computed result back to caller",
      syntax: `const functionName = (param1, param2) => {\n    return result;\n};\nfunctionName(arg1, arg2);`,
      example: `const add = (a, b) => {\n    return a + b;\n};\n\nconst total = add(10, 20);\nconsole.log(total); // 30`,
      remember: "Function = reusable block of code  •  return = send result back"
    },

    // 8. Arrow Functions
    {
      id: "cheat-arrow-functions",
      title: "Arrow Functions",
      category: "Functions",
      badge: "08",
      what: "Arrow functions provide a clean, modern ES6 syntax for writing functions with lexical 'this' binding.",
      syntax: `// Normal Function\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow Function\nconst add = (a, b) => {\n    return a + b;\n};`,
      example: `// Concise arrow function\nconst square = n => n * n;\n\n// Multi-line arrow function\nconst greet = (name) => {\n    return \`Hello, \${name}!\`;\n};`,
      remember: "const name = () => {}  •  Arrow function = shorter modern function"
    },

    // 9. Arrays
    {
      id: "cheat-arrays",
      title: "Arrays",
      category: "Collections",
      badge: "09",
      what: "An ordered, zero-indexed list of values stored in a single variable:\n\nIndex:\n 0 → 10\n 1 → 20\n 2 → 30",
      syntax: `const numbers = [10, 20, 30];\nnumbers[0] // Access first item`,
      example: `const numbers = [10, 20, 30];\n\nconsole.log(numbers[0]); // 10\nconsole.log(numbers[2]); // 30\nconsole.log(numbers.length); // 3`,
      remember: "Array index ALWAYS starts from 0  •  [ ] = Array brackets"
    },

    // 10. Common Array Methods
    {
      id: "cheat-array-methods",
      title: "Common Array Methods",
      category: "Collections",
      badge: "10",
      what: "Essential methods for working with arrays:\n• push()  → Add item at the end\n• pop()   → Remove item from the end\n• find()  → Find first matching item\n• map()   → Create new array by changing each item\n• forEach() → Run a function for every item",
      syntax: `arr.push(item);\narr.pop();\narr.find(item => condition);\narr.map(item => transform);\narr.forEach(item => action);`,
      example: `const numbers = [10, 20, 30];\n\n// forEach: visit each item\nnumbers.forEach(num => {\n    console.log(num);\n});\n\n// find: find first match\nconst found = numbers.find(n => n > 15); // 20`,
      remember: "push → add  •  pop → remove  •  find → search  •  map → transform  •  forEach → visit each"
    },

    // 11. Objects
    {
      id: "cheat-objects",
      title: "Objects",
      category: "Collections",
      badge: "11",
      what: "An object stores related data in key-value pairs:\n\nObject\n ├── name → \"Kumar\"\n └── mark → 90",
      syntax: `const obj = { key: value };\nobj.key // Dot notation`,
      example: `const student = {\n    name: "Kumar",\n    mark: 90\n};\n\nconsole.log(student.name); // "Kumar"\nconsole.log(student.mark); // 90`,
      remember: "Object = key + value  •  { } = Object curly braces"
    },

    // 12. Array of Objects
    {
      id: "cheat-array-of-objects",
      title: "Array of Objects",
      category: "Collections",
      badge: "12",
      what: "A list of structured records:\nArray (Multiple items)\n ↓\nObject (Related data)\n ↓\nKey + Value",
      syntax: `const list = [\n    { id: 1, name: "A" },\n    { id: 2, name: "B" }\n];`,
      example: `const students = [\n    { name: "Kumar", mark: 90 },\n    { name: "Kavitha", mark: 85 }\n];\n\nstudents.forEach(student => {\n    console.log(student.name, student.mark);\n});`,
      remember: "Array → multiple items  •  Object → related data  •  Array of Objects → multiple records"
    },

    // 13. Destructuring
    {
      id: "cheat-destructuring",
      title: "Destructuring",
      category: "Modern JS",
      badge: "13",
      what: "Unpack values from arrays or properties from objects into distinct variables easily.",
      syntax: `// Array Destructuring\nconst [a, b] = array;\n\n// Object Destructuring\nconst { key1, key2 } = object;`,
      example: `// Array\nconst numbers = [10, 20];\nconst [a, b] = numbers;\nconsole.log(a); // 10\n\n// Object\nconst student = { name: "Surya", mark: 90 };\nconst { name, mark } = student;\nconsole.log(name); // "Surya"`,
      remember: "Destructuring = take values out easily into variables"
    },

    // 14. Spread Operator
    {
      id: "cheat-spread",
      title: "Spread (...)",
      category: "Modern JS",
      badge: "14",
      what: "Spread expands or unpacks iterable elements (like arrays or objects) into individual items.",
      syntax: `const newArr = [...oldArr, newItem];\nconst newObj = { ...oldObj, newKey: val };`,
      example: `const a = [10, 20];\nconst b = [...a, 30];\nconsole.log(b); // [10, 20, 30]\n\nconst user = { name: "Arun" };\nconst profile = { ...user, role: "Dev" };`,
      remember: "...spread → expand / copy values"
    },

    // 15. Rest Operator
    {
      id: "cheat-rest",
      title: "Rest (...)",
      category: "Modern JS",
      badge: "15",
      what: "Rest collects multiple remaining arguments or items into a single array parameter.",
      syntax: `const fn = (...numbers) => { /* numbers is an array */ };`,
      example: `const addAll = (...numbers) => {\n    return numbers.reduce((sum, n) => sum + n, 0);\n};\n\nconsole.log(addAll(10, 20, 30)); // 60`,
      remember: "Spread → expand  •  Rest → collect"
    },

    // 16. Classes & OOP
    {
      id: "cheat-classes",
      title: "Class",
      category: "OOP",
      badge: "16",
      what: "A blueprint for creating structured object instances:\n• class → blueprint\n• constructor → initializes properties\n• this → refers to current object\n• new → instantiates a new object",
      syntax: `class ClassName {\n    constructor(param) {\n        this.prop = param;\n    }\n}\nconst instance = new ClassName(val);`,
      example: `class Student {\n    constructor(name, mark) {\n        this.name = name;\n        this.mark = mark;\n    }\n}\n\nconst s1 = new Student("Sarath", 95);\nconsole.log(s1.name); // "Sarath"`,
      remember: "Class = Blueprint  •  Object = Created from blueprint using 'new'"
    }
  ],

  // Think Like JavaScript (Logic Formula)
  logicFormula: {
    title: "Think Like JavaScript",
    subtitle: "The 6-Step Universal JavaScript Program Flow",
    steps: [
      { step: "1", title: "INPUT", desc: "Receive raw data (arrays, objects, customer records, parameters)" },
      { step: "2", title: "STORE DATA", desc: "Store state cleanly using let and const variables" },
      { step: "3", title: "CHECK CONDITION", desc: "Evaluate logic using if, else if, &&, ||, and ===" },
      { step: "4", title: "MAKE DECISION", desc: "Branch program flow based on true / false outcomes" },
      { step: "5", title: "CALCULATE", desc: "Perform arithmetic operations (discounts, fees, totals, grade)" },
      { step: "6", title: "OUTPUT", desc: "Return result or display output using console.log()" }
    ],
    exampleFlow: {
      title: "Real-World Example: Customer Discount Flow",
      chain: [
        "1. Customer Object",
        "2. Check Order Amount",
        "3. Check Discount Condition (>= 1000)",
        "4. Calculate Discount Percentage",
        "5. Compute Final Bill",
        "6. Display Output"
      ]
    }
  },

  // Don't Make These Mistakes (Common Mistakes)
  commonMistakes: [
    {
      id: 1,
      title: "Assignment (=) in if Condition",
      bad: "if (age = 18) { ... }",
      fix: "if (age === 18) { ... }",
      explanation: "Single '=' assigns a value, turning condition into truthy 18. Use '===' to compare values."
    },
    {
      id: 2,
      title: "Confusing = with == and ===",
      bad: "if (status = 'active')",
      fix: "if (status === 'active')",
      explanation: "'=' is assignment. '==' is loose equality with type coercion. '===' is strict equality (checks both value and type)."
    },
    {
      id: 3,
      title: "Forgetting Array 0-Indexing",
      bad: "const first = items[1]; // Grabs 2nd item!",
      fix: "const first = items[0]; // First item is always index 0",
      explanation: "JavaScript arrays are 0-indexed. An array of 3 items has indexes 0, 1, and 2."
    },
    {
      id: 4,
      title: "Confusing && (AND) with || (OR)",
      bad: "if (age >= 18 || salary >= 30000) // Passes if either is true",
      fix: "if (age >= 18 && salary >= 30000) // Passes ONLY if both are true",
      explanation: "'&&' requires ALL conditions to be true. '||' requires at least ONE condition to be true."
    },
    {
      id: 5,
      title: "Confusing Parameter vs Argument",
      bad: "const fn = (10, 20) => {}",
      fix: "const fn = (a, b) => {}; fn(10, 20);",
      explanation: "Parameters (a, b) are variable names in function definition. Arguments (10, 20) are the actual values passed during execution."
    }
  ],

  // "Remember This" Visual Cheat Sheet
  rememberThis: [
    { key: "let", value: "change value (reassignable)" },
    { key: "const", value: "fixed value (cannot reassign)" },
    { key: "===", value: "strict equality (value + type)" },
    { key: "!==", value: "strict inequality" },
    { key: "&&", value: "ALL conditions must be true" },
    { key: "||", value: "ANY condition can be true" },
    { key: "!", value: "OPPOSITE (reverses boolean)" },
    { key: "if", value: "check condition" },
    { key: "else", value: "otherwise fallback" },
    { key: "function", value: "reusable code block" },
    { key: "return", value: "send result back to caller" },
    { key: "[]", value: "Array (ordered list, 0-indexed)" },
    { key: "{}", value: "Object (key + value pairs)" },
    { key: "push", value: "add item at the end" },
    { key: "pop", value: "remove item from the end" },
    { key: "find", value: "search first matching item" },
    { key: "map", value: "transform each item into new array" },
    { key: "forEach", value: "visit and process each item" },
    { key: "class", value: "blueprint for objects" },
    { key: "new", value: "instantiate object from blueprint" },
    { key: "this", value: "current object reference" },
    { key: "...spread", value: "expand / copy values" },
    { key: "...rest", value: "collect multiple values into array" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { cheatLabData };
}
