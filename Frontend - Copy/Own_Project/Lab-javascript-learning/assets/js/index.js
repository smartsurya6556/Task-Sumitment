/**
 * JavaScript Learning & Logic Lab - 10 Logical Practice Programs
 * Source of Truth for Practice Problems
 */

// ==========================================================================
// 🔴 HARD QUESTIONS (1 to 5)
// ==========================================================================

// 1. Bank Account System — Classes & Nested Arrow Functions
class SBIbankaccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

const bankSystem = (account) => {
  const checkBalance = () => {
    console.log(`Current Balance : ₹${account.balance} `);
  };

  const deposit = (amount) => {
    if (amount > 0) {
      account.balance += amount;
      console.log(`Deposite : ₹ ${amount}`);
    } else {
      console.log("Invalid Deposite Amount");
    }
  };

  const withraw = (amount) => {
    if (amount <= account.balance) {
      account.balance -= amount;
      console.log(`Withraw : ₹ ${amount}`);
    } else {
      console.log("Insufficient Balance");
    }
  };

  console.log(`=== Bank Operations for: ${account.name} ===`);
  checkBalance();
  deposit(12000);
  withraw(3500);
  checkBalance();
};

const account = new SBIbankaccount("Sarath", 45000);
bankSystem(account);


// 2. Online Shopping Cart — Array of Objects & .find()
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 5 },
  { id: 2, name: "Mouse", price: 1000, stock: 10 },
  { id: 3, name: "Keyboard", price: 2000, stock: 0 }
];

const cart = [
  { productId: 1, quantity: 2 },
  { productId: 2, quantity: 3 },
  { productId: 3, quantity: 1 }
];

const shoppingSystem = () => {
  let total = 0;

  const findProduct = (id) => {
    return products.find(product => product.id === id);
  };

  const calculatePrice = (product, quantity) => {
    return product.price * quantity;
  };

  console.log("\n=== Shopping Cart Processing ===");
  cart.forEach(item => {
    const product = findProduct(item.productId);

    if (product === undefined) {
      console.log("Product Not Found");
    } else if (product.stock === 0) {
      console.log(product.name, "is Out of Stock");
    } else if (item.quantity > product.stock) {
      console.log("Not Enough Stock:", product.name);
    } else {
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

shoppingSystem();


// 3. ATM Withdrawal System — Multi-Level Security Guards
const atmAccount = {
  name: "Surya",
  pin: 4578,
  balance: 50000,
  active: true
};

const atm = (enteredPin, withdrawAmount) => {
  let remainingBalance;

  if (!atmAccount.active) {
    console.log("Account is inactive");
  } else if (atmAccount.pin !== enteredPin) {
    console.log("Incorrect PIN");
  } else if (withdrawAmount <= 0) {
    console.log("Invalid Amount");
  } else if (withdrawAmount > atmAccount.balance) {
    console.log("Insufficient Balance");
  } else {
    remainingBalance = atmAccount.balance - withdrawAmount;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", remainingBalance);
  }
};

console.log("\n=== ATM Withdrawal System ===");
atm(4578, 7540);


// 4. Bank Loan Eligibility — Compound Logical AND (&&)
const loanCustomers = [
  { name: "Arun", age: 25, salary: 45000, creditScore: 750, active: true },
  { name: "Surya", age: 24, salary: 65000, creditScore: 700, active: true },
  { name: "Swetha", age: 23, salary: 77000, creditScore: 800, active: false }
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
  } else {
    status = "Rejected";
  }

  console.log("Customer:", customer.name);
  console.log("Loan Status:", status);
};

console.log("\n=== Bank Loan Eligibility ===");
loanCustomers.forEach(checkLoan);


// 5. Student Result System — Multi-Tier Grading
const studentCohort = [
  { name: "Kumar", mark: 98 },
  { name: "Karthick", mark: 76 },
  { name: "Kavitha", mark: 65 },
  { name: "Suresh", mark: 58 },
  { name: "Swetha", mark: 84 }
];

const checkResult = (student) => {
  let grade;
  let result;

  if (student.mark < 0 || student.mark > 100) {
    console.log("Invalid Mark");
    return;
  } else if (student.mark >= 90) {
    grade = "A";
    result = "Pass";
  } else if (student.mark >= 80) {
    grade = "B";
    result = "Pass";
  } else if (student.mark >= 70) {
    grade = "C";
    result = "Pass";
  } else if (student.mark >= 50) {
    grade = "D";
    result = "Pass";
  } else {
    grade = "F";
    result = "Fail";
  }

  console.log("Student:", student.name);
  console.log("Mark:", student.mark);
  console.log("Grade:", grade);
  console.log("Result:", result);
  console.log("----------------");
};

console.log("\n=== Student Result System ===");
studentCohort.forEach(checkResult);


// ==========================================================================
// 🟢 EASY QUESTIONS (6 to 10)
// ==========================================================================

// 6. Weather / Temperature Checker
const weatherData = [
  { city: "Chennai", temperature: 32 },
  { city: "Kovai", temperature: 48 },
  { city: "Tenkasi", temperature: 28 }
];

const checkWeather = (weather) => {
  let message;

  if (weather.temperature > 50 || weather.temperature < -10) {
    message = "Invalid Temperature";
  } else if (weather.temperature >= 35) {
    message = "Very Hot";
  } else if (weather.temperature >= 25) {
    message = "Normal";
  } else if (weather.temperature >= 15) {
    message = "Cool";
  } else {
    message = "Cold";
  }

  console.log("City:", weather.city);
  console.log("Temperature:", weather.temperature);
  console.log("Weather:", message);
  console.log("------------------");
};

console.log("\n=== Weather Temperature Checker ===");
weatherData.forEach(checkWeather);


// 7. Delivery Charge Calculator
const orderList = [
  { customer: "Surya", amount: 850, distance: 7 },
  { customer: "Arun", amount: 1500, distance: 4 },
  { customer: "Kumar", amount: 600, distance: 12 },
  { customer: "Swetha", amount: 2500, distance: 15 },
  { customer: "Karthick", amount: 700, distance: 3 }
];

const deliveryCharge = (order) => {
  let charge;

  if (order.distance < 0) {
    console.log("Invalid Distance");
    return;
  }

  if (order.amount >= 2000) {
    charge = 0;
  } else if (order.amount >= 1000) {
    charge = 0;
  } else if (order.distance <= 5) {
    charge = 40;
  } else if (order.distance > 5 && order.distance <= 10) {
    charge = 70;
  } else {
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

console.log("\n=== Delivery Charge Calculator ===");
orderList.forEach(deliveryCharge);


// 8. Car Speed Checker
const carList = [
  { name: "BMW", speed: 120 },
  { name: "Audi", speed: 80 },
  { name: "Kia", speed: 45 }
];

const checkSpeed = (car) => {
  let status;

  if (car.speed > 100) {
    status = "Over Speed";
  } else if (car.speed >= 60) {
    status = "Normal";
  } else {
    status = "Slow";
  }

  console.log(car.name, ":", status);
};

console.log("\n=== Car Speed Checker ===");
carList.forEach(checkSpeed);


// 9. Shopping Discount
const customerList = [
  { name: "Surya", amount: 2500 },
  { name: "Arun", amount: 1500 },
  { name: "Kumar", amount: 500 }
];

const calculateDiscount = (customer) => {
  let discount;

  if (customer.amount >= 2000) {
    discount = 20;
  } else if (customer.amount >= 1000) {
    discount = 10;
  } else {
    discount = 0;
  }

  const finalAmount = customer.amount - (customer.amount * discount / 100);

  console.log("Customer:", customer.name);
  console.log("Discount:", discount + "%");
  console.log("Final Amount:", finalAmount);
  console.log("----------------");
};

console.log("\n=== Shopping Discount Calculator ===");
customerList.forEach(calculateDiscount);


// 10. Login Security Check
const systemUsers = [
  { username: "surya", password: "1234", active: true },
  { username: "arun", password: "5678", active: false }
];

const loginUser = (user) => {
  const enteredUsername = "surya";
  const enteredPassword = "1234";

  if (!user.active) {
    console.log("Account Blocked");
  } else if (
    user.username === enteredUsername &&
    user.password === enteredPassword
  ) {
    console.log("Login Successful");
  } else {
    console.log("Invalid Login");
  }
};

console.log("\n=== Login Security Check ===");
systemUsers.forEach(loginUser);