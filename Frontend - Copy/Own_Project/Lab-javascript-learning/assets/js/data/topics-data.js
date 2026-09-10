/**
 * JavaScript Learning & Logic Lab - 10 Core Topics Data
 */

const topicsData = [
  {
    id: 1,
    slug: "variables",
    title: "Variables — var, let, const",
    badge: "Topic 01",
    icon: "code",
    category: "Fundamentals",
    summary: "Understand how JavaScript stores data in memory using var, let, and const, along with declaration, initialization, scope, and reassignment rules.",
    whatIsIt: "A variable is a named storage container in memory used to hold data or values that your program can use, read, and manipulate over time.",
    whyUseIt: "Without variables, you would have to hardcode values everywhere. Variables make your code reusable, readable, dynamic, and easy to maintain.",
    syntax: `// 1. Declaration only
let score;

// 2. Declaration + Initialization
let age = 20;
const name = "Surya";
var city = "Chennai";

// 3. Reassignment
age = 21; // Valid with let
// name = "Kumar"; // Error! const cannot be reassigned`,
    codeExample: `// Example: Variables in Action
let age = 20;
console.log("Initial age:", age);

age = 21; // Reassigning let
console.log("Updated age:", age);

const name = "Surya";
console.log("Developer name:", name);

// Scope Demonstration
if (true) {
    var functionScoped = "I am var (Function/Global scoped)";
    let blockScoped = "I am let (Block scoped)";
    const blockConst = "I am const (Block scoped)";
}

console.log(functionScoped); // Works!
// console.log(blockScoped); // ReferenceError: blockScoped is not defined`,
    expectedOutput: `Initial age: 20
Updated age: 21
Developer name: Surya
I am var (Function/Global scoped)`,
    howItWorks: [
      "1. 'Declaration' means introducing a new variable name to JavaScript (e.g., 'let age;').",
      "2. 'Initialization' means assigning an initial starting value (e.g., 'let age = 20;').",
      "3. 'Reassignment' means giving an existing variable a new value (e.g., 'age = 21;').",
      "4. 'let' allows reassignment and is restricted to the curly braces '{ ... }' where it was defined (block scope).",
      "5. 'const' creates an unchangeable reference (constant) and must be initialized immediately during declaration.",
      "6. 'var' is the older ES5 way. It ignores block scope '{ }' and leaks outside of if-statements and loops."
    ],
    comparisonTable: {
      headers: ["Feature", "var", "let", "const"],
      rows: [
        ["Reassignable?", "Yes", "Yes", "No"],
        ["Re-declarable in same scope?", "Yes (Dangerous)", "No (Throws Error)", "No (Throws Error)"],
        ["Scope", "Function / Global", "Block Scope { }", "Block Scope { }"],
        ["Must initialize on declare?", "No (defaults to undefined)", "No (defaults to undefined)", "Yes (Mandatory)"],
        ["Modern Best Practice", "Avoid in modern JS", "Use when value changes", "Preferred default choice"]
      ]
    },
    whenToUse: {
      letRule: "Use 'let' when you know the variable's value will change later (e.g., loop counters, running totals, game scores, toggle states).",
      constRule: "Use 'const' by default for almost everything (e.g., arrays, objects, functions, API URLs, fixed configuration). It prevents accidental reassignment bugs."
    },
    importantForTest: [
      "const variables MUST be given a value when declared: 'const x;' will cause a SyntaxError.",
      "const prevents reassignment of the variable identifier, but if const holds an array or object, the internal contents can still be modified (mutated).",
      "let and const are block-scoped (live only inside '{ }'), whereas var is function-scoped.",
      "Hoisting: var is hoisted and initialized with 'undefined'. let and const are hoisted but remain in the 'Temporal Dead Zone' (TDZ) until their declaration is evaluated."
    ],
    commonMistakes: [
      {
        mistake: "Trying to reassign a const variable.",
        explanation: "Doing 'const pi = 3.14; pi = 3.1415;' will throw 'TypeError: Assignment to constant variable'.",
        fix: "Change 'const' to 'let' if you genuinely need to reassign the variable name to a new value."
      },
      {
        mistake: "Assuming const makes objects/arrays completely immutable.",
        explanation: "Doing 'const arr = [1, 2]; arr.push(3);' is completely valid! 'const' only prevents 'arr = [9, 9]'.",
        fix: "Use 'Object.freeze()' if you want to prevent object properties or array elements from changing."
      }
    ]
  },
  {
    id: 2,
    slug: "data-types",
    title: "Data Types & typeof",
    badge: "Topic 02",
    icon: "database",
    category: "Fundamentals",
    summary: "Master all 7 primitive data types in JavaScript (String, Number, Boolean, Undefined, Null, BigInt, Symbol), plus objects and the typeof operator.",
    whatIsIt: "Data types define the kind of data a value represents in JavaScript so the computer knows how to store it in memory and what operations can be performed on it.",
    whyUseIt: "Understanding data types prevents bugs (like adding a string '5' to a number 10 resulting in '510' instead of 15) and helps you write robust type-safe code.",
    syntax: `// Primitives (Stored by Value)
const text = "Hello";        // String
const count = 42;            // Number
const isOpen = true;         // Boolean
let emptyVal;                // Undefined
const noVal = null;          // Null
const big = 9007199254740991n; // BigInt
const sym = Symbol("id");    // Symbol

// Check type using typeof
typeof variableName;`,
    codeExample: `// Examples of JavaScript Data Types
const name = "Surya";       // String
const age = 24;             // Number
const active = true;        // Boolean
let value;                  // Undefined (declared but no value)
const data = null;          // Null (intentional absence of value)
const bigNumber = 12345678901234567890n; // BigInt
const uniqueKey = Symbol("token");       // Symbol

console.log("name:", name, "| typeof:", typeof name);
console.log("age:", age, "| typeof:", typeof age);
console.log("active:", active, "| typeof:", typeof active);
console.log("value:", value, "| typeof:", typeof value);
console.log("data:", data, "| typeof:", typeof data);
console.log("bigNumber:", bigNumber, "| typeof:", typeof bigNumber);
console.log("uniqueKey:", typeof uniqueKey);`,
    expectedOutput: `name: Surya | typeof: string
age: 24 | typeof: number
active: true | typeof: boolean
value: undefined | typeof: undefined
data: null | typeof: object
bigNumber: 12345678901234567890n | typeof: bigint
uniqueKey: symbol`,
    howItWorks: [
      "1. JavaScript is 'dynamically typed', meaning variables do not hold types; values hold types.",
      "2. String: Text wrapped in single (''), double (\"\"), or backtick (``) quotes.",
      "3. Number: All numeric values including integers and floating-point decimals (e.g. 24, 3.14, -10, NaN, Infinity).",
      "4. Boolean: Represents logical truth: either 'true' or 'false'.",
      "5. Undefined: A variable that has been declared but not yet assigned any value.",
      "6. Null: An explicit, intentional assignment representing 'nothing' or 'empty'.",
      "7. BigInt: Used for arbitrary-precision integers larger than 2^53 - 1 (appended with 'n').",
      "8. Symbol: A unique and immutable primitive identifier."
    ],
    importantForTest: [
      "Famous JavaScript Bug: 'typeof null' returns 'object'. This is a historical bug in JavaScript that cannot be fixed without breaking older websites.",
      "'undefined' vs 'null': 'undefined' means a variable exists but has no value yet. 'null' is assigned intentionally by the programmer to signify emptiness.",
      "'NaN' stands for 'Not a Number', but interestingly 'typeof NaN' is 'number'!",
      "Primitives are immutable and passed by value. Objects and arrays are non-primitive and passed by reference."
    ],
    commonMistakes: [
      {
        mistake: "Confusing string numbers with real numbers.",
        explanation: "'20' + 5 results in '205' (string concatenation), while '20' - 5 results in 15 (implicit type coercion).",
        fix: "Always convert strings to numbers using 'Number(str)' or 'parseInt(str, 10)' before mathematical operations."
      },
      {
        mistake: "Checking for null using typeof.",
        explanation: "Since 'typeof null === \"object\"', checking 'typeof x === \"null\"' will never be true!",
        fix: "Check directly using strict equality: 'x === null'."
      }
    ]
  },
  {
    id: 3,
    slug: "operators",
    title: "Operators (Arithmetic, Comparison & Logical)",
    badge: "Topic 03",
    icon: "divide",
    category: "Fundamentals",
    summary: "Explore Arithmetic (+ - * / % **), Comparison (> < >= <= === !==), and Logical (&& || !) operators with real-world decision making.",
    whatIsIt: "Operators are special symbols and keywords used to perform calculations, compare values, and evaluate logical conditions in code.",
    whyUseIt: "Operators power every decision, mathematical computation, and business logic condition in your software.",
    syntax: `// Arithmetic
+ (Add), - (Subtract), * (Multiply), / (Divide), % (Modulus/Remainder), ** (Exponent/Power)

// Comparison
=== (Strict Equal), !== (Strict Not Equal), == (Loose Equal), != (Loose Not Equal)
> (Greater than), < (Less than), >= (Greater or Equal), <= (Less or Equal)

// Logical
&& (AND - All must be true)
|| (OR - At least one must be true)
!  (NOT - Inverts boolean)`,
    codeExample: `// 1. Arithmetic Operators
const a = 10;
const b = 3;
console.log("Add:", a + b);        // 13
console.log("Subtract:", a - b);   // 7
console.log("Multiply:", a * b);   // 30
console.log("Divide:", a / b);     // 3.3333333333333335
console.log("Modulus (Remainder):", a % b); // 1
console.log("Power (10^3):", a ** b);      // 1000

// 2. Comparison Operators (Strict vs Loose)
console.log("5 == '5':", 5 == '5');     // true (Loose - checks value only)
console.log("5 === '5':", 5 === '5');   // false (Strict - checks value AND type)
console.log("10 !== 20:", 10 !== 20);   // true

// 3. Logical Operators in Real World
const age = 22;
const hasLicense = true;
const isDrunk = false;

// AND (&&): All conditions must be true
const canDrive = age >= 18 && hasLicense && !isDrunk;
console.log("Can person drive?", canDrive); // true

// OR (||): At least one condition must be true
const hasStudentPass = false;
const hasTicket = true;
const canEnter = hasStudentPass || hasTicket;
console.log("Can enter venue?", canEnter); // true`,
    expectedOutput: `Add: 13
Subtract: 7
Multiply: 30
Divide: 3.3333333333333335
Modulus (Remainder): 1
Power (10^3): 1000
5 == '5': true
5 === '5': false
10 !== 20: true
Can person drive? true
Can enter venue? true`,
    howItWorks: [
      "1. Arithmetic: '%' returns the remainder after integer division (e.g., 10 % 3 = 1 because 3 * 3 = 9 with 1 remaining).",
      "2. '**' calculates exponents (e.g., 2 ** 3 = 8).",
      "3. '===' (Strict Equality) checks BOTH the data type and the value without type conversion.",
      "4. '==' (Loose Equality) converts types behind the scenes before comparing (often causes subtle bugs).",
      "5. '&&' (Logical AND) evaluates left to right and returns true only if EVERY operand is truthy.",
      "6. '||' (Logical OR) returns true as soon as it encounters the FIRST truthy operand.",
      "7. '!' (Logical NOT) flips true to false and false to true."
    ],
    importantForTest: [
      "ALWAYS use '===' and '!==' instead of '==' and '!=' in modern JavaScript tests.",
      "Short-circuit evaluation: In 'A && B', if A is false, JavaScript stops immediately and never evaluates B.",
      "In 'A || B', if A is true, JavaScript stops immediately and never evaluates B.",
      "Falsy values in JavaScript: 'false', '0', '-0', '0n', '\"\"' (empty string), 'null', 'undefined', 'NaN'. Everything else is truthy!"
    ],
    commonMistakes: [
      {
        mistake: "Using '=' (assignment) instead of '===' (comparison) inside an if condition.",
        explanation: "Writing 'if (score = 100)' assigns 100 to score and always evaluates to true!",
        fix: "Always use triple equals 'if (score === 100)' for comparisons."
      },
      {
        mistake: "Confusing remainder (%) with division (/).",
        explanation: "10 / 2 is 5 (quotient), but 10 % 2 is 0 (remainder).",
        fix: "Use '%' to check for even/odd numbers: 'num % 2 === 0' means even."
      }
    ]
  },
  {
    id: 4,
    slug: "conditional-statements",
    title: "Conditional Statements — if, else if, else",
    badge: "Topic 04",
    icon: "git-branch",
    category: "Control Flow",
    summary: "Guide program flow using if, else if, and else blocks, multiple boolean conditions, nesting, and top-to-bottom evaluation logic.",
    whatIsIt: "Conditional statements allow your JavaScript program to make decisions and execute different code blocks depending on whether a given condition evaluates to true or false.",
    whyUseIt: "Real-world apps constantly need conditions (e.g. verifying user login, validating bank balances, checking if an item is in stock).",
    syntax: `if (condition1) {
    // Executes if condition1 is true
} else if (condition2) {
    // Executes if condition1 was false AND condition2 is true
} else {
    // Executes if all previous conditions were false
}`,
    codeExample: `// Example: Movie Ticket Pricing with Multi-Conditions
const age = 20;
const isStudent = true;

if (age < 0 || age > 120) {
    console.log("Invalid Age Entered");
} else if (age < 12) {
    console.log("Child Ticket: ₹100");
} else if (age >= 18 && isStudent) {
    console.log("Student Discount Applied: ₹150");
} else if (age >= 18) {
    console.log("Adult Standard Ticket: ₹250");
} else {
    console.log("Teen Ticket: ₹180");
}

// Basic Eligibility Check
const userAge = 20;
if (userAge >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}`,
    expectedOutput: `Student Discount Applied: ₹150
Eligible to Vote`,
    howItWorks: [
      "1. JavaScript evaluates 'if' conditions strictly from TOP to BOTTOM.",
      "2. The FIRST condition that evaluates to 'true' has its code block executed.",
      "3. Once a matching condition block executes, JavaScript skips all remaining 'else if' and 'else' branches.",
      "4. If none of the 'if' or 'else if' conditions are true, the default 'else' block runs.",
      "5. Conditions can be nested inside other condition blocks for multi-layered decision trees."
    ],
    importantForTest: [
      "The order of 'else if' conditions matters enormously! Always place more specific conditions (or boundary error checks) above broader conditions.",
      "The parenthesis '( )' around the condition are mandatory in JavaScript syntax.",
      "The 'else' block is optional — an 'if' statement can exist by itself.",
      "Logical operators (&&, ||, !) can combine multiple conditions inside a single 'if ( ... )'."
    ],
    commonMistakes: [
      {
        mistake: "Placing a broad condition before a specific condition.",
        explanation: "If you check 'if (score >= 50)' before 'else if (score >= 90)', someone with 95 will get matched into the '>= 50' block first!",
        fix: "Check highest/strictest criteria first: check '>= 90', then '>= 80', then '>= 50'."
      },
      {
        mistake: "Accidentally adding a semicolon right after the if condition.",
        explanation: "Writing 'if (age >= 18); { ... }' terminates the if statement immediately. The block will always run!",
        fix: "Never put a semicolon after 'if (condition)'."
      }
    ]
  },
  {
    id: 5,
    slug: "functions",
    title: "Functions — Declaration, Return & Scope",
    badge: "Topic 05",
    icon: "terminal",
    category: "Functions",
    summary: "Learn reusable code blocks, parameters vs arguments, return statements, function declarations, function expressions, and nested helper functions.",
    whatIsIt: "A function is a reusable, self-contained block of code designed to perform a specific task when called (invoked).",
    whyUseIt: "Functions eliminate code duplication (DRY: Don't Repeat Yourself), make code organized and modular, and make complex programs easy to test and debug.",
    syntax: `// 1. Function Declaration
function functionName(parameter1, parameter2) {
    // code to execute
    return result; // sends value back to caller
}

// 2. Calling (Invoking) the function
const output = functionName(argument1, argument2);`,
    codeExample: `// 1. Basic Function Declaration
function add(a, b) {
    return a + b; // returns the sum
}

const sumResult = add(10, 20); // 10 and 20 are arguments
console.log("Sum:", sumResult);

// 2. Reusable Function with Logic
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("8 is:", checkEvenOdd(8));
console.log("15 is:", checkEvenOdd(15));

// 3. Function inside another Function (Nested Function)
function calculateBill(price, taxRate) {
    function calculateTax(amount) {
        return amount * (taxRate / 100);
    }

    const taxAmount = calculateTax(price);
    const finalTotal = price + taxAmount;
    return finalTotal;
}

console.log("Total Bill (₹1000 + 18% Tax): ₹" + calculateBill(1000, 18));`,
    expectedOutput: `Sum: 30
8 is: Even
15 is: Odd
Total Bill (₹1000 + 18% Tax): ₹1180`,
    howItWorks: [
      "1. 'function' keyword tells JavaScript you are defining a new function.",
      "2. 'Parameters' are placeholder variable names listed in the function definition (e.g. 'a, b').",
      "3. 'Arguments' are the actual real values passed into the function when invoking it (e.g. '10, 20').",
      "4. 'return' statement stops the function's execution immediately and passes the resulting value back to whoever called the function.",
      "5. If a function does not have a 'return' statement, it automatically returns 'undefined'.",
      "6. Functions can be called multiple times with different arguments to perform the same logic cleanly."
    ],
    importantForTest: [
      "Difference between Parameter and Argument: Parameter = Variable in function definition. Argument = Actual value passed during function call.",
      "Function Declarations are 'hoisted' — you can call them before they appear in the code file.",
      "The 'return' statement immediately terminates function execution. Any code written below 'return' in the same block is unreachable code."
    ],
    commonMistakes: [
      {
        mistake: "Forgetting the 'return' keyword when a result is expected.",
        explanation: "If you write 'function add(a,b) { a + b; }', calling 'add(2,3)' produces 'undefined' because nothing was returned.",
        fix: "Always write 'return a + b;' when you need the computed output."
      },
      {
        mistake: "Confusing console.log() with return.",
        explanation: "'console.log()' prints text to the screen for humans to see; 'return' gives data back to JavaScript so it can be stored in variables.",
        fix: "Use 'return' when the caller needs to use the calculated value."
      }
    ]
  },
  {
    id: 6,
    slug: "arrow-functions",
    title: "Arrow Functions (ES6 Syntax & Callbacks)",
    badge: "Topic 06",
    icon: "arrow-right",
    category: "Functions",
    summary: "Master modern ES6 arrow functions, concise syntax, implicit vs explicit returns, single/multiple parameters, and callback usage in forEach.",
    whatIsIt: "Arrow functions (introduced in ES6) provide a cleaner, more concise syntax for writing JavaScript functions using the '=>' (fat arrow) operator.",
    whyUseIt: "They reduce boilerplate code, make one-line operations and array callbacks (like forEach, map, find) much cleaner to read and write.",
    syntax: `// Standard Arrow Function (Explicit Return)
const funcName = (param1, param2) => {
    return param1 + param2;
};

// One-line Arrow Function (Implicit Return)
const square = num => num * num;

// Zero parameters requires empty parenthesis
const greet = () => "Hello World";`,
    codeExample: `// 1. Normal Function vs Arrow Function
// Normal function
function addNormal(a, b) {
    return a + b;
}

// Arrow Function with Explicit Return
const addArrow = (a, b) => {
    return a + b;
};

// Arrow Function with Implicit Return (One liner)
const multiply = (a, b) => a * b;
const square = num => num * num; // Single param needs no parenthesis

console.log("Add Arrow:", addArrow(10, 20));
console.log("Multiply:", multiply(5, 6));
console.log("Square of 7:", square(7));

// 2. Arrow function with conditional logic
const checkEligibility = age => {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
};

console.log("Age 20:", checkEligibility(20));

// 3. Arrow function inside array callback (forEach)
const fruits = ["Apple", "Mango", "Banana"];
fruits.forEach((fruit, index) => {
    console.log(\`Item \${index + 1}: \${fruit}\`);
});`,
    expectedOutput: `Add Arrow: 30
Multiply: 30
Square of 7: 49
Age 20: Eligible
Item 1: Apple
Item 2: Mango
Item 3: Banana`,
    howItWorks: [
      "1. The 'function' keyword is omitted; you store the arrow function in a 'const' or 'let' variable.",
      "2. 'Explicit return': When using curly braces '{ ... }', you MUST write the 'return' keyword.",
      "3. 'Implicit return': When omitting curly braces for a single expression, the result is returned automatically.",
      "4. Single parameter: Parentheses around the parameter are optional (e.g. 'num => num * 2').",
      "5. Zero or Multiple parameters: Parentheses '( )' are strictly required (e.g. '() => ...' or '(a, b) => ...').",
      "6. Arrow functions do NOT bind their own 'this'; they lexically inherit 'this' from the enclosing scope."
    ],
    importantForTest: [
      "Implicit return trap: 'const add = (a, b) => { a + b };' returns 'undefined' because curly braces create a block body requiring an explicit 'return' keyword!",
      "To implicitly return an object literal, wrap it in parentheses: 'const getUser = () => ({ name: \"Surya\" });'.",
      "Arrow functions cannot be used as constructors (you cannot call 'new MyArrowFunc()')."
    ],
    commonMistakes: [
      {
        mistake: "Adding curly braces but forgetting the return statement in an arrow function.",
        explanation: "'const double = x => { x * 2 };' returns 'undefined'.",
        fix: "Either write 'const double = x => x * 2;' OR 'const double = x => { return x * 2; };'."
      },
      {
        mistake: "Trying to return an object literal without wrapping parentheses.",
        explanation: "'const makeObj = (k, v) => { key: k, val: v };' causes a SyntaxError because JS treats '{ }' as a function body, not an object.",
        fix: "Wrap with parentheses: 'const makeObj = (k, v) => ({ key: k, val: v });'."
      }
    ]
  },
  {
    id: 7,
    slug: "arrays",
    title: "Arrays & Built-in Array Methods",
    badge: "Topic 07",
    icon: "list",
    category: "Data Structures",
    summary: "Master zero-indexed lists, element mutation, push(), pop(), includes(), find(), findIndex(), map(), and forEach().",
    whatIsIt: "An Array is an ordered collection (list) of values stored in a single variable, accessed by numerical index positions starting at 0.",
    whyUseIt: "Arrays allow you to store and manage lists of data (like shopping cart items, student marks, car models) and iterate through them with powerful built-in methods.",
    syntax: `// Creating an Array
const numbers = [10, 20, 30, 40];

// Accessing & Mutating
const first = numbers[0]; // 10
numbers[1] = 25;          // [10, 25, 30, 40]

// Common Methods
numbers.push(value);     // Adds to end
numbers.pop();           // Removes from end
numbers.includes(val);   // Returns true/false
numbers.find(fn);        // Returns first matching element
numbers.findIndex(fn);   // Returns index of first match
numbers.map(fn);         // Returns new transformed array
numbers.forEach(fn);     // Executes callback for each item`,
    codeExample: `// 1. Array Basics & Mutation
const numbers = [10, 20, 30];
console.log("Original Array:", numbers);

numbers.push(40); // Add 40 to end
console.log("After push(40):", numbers);

const removedItem = numbers.pop(); // Removes last item
console.log("Popped Item:", removedItem);
console.log("After pop():", numbers);

// 2. Searching: includes(), find(), findIndex()
const scores = [45, 78, 88, 92, 60];

console.log("Includes 78?", scores.includes(78)); // true
console.log("Includes 100?", scores.includes(100)); // false

const topScore = scores.find(s => s >= 90);
console.log("First score >= 90:", topScore); // 92

const topIndex = scores.findIndex(s => s >= 90);
console.log("Index of top score:", topIndex); // 3

// 3. Transformation: map() vs forEach()
// map() creates a brand NEW array with transformed values
const doubled = numbers.map(num => num * 2);
console.log("Doubled Array (map):", doubled);

// forEach() simply loops through without creating a new array
console.log("--- forEach Iteration ---");
numbers.forEach((num, index) => {
    console.log(\`Index \${index} has value \${num}\`);
});`,
    expectedOutput: `Original Array: [ 10, 20, 30 ]
After push(40): [ 10, 20, 30, 40 ]
Popped Item: 40
After pop(): [ 10, 20, 30 ]
Includes 78? true
Includes 100? false
First score >= 90: 92
Index of top score: 3
Doubled Array (map): [ 20, 40, 60 ]
--- forEach Iteration ---
Index 0 has value 10
Index 1 has value 20
Index 2 has value 30`,
    howItWorks: [
      "1. JavaScript arrays are 0-indexed: the first item is at '[0]', second is at '[1]', and last is at '[arr.length - 1]'.",
      "2. 'push()' modifies (mutates) the original array by appending one or more items to the end and returns the new length.",
      "3. 'pop()' removes the last element from the array and returns that removed element.",
      "4. 'includes(value)' checks if a primitive value exists in the array and returns a boolean (true/false).",
      "5. 'find(callback)' returns the FIRST element that satisfies the test condition. If nothing matches, it returns 'undefined'.",
      "6. 'findIndex(callback)' returns the index of the first match, or '-1' if no match is found.",
      "7. 'map(callback)' returns a NEW array containing the result of calling the function on every item.",
      "8. 'forEach(callback)' executes the provided function for each item for side effects; it always returns 'undefined'."
    ],
    importantForTest: [
      "Key difference between map() and forEach(): 'map()' returns a NEW transformed array. 'forEach()' returns 'undefined' and only performs side effects.",
      "'find()' returns the single matching item value itself, whereas 'filter()' returns an array containing ALL matching items.",
      "Array indices outside bounds return 'undefined' instead of throwing an index out of bounds error.",
      "'arr.length' is always one greater than the highest zero-based index."
    ],
    commonMistakes: [
      {
        mistake: "Trying to assign the result of forEach() to a variable.",
        explanation: "Writing 'const result = arr.forEach(x => x * 2);' will set result to 'undefined'.",
        fix: "Use 'arr.map()' if you want to store the transformed array in a new variable."
      },
      {
        mistake: "Off-by-one errors when accessing the last item.",
        explanation: "Writing 'arr[arr.length]' is undefined because indexes range from 0 to 'arr.length - 1'.",
        fix: "Use 'arr[arr.length - 1]' or modern 'arr.at(-1)' to access the last element."
      }
    ]
  },
  {
    id: 8,
    slug: "objects",
    title: "Objects & Array of Objects",
    badge: "Topic 08",
    icon: "layers",
    category: "Data Structures",
    summary: "Understand key-value data structures, dot vs bracket notation, object mutation, arrays of objects, Object.keys(), Object.values(), and Object.entries().",
    whatIsIt: "An Object is an unordered collection of related data stored in key-value pairs representing properties and attributes of a real-world entity.",
    whyUseIt: "Objects structure complex, multi-attribute entities (like a User with name, age, email, and permissions) in a clean, descriptive format.",
    syntax: `// Single Object
const objectName = {
    key1: value1,
    key2: value2
};

// Accessing properties:
objectName.key1;      // Dot notation
objectName["key1"];   // Bracket notation

// Array of Objects:
const list = [
    { id: 1, name: "Item A" },
    { id: 2, name: "Item B" }
];`,
    codeExample: `// 1. Basic Object & Property Access
const student = {
    name: "Kumar",
    mark: 85,
    city: "Chennai"
};

console.log("Student Name (Dot notation):", student.name);
console.log("Student Mark (Bracket notation):", student["mark"]);

// Modifying and Adding Properties
student.mark = 90;           // Update
student.passed = true;       // Add new property
console.log("Updated Student:", student);

// 2. Array of Objects (Real-world Data Pattern)
const students = [
    { name: "Kumar", mark: 85 },
    { name: "Kavitha", mark: 92 },
    { name: "Suresh", mark: 58 }
];

console.log("--- Iterating Array of Objects ---");
students.forEach(std => {
    console.log(\`Student: \${std.name} | Mark: \${std.mark}\`);
});

// 3. Object Utility Methods
const user = { username: "surya24", role: "admin", active: true };
console.log("Keys:", Object.keys(user));       // Array of property names
console.log("Values:", Object.values(user));   // Array of property values
console.log("Entries:", Object.entries(user)); // Array of [key, value] pairs`,
    expectedOutput: `Student Name (Dot notation): Kumar
Student Mark (Bracket notation): 85
Updated Student: { name: 'Kumar', mark: 90, city: 'Chennai', passed: true }
--- Iterating Array of Objects ---
Student: Kumar | Mark: 85
Student: Kavitha | Mark: 92
Student: Suresh | Mark: 58
Keys: [ 'username', 'role', 'active' ]
Values: [ 'surya24', 'admin', true ]
Entries: [ [ 'username', 'surya24' ], [ 'role', 'admin' ], [ 'active', true ] ]`,
    howItWorks: [
      "1. An object consists of '{ key: value }' pairs separated by commas.",
      "2. Dot notation ('obj.name') is standard when you know the literal property name in advance.",
      "3. Bracket notation ('obj[keyName]') is mandatory when the property name is stored in a dynamic variable or contains special characters/spaces.",
      "4. Array of Objects represents a list of records (like a database table where each row is an object and each column is a key).",
      "5. 'Object.keys(obj)' extracts an array of all string property keys.",
      "6. 'Object.values(obj)' extracts an array of all values.",
      "7. 'Object.entries(obj)' extracts an array of nested '[key, value]' pairs."
    ],
    visualDiagram: `Data Hierarchy in JavaScript:
Array (Container list of records)
  ↓
Object (Individual entity)
  ↓
Property / Key (Attribute name)
  ↓
Value (Data content: string, number, boolean)`,
    importantForTest: [
      "Accessing a non-existent property on an object does not throw an error; it simply evaluates to 'undefined'.",
      "Bracket notation allows dynamic lookup: if 'const prop = \"age\"', 'person[prop]' reads the 'age' property.",
      "Objects are reference types: comparing two separate objects '{ a: 1 } === { a: 1 }' returns 'false' because they point to different memory addresses!"
    ],
    commonMistakes: [
      {
        mistake: "Using dot notation with a variable name.",
        explanation: "If 'const key = \"name\"', writing 'student.key' looks for a literal property named 'key' (which is undefined), not 'student.name'.",
        fix: "Use bracket notation when using variable property names: 'student[key]'."
      },
      {
        mistake: "Trying to read properties on undefined or null.",
        explanation: "Doing 'student.address.street' when 'address' is undefined causes 'TypeError: Cannot read properties of undefined'.",
        fix: "Use optional chaining '?.' like 'student.address?.street'."
      }
    ]
  },
  {
    id: 9,
    slug: "destructuring-spread-rest",
    title: "Destructuring, Spread & Rest Operators",
    badge: "Topic 09",
    icon: "maximize-2",
    category: "Modern ES6+",
    summary: "Unpack arrays and objects with destructuring, expand elements with Spread (...), and collect variable arguments with Rest (...).",
    whatIsIt: "Destructuring unpacks values from arrays or objects into distinct variables. The '...' operator either EXPANDS iterable elements (Spread) or COLLECTS multiple elements into an array (Rest).",
    whyUseIt: "Modern JavaScript relies heavily on these features to write clean, concise, immutable code without repetitive property assignments.",
    syntax: `// Array Destructuring
const [first, second] = array;

// Object Destructuring
const { key1, key2 } = object;

// Spread Operator (Expand into individual items)
const merged = [...arr1, ...arr2];
const cloneObj = { ...originalObj, newProp: value };

// Rest Parameter (Collect remaining items into an array)
const func = (first, ...remaining) => { ... };`,
    codeExample: `// 1. Array Destructuring
const colors = ["Red", "Green", "Blue", "Yellow"];
const [primary, secondary, third] = colors;
console.log("Primary:", primary);     // "Red"
console.log("Secondary:", secondary); // "Green"

// 2. Object Destructuring
const student = {
    name: "Surya",
    mark: 90,
    course: "JavaScript"
};
// Extract name and mark directly
const { name, mark } = student;
console.log(\`Student: \${name}, Score: \${mark}\`);

// 3. Spread Operator (Expand / Copy / Merge)
const numbers1 = [10, 20];
const numbers2 = [...numbers1, 30, 40]; // Expands numbers1
console.log("Spread Array:", numbers2); // [10, 20, 30, 40]

const baseUser = { id: 101, role: "member" };
const fullProfile = { ...baseUser, name: "Surya", active: true };
console.log("Spread Object:", fullProfile);

// 4. Rest Parameter (Collect arguments into array)
const addAll = (...numbers) => {
    // numbers is now a real array containing all passed arguments
    let sum = 0;
    numbers.forEach(n => sum += n);
    return sum;
};

console.log("Rest Sum (10, 20):", addAll(10, 20));
console.log("Rest Sum (1, 2, 3, 4, 5):", addAll(1, 2, 3, 4, 5));`,
    expectedOutput: `Primary: Red
Secondary: Green
Student: Surya, Score: 90
Spread Array: [ 10, 20, 30, 40 ]
Spread Object: { id: 101, role: 'member', name: 'Surya', active: true }
Rest Sum (10, 20): 30
Rest Sum (1, 2, 3, 4, 5): 15`,
    howItWorks: [
      "1. Array Destructuring matches by POSITION (index 0 maps to the first variable name, index 1 to the second).",
      "2. Object Destructuring matches by PROPERTY NAME (the variable name must match the key name inside the object).",
      "3. Spread ('...'): Takes an array or object and 'spreads out' / unpacks its elements into a new container.",
      "4. Rest ('...'): Placed in function parameters or destructuring patterns to 'gather / collect' multiple values into a single array.",
      "5. Memory Rule: Spread = Expand (Unpack items), Rest = Collect (Pack items together)."
    ],
    visualDiagram: `Memory Mnemonic:
Spread (...)  →  EXPAND   (Unpacks array into separate values)
                 [ ...[1, 2], 3 ]  ==>  [ 1, 2, 3 ]

Rest   (...)  →  COLLECT  (Bundles multiple values into one array)
                 fn(1, 2, 3) where fn(...nums) ==> nums = [1, 2, 3]`,
    importantForTest: [
      "Object destructuring requires exact key names: '{ age } = { name: \"Surya\" }' results in 'age = undefined'.",
      "You can rename during object destructuring: '{ name: fullName } = student;' stores value in variable 'fullName'.",
      "Rest parameter must ALWAYS be the LAST parameter in a function definition: '(a, ...rest)' is valid; '(...rest, a)' throws a SyntaxError.",
      "Spread creates a shallow copy, not a deep copy."
    ],
    commonMistakes: [
      {
        mistake: "Placing a rest parameter before regular parameters.",
        explanation: "Writing 'function test(...all, last) {}' throws 'SyntaxError: Rest parameter must be last formal parameter'.",
        fix: "Always put the rest parameter at the end: 'function test(first, ...rest) {}'."
      },
      {
        mistake: "Confusing Spread with Rest.",
        explanation: "Both use three dots '...', but their purpose is opposite based on where they appear.",
        fix: "If it's inside function argument definitions or left of '=', it's REST (collecting). If it's inside array literals '[]', object literals '{}', or function call arguments, it's SPREAD (expanding)."
      }
    ]
  },
  {
    id: 10,
    slug: "classes",
    title: "Classes & Object-Oriented Programming (OOP)",
    badge: "Topic 10",
    icon: "box",
    category: "Object Oriented",
    summary: "Understand classes as object blueprints, the constructor method, the 'this' keyword, class methods, and creating instances with 'new'.",
    whatIsIt: "A Class (introduced in ES6) is a blueprint or template for creating multiple objects that share the same properties and methods.",
    whyUseIt: "Classes enable Object-Oriented Programming (OOP), allowing you to model real-world concepts (like Bank Accounts, Users, Products) with structured data and behaviors in a clean, reusable architecture.",
    syntax: `class ClassName {
    // 1. Constructor runs automatically when object is created
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    // 2. Class Method
    methodName() {
        console.log(this.property1);
    }
}

// 3. Instantiate object using 'new'
const instance = new ClassName(value1, value2);
instance.methodName();`,
    codeExample: `// Example: Student Class Blueprint
class Student {
    // Constructor initializes object properties
    constructor(name, mark) {
        this.name = name; // 'this' points to the newly created instance
        this.mark = mark;
    }

    // Class Method
    display() {
        console.log(\`Student: \${this.name} | Mark: \${this.mark}\`);
    }

    // Method with conditional logic
    getGrade() {
        if (this.mark >= 90) return "Grade A";
        if (this.mark >= 75) return "Grade B";
        if (this.mark >= 50) return "Grade C";
        return "Grade F";
    }
}

// Creating multiple unique instances using 'new'
const student1 = new Student("Surya", 90);
const student2 = new Student("Kavitha", 82);

student1.display();
console.log("Surya Result:", student1.getGrade());

student2.display();
console.log("Kavitha Result:", student2.getGrade());`,
    expectedOutput: `Student: Surya | Mark: 90
Surya Result: Grade A
Student: Kavitha | Mark: 82
Kavitha Result: Grade B`,
    howItWorks: [
      "1. 'class': Declares the blueprint class definition.",
      "2. 'constructor()': A special lifecycle method that executes automatically the moment a new object is created with 'new'.",
      "3. 'this': A keyword that refers to the specific instance of the object being created or operated upon.",
      "4. 'new': The operator that allocates a new empty object in memory, sets its prototype to the class, and calls the constructor.",
      "5. 'Methods': Functions defined inside the class body that all instances of the class can call."
    ],
    importantForTest: [
      "Unlike function declarations, JavaScript Classes are NOT hoisted! You must declare a class before instantiating it with 'new'.",
      "Calling a class without the 'new' keyword (e.g. 'Student(\"Surya\", 90)') throws a 'TypeError: Class constructor cannot be invoked without 'new''.",
      "Methods inside classes do not need the 'function' keyword.",
      "Every instance created from the same class has its own separate copy of property values stored in memory."
    ],
    commonMistakes: [
      {
        mistake: "Forgetting the 'this.' prefix inside the constructor or methods.",
        explanation: "Writing 'name = name;' instead of 'this.name = name;' sets a local variable and fails to attach the property to the object instance.",
        fix: "Always prefix instance properties with 'this.propertyName = ...'."
      },
      {
        mistake: "Adding commas between class methods.",
        explanation: "Writing commas ',' between methods inside a class (like in object literals) causes a SyntaxError.",
        fix: "Do not put commas between class methods."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { topicsData };
}
