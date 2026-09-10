/**
 * JavaScript Learning & Logic Lab - 10 Logical Practice Questions Data
 * Source of Truth: index.js
 */

const questionsData = [
  // ==========================================================================
  // 🔴 HARD QUESTIONS (1 to 5)
  // ==========================================================================

  // HARD 1: Bank Account System
  {
    id: 1,
    slug: "bank-account-system",
    numberStr: "01",
    title: "Bank Account System",
    difficulty: "Hard",
    difficultyBadge: "🔴 Hard",
    category: "Banking & OOP",
    concepts: ["Class", "Constructor", "this", "Object", "Arrow Function", "Nested Functions", "const", "let", "if / else", "Comparison Operator"],
    summary: "Simulate a real-world SBI Bank Account system with object instantiation, balance checking, deposit validation, and withdrawal constraints.",
    problemStatement: "Create a realistic beginner-level Bank Account System using an ES6 Class blueprint. Instantiate an account object and pass it into a controller arrow function that manages balance inquiries, deposits with positive value validation, and withdrawals with overdraft prevention.",
    scenario: "Customer Sarath opens an SBI bank account with an initial balance of ₹45,000. He checks his balance, deposits ₹12,000, attempts to withdraw ₹3,500, and verifies his final updated balance.",
    givenData: `// Class Blueprint and Initial Customer Object
class SBIbankaccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
}

const account = new SBIbankaccount("Sarath", 45000);`,
    rules: [
      "1. Check Balance: Displays current balance in format: 'Current Balance : ₹<balance>'",
      "2. Deposit Rule: Amount must be greater than 0 ('amount > 0'). If valid, add to balance and log 'Deposite : ₹ <amount>'. Otherwise log 'Invalid Deposite Amount'.",
      "3. Withdrawal Rule: Amount must be less than or equal to balance ('amount <= account.balance'). If valid, subtract from balance and log 'Withraw : ₹ <amount>'. Otherwise log 'Insufficient Balance'.",
      "4. Operations sequence: Check initial balance -> Deposit ₹12,000 -> Withdraw ₹3,500 -> Check final balance."
    ],
    sourceCode: `// 1. Bank Account System — Classes & Nested Arrow Functions
class SBIbankaccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
}

const bankSystem = (account) => {
    // Nested function: Check balance
    const checkBalance = () => {
        console.log(\`Current Balance : ₹\${account.balance} \`);
    };

    // Nested function: Deposit amount
    const deposit = (amount) => {
        if (amount > 0) {
            account.balance += amount;
            console.log(\`Deposite : ₹ \${amount}\`);
        } else {
            console.log("Invalid Deposite Amount");
        }
    };

    // Nested function: Withdraw amount
    const withraw = (amount) => {
        if (amount <= account.balance) {
            account.balance -= amount;
            console.log(\`Withraw : ₹ \${amount}\`);
        } else {
            console.log("Insufficient Balance");
        }
    };

    // Execute operations
    checkBalance();
    deposit(12000);
    withraw(3500);
    checkBalance();
};

const account = new SBIbankaccount("Sarath", 45000);
bankSystem(account);`,
    expectedOutput: `Current Balance : ₹45000 
Deposite : ₹ 12000
Withraw : ₹ 3500
Current Balance : ₹53500 `,
    stepByStepExplanation: [
      "Step 1 → Class 'SBIbankaccount' acts as a blueprint. Its constructor assigns 'this.name' and 'this.balance'.",
      "Step 2 → 'const account = new SBIbankaccount(\"Sarath\", 45000)' instantiates a new account object with ₹45,000.",
      "Step 3 → 'bankSystem(account)' arrow function receives the object reference. In JavaScript, objects are passed by reference, so balance updates directly mutate the account.",
      "Step 4 → 'checkBalance()' runs first and displays initial balance: ₹45,000.",
      "Step 5 → 'deposit(12000)' checks if 12000 > 0 (true), adds to balance (₹57,000), and logs 'Deposite : ₹ 12000'.",
      "Step 6 → 'withraw(3500)' checks if 3500 <= 57000 (true), subtracts from balance (₹53,500), and logs 'Withraw : ₹ 3500'.",
      "Step 7 → Final 'checkBalance()' logs the updated balance of ₹53,500."
    ],
    keyTakeaways: [
      "Classes provide a clean blueprint for creating multiple independent account objects.",
      "JavaScript objects are passed by reference, allowing nested helper functions to mutate object state directly.",
      "Always validate numeric constraints (amount > 0 and amount <= balance) before mutating state."
    ]
  },

  // HARD 2: Online Shopping Cart
  {
    id: 2,
    slug: "online-shopping-cart",
    numberStr: "02",
    title: "Online Shopping Cart",
    difficulty: "Hard",
    difficultyBadge: "🔴 Hard",
    category: "E-Commerce & Arrays",
    concepts: ["Array of Objects", "Arrow Function", "find()", "forEach()", "const", "let", "if / else", "Comparison Operator"],
    summary: "Simulate an e-commerce checkout engine with catalog lookup using .find(), inventory stock validation, subtotal calculation, and threshold discounts.",
    problemStatement: "Create an Online Shopping Cart logical program. Use an array of product objects and a cart array. Find each product using '.find()', check stock availability, calculate item price, calculate order total, apply a 10% discount if total is ₹50,000 or more, and display the final amount.",
    scenario: "A customer adds 2 Laptops, 3 Mouses, and 1 Keyboard to their cart. Warehouse stock has 5 Laptops (₹50,000 each), 10 Mouses (₹1,000 each), and 0 Keyboards (₹2,000 each). Process the cart, report out-of-stock items, compute subtotal, apply discount, and output final bill.",
    givenData: `const products = [
    { id: 1, name: "Laptop", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", price: 1000, stock: 10 },
    { id: 3, name: "Keyboard", price: 2000, stock: 0 }
];

const cart = [
    { productId: 1, quantity: 2 },
    { productId: 2, quantity: 3 },
    { productId: 3, quantity: 1 }
];`,
    rules: [
      "1. Find Product: Use 'products.find(p => p.id === item.productId)' to search product catalog.",
      "2. Product Not Found: If 'product === undefined', log 'Product Not Found'.",
      "3. Out of Stock: If 'product.stock === 0', log '<product.name> is Out of Stock'.",
      "4. Not Enough Stock: If 'item.quantity > product.stock', log 'Not Enough Stock: <product.name>'.",
      "5. Valid Item: Calculate 'price = product.price * item.quantity', add to running 'total', and log '<product.name> Total: <price>'.",
      "6. Discount Rule: If 'total >= 50000', apply 10% discount ('discount = total * 0.10'). Otherwise discount is 0.",
      "7. Final Bill: 'finalAmount = total - discount'."
    ],
    sourceCode: `// 2. Online Shopping Cart — Array of Objects & .find()
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        stock: 5
    },
    {
        id: 2,
        name: "Mouse",
        price: 1000,
        stock: 10
    },
    {
        id: 3,
        name: "Keyboard",
        price: 2000,
        stock: 0
    }
];

const cart = [
    {
        productId: 1,
        quantity: 2
    },
    {
        productId: 2,
        quantity: 3
    },
    {
        productId: 3,
        quantity: 1
    }
];

const shoppingSystem = () => {
    let total = 0;

    const findProduct = (id) => {
        return products.find(product =>
            product.id === id
        );
    };

    const calculatePrice = (product, quantity) => {
        return product.price * quantity;
    };

    cart.forEach(item => {
        const product = findProduct(item.productId);

        if (product === undefined) {
            console.log("Product Not Found");
        }
        else if (product.stock === 0) {
            console.log(product.name, "is Out of Stock");
        }
        else if (item.quantity > product.stock) {
            console.log("Not Enough Stock:", product.name);
        }
        else {
            const price = calculatePrice(product, item.quantity);
            total += price;
            console.log(product.name, "Total:", price);
        }
    });

    let discount = 0;

    if (total >= 50000) {
        discount = total * 0.10;
    }

    const finalAmount = total - discount;

    console.log("Total:", total);
    console.log("Discount:", discount);
    console.log("Final Amount:", finalAmount);
};

shoppingSystem();`,
    expectedOutput: `Laptop Total: 100000
Mouse Total: 3000
Keyboard is Out of Stock
Total: 103000
Discount: 10300
Final Amount: 92700`,
    stepByStepExplanation: [
      "Step 1 → Array 'cart' stores the customer's items to buy with 'productId' and 'quantity'.",
      "Step 2 → 'cart.forEach()' takes one cart item at a time and calls 'findProduct(item.productId)'.",
      "Step 3 → '.find()' searches the 'products' catalog and returns the product matching that ID.",
      "Step 4 → If product is found and has available stock, 'calculatePrice()' multiplies unit price by quantity and adds it to 'total'.",
      "Step 5 → For Keyboard (stock 0), 'product.stock === 0' is true -> logs 'Keyboard is Out of Stock' and adds ₹0 to total.",
      "Step 6 → Order total is ₹103,000. Since 'total >= 50000', 10% discount = ₹10,300.",
      "Step 7 → Final amount = 103000 - 10300 = ₹92,700."
    ],
    keyTakeaways: [
      "Use '.find()' when looking up a single unique record by identifier in an array of objects.",
      "Always check if a product is undefined before accessing properties like 'product.stock' to prevent runtime crashes.",
      "Modular helper functions like 'findProduct' and 'calculatePrice' make business logic clean and maintainable."
    ]
  },

  // HARD 3: ATM Withdrawal System
  {
    id: 3,
    slug: "atm-withdrawal-system",
    numberStr: "03",
    title: "ATM Withdrawal System",
    difficulty: "Hard",
    difficultyBadge: "🔴 Hard",
    category: "Security & Validation",
    concepts: ["Object", "Arrow Function", "const", "let", "if / else if / else", "===", "&&", "Comparison Operator", "Logical NOT (!)"],
    summary: "Implement a secure ATM transaction validator with multi-stage guard clauses: account status check, PIN verification, amount validation, and overdraft prevention.",
    problemStatement: "Create an ATM withdrawal logical program. Check: 1) Account active or not, 2) PIN correct or not, 3) Withdrawal amount valid (> 0) or not, 4) Sufficient balance or not, and 5) Perform successful withdrawal.",
    scenario: "Customer Surya has an active bank account with PIN 4578 and balance ₹50,000. He enters PIN 4578 and attempts to withdraw ₹7,540.",
    givenData: `const account = {
    name: "Surya",
    pin: 4578,
    balance: 50000,
    active: true
};

const enteredPin = 4578;
const withdrawAmount = 7540;`,
    rules: [
      "1. Account Status Guard: If '!account.active', log 'Account is inactive'.",
      "2. PIN Authentication: If 'account.pin !== enteredPin', log 'Incorrect PIN'.",
      "3. Amount Validation: If 'withdrawAmount <= 0', log 'Invalid Amount'.",
      "4. Overdraft Prevention: If 'withdrawAmount > account.balance', log 'Insufficient Balance'.",
      "5. Success: Subtract amount from balance, log 'Withdrawal Successful' and 'Remaining Balance: <remainingBalance>'."
    ],
    sourceCode: `// 3. ATM Withdrawal System — Multi-Level Security Guards
const account = {
    name: "Surya",
    pin: 4578,
    balance: 50000,
    active: true
};

const atm = (enteredPin, withdrawAmount) => {
    let remainingBalance;

    if (!account.active) {
        console.log("Account is inactive");
    }
    else if (account.pin !== enteredPin) {
        console.log("Incorrect PIN");
    }
    else if (withdrawAmount <= 0) {
        console.log("Invalid Amount");
    }
    else if (withdrawAmount > account.balance) {
        console.log("Insufficient Balance");
    }
    else {
        remainingBalance = account.balance - withdrawAmount;

        console.log("Withdrawal Successful");
        console.log("Remaining Balance:", remainingBalance);
    }
};

const enteredPin = 4578;
const withdrawAmount = 7540;
atm(enteredPin, withdrawAmount);`,
    expectedOutput: `Withdrawal Successful
Remaining Balance: 42460`,
    stepByStepExplanation: [
      "Step 1 → Check 1 (!account.active): Verifies account status first. If account is locked/inactive, all transactions halt immediately.",
      "Step 2 → Check 2 (account.pin !== enteredPin): Authenticates the user's PIN using strict inequality (!==).",
      "Step 3 → Check 3 (withdrawAmount <= 0): Validates that the requested amount is a positive number.",
      "Step 4 → Check 4 (withdrawAmount > account.balance): Ensures the withdrawal does not exceed available funds.",
      "Step 5 → Success branch (else): Deducts ₹7,540 from ₹50,000 to compute remaining balance of ₹42,460 and logs success."
    ],
    keyTakeaways: [
      "Security checks must always be performed before processing money (Account Active -> PIN -> Amount -> Balance).",
      "'!account.active' uses the logical NOT operator to cleanly test for false boolean flags.",
      "Strict equality and inequality ('===' and '!==') prevent loose type-coercion bugs during authentication."
    ]
  },

  // HARD 4: Bank Loan Eligibility
  {
    id: 4,
    slug: "bank-loan-eligibility",
    numberStr: "04",
    title: "Bank Loan Eligibility",
    difficulty: "Hard",
    difficultyBadge: "🔴 Hard",
    category: "Financial Logic & Logical AND",
    concepts: ["Array of Objects", "Arrow Function", "forEach()", "const", "let", "if / else", "&&", "===", "Comparison Operator"],
    summary: "Evaluate financial loan criteria across multiple applicants using strict compound logical AND (&&) conditions across age, salary, credit score, and active status.",
    problemStatement: "Create an array of customer objects. Evaluate each customer for loan approval. A loan is approved ONLY IF: Age >= 21 AND Salary >= ₹30,000 AND Credit Score >= 700 AND Account is Active (active === true). Use '&&' with an arrow function and forEach().",
    scenario: "Process loan applications for Arun (age 25, salary ₹45,000, credit 750, active), Surya (age 24, salary ₹65,000, credit 700, active), and Swetha (age 23, salary ₹77,000, credit 800, inactive).",
    givenData: `const customer = [
    {
        name: "Arun",
        age: 25,
        salary: 45000,
        creditScore: 750,
        active: true
    },
    {
        name: "Surya",
        age: 24,
        salary: 65000,
        creditScore: 700,
        active: true
    },
    {
        name: "Swetha",
        age: 23,
        salary: 77000,
        creditScore: 800,
        active: false
    }
];`,
    rules: [
      "All 4 conditions must be true simultaneously using '&&':",
      "1. customer.age >= 21",
      "2. customer.salary >= 30000",
      "3. customer.creditScore >= 700",
      "4. customer.active === true",
      "If all are met -> 'Approved', otherwise -> 'Rejected'."
    ],
    sourceCode: `// 4. Bank Loan Eligibility — Compound Logical AND (&&)
const customer = [
    {
        name: "Arun",
        age: 25,
        salary: 45000,
        creditScore: 750,
        active: true
    },
    {
        name: "Surya",
        age: 24,
        salary: 65000,
        creditScore: 700,
        active: true
    },
    {
        name: "Swetha",
        age: 23,
        salary: 77000,
        creditScore: 800,
        active: false
    }
];

const checkLoan = (customer) => {
    let status;

    if (
        customer.age >= 21 &&
        customer.salary >= 30000 &&
        customer.creditScore >= 700 &&
        customer.active === true
    ) {
        status = "Approved";
    }
    else {
        status = "Rejected";
    }

    console.log("Customer:", customer.name);
    console.log("Loan Status:", status);
    console.log("----------------");
};

customer.forEach(checkLoan);`,
    expectedOutput: `Customer: Arun
Loan Status: Approved
----------------
Customer: Surya
Loan Status: Approved
----------------
Customer: Swetha
Loan Status: Rejected
----------------`,
    stepByStepExplanation: [
      "Step 1 → 'customer.forEach(checkLoan)' takes one customer object at a time and calls 'checkLoan'.",
      "Step 2 → Arun (Age 25 >= 21: T, Salary 45k >= 30k: T, Credit 750 >= 700: T, Active true: T) -> All 4 are true -> Status: 'Approved'.",
      "Step 3 → Surya (Age 24 >= 21: T, Salary 65k >= 30k: T, Credit 700 >= 700: T, Active true: T) -> All 4 are true -> Status: 'Approved'.",
      "Step 4 → Swetha (Age 23: T, Salary 77k: T, Credit 800: T, Active false: F) -> Fourth check fails -> Status: 'Rejected'.",
      "Step 5 → Each customer's evaluation result is printed to the console."
    ],
    keyTakeaways: [
      "Logical AND ('&&') evaluates to true ONLY if every single condition in the chain is true.",
      "JavaScript uses short-circuiting: as soon as any condition is false, evaluation stops immediately.",
      "Passing a named arrow function ('checkLoan') to '.forEach()' keeps code clean, modular, and readable."
    ]
  },

  // HARD 5: Student Result System
  {
    id: 5,
    slug: "student-result-system",
    numberStr: "05",
    title: "Student Result System",
    difficulty: "Hard",
    difficultyBadge: "🔴 Hard",
    category: "Grading & Arrays",
    concepts: ["Array of Objects", "Arrow Function", "forEach()", "const", "let", "if / else if / else", "||", "Comparison Operator"],
    summary: "Process a cohort of student mark records with forEach iteration, boundary validation, tiered grading scale (A, B, C, D, F), and pass/fail determination.",
    problemStatement: "Create an array of student objects. Use 'forEach()' with an arrow function to calculate student grades and results. Validate marks (< 0 or > 100 is invalid). Assign Grade A (90-100), B (80-89), C (70-79), D (50-69), or F (below 50).",
    scenario: "Process examination results for 5 students: Kumar (98), Karthick (76), Kavitha (65), Suresh (58), and Swetha (84).",
    givenData: `const student = [
    { name: "Kumar", mark: 98 },
    { name: "Karthick", mark: 76 },
    { name: "Kavitha", mark: 65 },
    { name: "Suresh", mark: 58 },
    { name: "Swetha", mark: 84 }
];`,
    rules: [
      "1. Invalid Mark: 'student.mark < 0 || student.mark > 100' -> log 'Invalid Mark' and return early.",
      "2. 90 to 100 -> Grade: 'A', Result: 'Pass'",
      "3. 80 to 89  -> Grade: 'B', Result: 'Pass'",
      "4. 70 to 79  -> Grade: 'C', Result: 'Pass'",
      "5. 50 to 69  -> Grade: 'D', Result: 'Pass'",
      "6. Below 50  -> Grade: 'F', Result: 'Fail'"
    ],
    sourceCode: `// 5. Student Result System — Multi-Tier Grading
const student = [
    {
        name: "Kumar",
        mark: 98
    },
    {
        name: "Karthick",
        mark: 76
    },
    {
        name: "Kavitha",
        mark: 65
    },
    {
        name: "Suresh",
        mark: 58
    },
    {
        name: "Swetha",
        mark: 84
    }
];

const checkResult = (student) => {
    let grade;
    let result;

    if (student.mark < 0 || student.mark > 100) {
        console.log("Invalid Mark");
        return;
    }
    else if (student.mark >= 90) {
        grade = "A";
        result = "Pass";
    }
    else if (student.mark >= 80) {
        grade = "B";
        result = "Pass";
    }
    else if (student.mark >= 70) {
        grade = "C";
        result = "Pass";
    }
    else if (student.mark >= 50) {
        grade = "D";
        result = "Pass";
    }
    else {
        grade = "F";
        result = "Fail";
    }

    console.log("Student:", student.name);
    console.log("Mark:", student.mark);
    console.log("Grade:", grade);
    console.log("Result:", result);
    console.log("----------------");
};

student.forEach(checkResult);`,
    expectedOutput: `Student: Kumar
Mark: 98
Grade: A
Result: Pass
----------------
Student: Karthick
Mark: 76
Grade: C
Result: Pass
----------------
Student: Kavitha
Mark: 65
Grade: D
Result: Pass
----------------
Student: Suresh
Mark: 58
Grade: D
Result: Pass
----------------
Student: Swetha
Mark: 84
Grade: B
Result: Pass
----------------`,
    stepByStepExplanation: [
      "Step 1 → 'student' array stores student objects containing student names and test marks.",
      "Step 2 → 'student.forEach(checkResult)' loops through each student object and passes it to 'checkResult'.",
      "Step 3 → Guard condition checks if mark is outside 0-100 using '||' and returns immediately if invalid.",
      "Step 4 → If valid, 'if / else if' evaluates grade ranges in descending order (>= 90, >= 80, >= 70, >= 50, else).",
      "Step 5 → Letter grade ('A' to 'F') and result ('Pass'/'Fail') are assigned and logged for each student."
    ],
    keyTakeaways: [
      "Descending numeric conditions ensure high scores match their correct bracket first without redundant lower-bound checks.",
      "Early returns ('return;') exit function execution immediately to handle invalid inputs safely.",
      "'student.forEach(checkResult)' passes each item reference automatically without needing index counters."
    ]
  },

  // ==========================================================================
  // 🟢 EASY QUESTIONS (6 to 10)
  // ==========================================================================

  // EASY 1: Weather Checker
  {
    id: 6,
    slug: "weather-checker",
    numberStr: "01",
    title: "Weather Checker",
    difficulty: "Easy",
    difficultyBadge: "🟢 Easy",
    category: "Conditions & Logical OR",
    concepts: ["Array of Objects", "Arrow Function", "forEach()", "let", "const", "if / else if / else", "||", "Comparison Operator"],
    summary: "Categorize city temperature readings into weather classifications (Very Hot, Normal, Cool, Cold) with boundary error validation using ||.",
    problemStatement: "Create an array of city objects. Use an arrow function with 'forEach()' to classify weather based on temperature ranges: >= 35 is Very Hot, >= 25 is Normal, >= 15 is Cool, and < 15 is Cold. Validate invalid temperatures (> 50 or < -10).",
    scenario: "Check current weather classification across three Tamil Nadu cities: Chennai (32°C), Kovai (48°C), and Tenkasi (28°C).",
    givenData: `const weather = [
    { city: "Chennai", temperature: 32 },
    { city: "Kovai", temperature: 48 },
    { city: "Tenkasi", temperature: 28 }
];`,
    rules: [
      "1. Invalid Range: 'temperature > 50 || temperature < -10' -> 'Invalid Temperature'",
      "2. Very Hot: 'temperature >= 35' -> 'Very Hot'",
      "3. Normal: 'temperature >= 25' -> 'Normal'",
      "4. Cool: 'temperature >= 15' -> 'Cool'",
      "5. Cold: Otherwise (< 15) -> 'Cold'"
    ],
    sourceCode: `// 6. Weather Checker — Temperature Ranges & Logical OR (||)
const weather = [
    {
        city: "Chennai",
        temperature: 32
    },
    {
        city: "Kovai",
        temperature: 48
    },
    {
        city: "Tenkasi",
        temperature: 28
    }
];

const checkWeather = (weather) => {
    let message;

    if (weather.temperature > 50 || weather.temperature < -10) {
        message = "Invalid Temperature";
    }
    else if (weather.temperature >= 35) {
        message = "Very Hot";
    }
    else if (weather.temperature >= 25) {
        message = "Normal";
    }
    else if (weather.temperature >= 15) {
        message = "Cool";
    }
    else {
        message = "Cold";
    }

    console.log("City:", weather.city);
    console.log("Temperature:", weather.temperature);
    console.log("Weather:", message);
    console.log("------------------");
};

weather.forEach(checkWeather);`,
    expectedOutput: `City: Chennai
Temperature: 32
Weather: Normal
------------------
City: Kovai
Temperature: 48
Weather: Very Hot
------------------
City: Tenkasi
Temperature: 28
Weather: Normal
------------------`,
    stepByStepExplanation: [
      "Step 1 → Array 'weather' stores city objects with city names and temperature values.",
      "Step 2 → 'weather.forEach(checkWeather)' passes each city object into the 'checkWeather' arrow function.",
      "Step 3 → 'if/else if' checks temperature bounds from hottest to coldest.",
      "Step 4 → Chennai (32): Fails >= 35, matches >= 25 -> Weather: 'Normal'.",
      "Step 5 → Kovai (48): Matches >= 35 -> Weather: 'Very Hot'.",
      "Step 6 → Tenkasi (28): Matches >= 25 -> Weather: 'Normal'."
    ],
    keyTakeaways: [
      "Logical OR ('||') is used for boundary checking: value > 50 OR value < -10.",
      "Graduated 'if/else if' ladders let you cleanly classify continuous numeric data into descriptive categories.",
      "Arrow functions passed to 'forEach()' execute once for every item in the array."
    ]
  },

  // EASY 2: Delivery Charge Calculator
  {
    id: 7,
    slug: "delivery-charge-calculator",
    numberStr: "02",
    title: "Delivery Charge Calculator",
    difficulty: "Easy",
    difficultyBadge: "🟢 Easy",
    category: "E-Commerce & Tiered Pricing",
    concepts: ["Array of Objects", "Arrow Function", "forEach()", "let", "const", "if / else if / else", "&&", "Comparison Operator"],
    summary: "Compute customer delivery fees based on order amount discounts and tiered distance ranges using combined logical conditions.",
    problemStatement: "Create an array of order objects. Calculate delivery charges based on order amount and distance. Orders with amount >= ₹1,000 get FREE delivery (₹0). For other orders: Distance <= 5 km is ₹40, Distance > 5 AND <= 10 km is ₹70, and Distance > 10 km is ₹120. Calculate Final Amount = Order Amount + Delivery Charge.",
    scenario: "Process 5 customer orders: Surya (₹850, 7km), Arun (₹1,500, 4km), Kumar (₹600, 12km), Swetha (₹2,500, 15km), and Karthick (₹700, 3km).",
    givenData: `const orders = [
    { customer: "Surya", amount: 850, distance: 7 },
    { customer: "Arun", amount: 1500, distance: 4 },
    { customer: "Kumar", amount: 600, distance: 12 },
    { customer: "Swetha", amount: 2500, distance: 15 },
    { customer: "Karthick", amount: 700, distance: 3 }
];`,
    rules: [
      "1. Invalid Distance: 'order.distance < 0' -> log 'Invalid Distance' and return.",
      "2. Free Delivery: 'amount >= 2000' OR 'amount >= 1000' -> charge = ₹0",
      "3. Distance <= 5 km -> charge = ₹40",
      "4. Distance > 5 AND Distance <= 10 km -> charge = ₹70",
      "5. Distance > 10 km -> charge = ₹120",
      "6. Final Amount = Order Amount + Delivery Charge"
    ],
    sourceCode: `// 7. Delivery Charge Calculator — Range Rules & Free Delivery
const orders = [
    {
        customer: "Surya",
        amount: 850,
        distance: 7
    },
    {
        customer: "Arun",
        amount: 1500,
        distance: 4
    },
    {
        customer: "Kumar",
        amount: 600,
        distance: 12
    },
    {
        customer: "Swetha",
        amount: 2500,
        distance: 15
    },
    {
        customer: "Karthick",
        amount: 700,
        distance: 3
    }
];

const deliveryCharge = (order) => {
    let charge;

    if (order.distance < 0) {
        console.log("Invalid Distance");
        return;
    }

    if (order.amount >= 2000) {
        charge = 0;
    }
    else if (order.amount >= 1000) {
        charge = 0;
    }
    else if (order.distance <= 5) {
        charge = 40;
    }
    else if (
        order.distance > 5 &&
        order.distance <= 10
    ) {
        charge = 70;
    }
    else {
        charge = 120;
    }

    const finalAmount = order.amount + charge;

    console.log("Customer:", order.customer);
    console.log("Order Amount:", order.amount);
    console.log("Distance:", order.distance + " km");
    console.log("Delivery Charge:", charge);
    console.log("Final Amount:", finalAmount);
    console.log("----------------------");
};

orders.forEach(deliveryCharge);`,
    expectedOutput: `Customer: Surya
Order Amount: 850
Distance: 7 km
Delivery Charge: 70
Final Amount: 920
----------------------
Customer: Arun
Order Amount: 1500
Distance: 4 km
Delivery Charge: 0
Final Amount: 1500
----------------------
Customer: Kumar
Order Amount: 600
Distance: 12 km
Delivery Charge: 120
Final Amount: 720
----------------------
Customer: Swetha
Order Amount: 2500
Distance: 15 km
Delivery Charge: 0
Final Amount: 2500
----------------------
Customer: Karthick
Order Amount: 700
Distance: 3 km
Delivery Charge: 40
Final Amount: 740
----------------------`,
    stepByStepExplanation: [
      "Step 1 → Array 'orders' holds order objects with customer name, order amount, and delivery distance in km.",
      "Step 2 → 'orders.forEach(deliveryCharge)' processes each order.",
      "Step 3 → Spend >= ₹1,000 qualifies for free delivery (charge = 0) regardless of distance.",
      "Step 4 → Otherwise, distance conditions apply: <= 5 km is ₹40; > 5 && <= 10 km is ₹70; > 10 km is ₹120.",
      "Step 5 → 'finalAmount = order.amount + charge' calculates the total payable bill.",
      "Step 6 → Results are printed with breakdown of amount, distance, delivery fee, and final bill."
    ],
    keyTakeaways: [
      "'&&' allows checking both lower and upper bounds for a range: 'distance > 5 && distance <= 10'.",
      "Evaluating spend-threshold free delivery first gives priority to high-value customer orders.",
      "Mathematical arithmetic easily combines base order costs with variable delivery fees."
    ]
  },

  // EASY 3: Car Speed Checker
  {
    id: 8,
    slug: "car-speed-checker",
    numberStr: "03",
    title: "Car Speed Checker",
    difficulty: "Easy",
    difficultyBadge: "🟢 Easy",
    category: "Speed & Conditions",
    concepts: ["Array of Objects", "Arrow Function", "forEach()", "let", "const", "if / else if / else", "Comparison Operator"],
    summary: "Inspect vehicle speeds (BMW, Audi, Kia) and assign speed safety classifications (Over Speed, Normal, Slow) using clean conditional logic.",
    problemStatement: "Create an array of car objects. Evaluate each car's speed using an arrow function with 'forEach()'. Rules: Speed > 100 is 'Over Speed', Speed >= 60 is 'Normal', and Below 60 is 'Slow'. Print the car name and speed status.",
    scenario: "Traffic radar captures speed readings for 3 cars: BMW (120 km/h), Audi (80 km/h), and Kia (45 km/h).",
    givenData: `const cars = [
    { name: "BMW", speed: 120 },
    { name: "Audi", speed: 80 },
    { name: "Kia", speed: 45 }
];`,
    rules: [
      "1. Speed > 100 -> 'Over Speed'",
      "2. Speed >= 60 -> 'Normal'",
      "3. Below 60 -> 'Slow'"
    ],
    sourceCode: `// 8. Car Speed Checker — Simple Conditional Classification
const cars = [
    { name: "BMW", speed: 120 },
    { name: "Audi", speed: 80 },
    { name: "Kia", speed: 45 }
];

const checkSpeed = (car) => {
    let status;

    if (car.speed > 100) {
        status = "Over Speed";
    }
    else if (car.speed >= 60) {
        status = "Normal";
    }
    else {
        status = "Slow";
    }

    console.log(car.name, ":", status);
};

cars.forEach(checkSpeed);`,
    expectedOutput: `BMW : Over Speed
Audi : Normal
Kia : Slow`,
    stepByStepExplanation: [
      "Step 1 → Array 'cars' stores 3 vehicle objects with name and speed in km/h.",
      "Step 2 → 'cars.forEach(checkSpeed)' calls the 'checkSpeed' function for each car object.",
      "Step 3 → BMW (120): '120 > 100' is true -> logs 'BMW : Over Speed'.",
      "Step 4 → Audi (80): '80 > 100' is false, '80 >= 60' is true -> logs 'Audi : Normal'.",
      "Step 5 → Kia (45): fails both conditions, falls into 'else' -> logs 'Kia : Slow'."
    ],
    keyTakeaways: [
      "Simple, mutually exclusive conditions keep beginner code readable and predictable.",
      "Because 'speed > 100' is evaluated first, 'else if (speed >= 60)' does not need a redundant '<= 100' check.",
      "'forEach' provides the cleanest syntax for iterating over a collection of records."
    ]
  },

  // EASY 4: Shopping Discount
  {
    id: 9,
    slug: "shopping-discount",
    numberStr: "04",
    title: "Shopping Discount",
    difficulty: "Easy",
    difficultyBadge: "🟢 Easy",
    category: "Math & Percentage",
    concepts: ["Array of Objects", "Arrow Function", "forEach()", "let", "const", "if / else if / else", "Math & Percentage", "Comparison Operator"],
    summary: "Calculate customer discounts (20%, 10%, or 0%) based on order total tiers and apply the mathematical percentage formula to compute final net bills.",
    problemStatement: "Create an array of customer purchase objects. Apply tiered discounts: Amount >= 2000 gets 20% discount, Amount >= 1000 gets 10% discount, and Below 1000 gets 0% discount. Calculate final amount using formula: 'finalAmount = amount - (amount * discount / 100)'.",
    scenario: "Calculate discounts and payable bills for 3 customers: Surya (₹2,500), Arun (₹1,500), and Kumar (₹500).",
    givenData: `const customers = [
    { name: "Surya", amount: 2500 },
    { name: "Arun", amount: 1500 },
    { name: "Kumar", amount: 500 }
];`,
    rules: [
      "1. Amount >= 2000 -> 20% discount",
      "2. Amount >= 1000 -> 10% discount",
      "3. Below 1000 -> 0% discount",
      "4. Calculation: finalAmount = amount - (amount * discount / 100)"
    ],
    sourceCode: `// 9. Shopping Discount — Percentage Calculation & Formula Breakdown
const customers = [
    { name: "Surya", amount: 2500 },
    { name: "Arun", amount: 1500 },
    { name: "Kumar", amount: 500 }
];

const calculateDiscount = (customer) => {
    let discount;

    if (customer.amount >= 2000) {
        discount = 20;
    }
    else if (customer.amount >= 1000) {
        discount = 10;
    }
    else {
        discount = 0;
    }

    const finalAmount =
        customer.amount -
        (customer.amount * discount / 100);

    console.log(customer.name);
    console.log("Discount:", discount + "%");
    console.log("Final Amount:", finalAmount);
    console.log("----------------");
};

customers.forEach(calculateDiscount);`,
    expectedOutput: `Surya
Discount: 20%
Final Amount: 2000
----------------
Arun
Discount: 10%
Final Amount: 1350
----------------
Kumar
Discount: 0%
Final Amount: 500
----------------`,
    stepByStepExplanation: [
      "Step 1 → Array 'customers' contains customer spend records for Surya (2500), Arun (1500), and Kumar (500).",
      "Step 2 → 'customers.forEach(calculateDiscount)' iterates through each customer.",
      "Step 3 → If amount >= 2000, discount = 20. If amount >= 1000, discount = 10. Else discount = 0.",
      "Step 4 → Formula 'amount - (amount * discount / 100)' computes discount and subtracts it from amount.",
      "Step 5 → Surya: 2500 - (2500 * 20 / 100) = 2500 - 500 = ₹2,000.",
      "Step 6 → Arun: 1500 - (1500 * 10 / 100) = 1500 - 150 = ₹1,350.",
      "Step 7 → Kumar: 500 - (500 * 0 / 100) = ₹500."
    ],
    keyTakeaways: [
      "The formula '(amount * discount) / 100' converts a percentage rate into a currency discount value.",
      "Parentheses ensure mathematical operations are clear, readable, and execute in expected order.",
      "Dynamic data objects allow applying identical business discount rules to any number of customers."
    ]
  },

  // EASY 5: Login Security Check
  {
    id: 10,
    slug: "login-security-check",
    numberStr: "05",
    title: "Login Security Check",
    difficulty: "Easy",
    difficultyBadge: "🟢 Easy",
    category: "Auth & Boolean Operators",
    concepts: ["Array of Objects", "Arrow Function", "forEach()", "const", "if / else if / else", "Logical NOT (!)", "Strict Equality (===)", "Logical AND (&&)"],
    summary: "Implement account authentication checking inactive account flags first with !user.active and validating credentials with strict === & &&.",
    problemStatement: "Create an array of user objects. Authenticate users against entered credentials ('surya' / '1234'). If account is inactive ('!user.active'), log 'Account Blocked'. If username and password match with strict equality ('===' and '&&'), log 'Login Successful'. Otherwise log 'Invalid Login'.",
    scenario: "Verify credentials for registered accounts: Surya (active: true) and Arun (active: false) against entered credentials 'surya' / '1234'.",
    givenData: `const users = [
    {
        username: "surya",
        password: "1234",
        active: true
    },
    {
        username: "arun",
        password: "5678",
        active: false
    }
];

const enteredUsername = "surya";
const enteredPassword = "1234";`,
    rules: [
      "1. Account Inactive Check: If '!user.active' -> log 'Account Blocked'",
      "2. Credentials Match: If 'user.username === enteredUsername && user.password === enteredPassword' -> log 'Login Successful'",
      "3. Invalid Match: Otherwise -> log 'Invalid Login'"
    ],
    sourceCode: `// 10. Login Security Check — Inactive Check & Strict Equality (===)
const users = [
    {
        username: "surya",
        password: "1234",
        active: true
    },
    {
        username: "arun",
        password: "5678",
        active: false
    }
];

const login = (user) => {
    const enteredUsername = "surya";
    const enteredPassword = "1234";

    if (!user.active) {
        console.log("Account Blocked");
    }
    else if (
        user.username === enteredUsername &&
        user.password === enteredPassword
    ) {
        console.log("Login Successful");
    }
    else {
        console.log("Invalid Login");
    }
};

users.forEach(login);`,
    expectedOutput: `Login Successful
Account Blocked`,
    stepByStepExplanation: [
      "Step 1 → Array 'users' holds user objects with username, password, and active boolean status.",
      "Step 2 → 'users.forEach(login)' passes each user object into 'login'.",
      "Step 3 → Inactive check: '!user.active' is evaluated first. If user.active is false, '!false' is true -> logs 'Account Blocked'.",
      "Step 4 → Credential check: If active, 'user.username === enteredUsername && user.password === enteredPassword' checks both strings with strict equality.",
      "Step 5 → User 'surya' (active: true, matching username and password) -> logs 'Login Successful'.",
      "Step 6 → User 'arun' (active: false) -> '!false' evaluates to true -> logs 'Account Blocked'."
    ],
    keyTakeaways: [
      "'!user.active' is the concise JavaScript equivalent of 'user.active === false'.",
      "'&&' (Logical AND) requires BOTH username AND password to match before allowing login.",
      "Always inspect account active/suspended status before checking passwords to prevent unauthorized operations."
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionsData };
}
