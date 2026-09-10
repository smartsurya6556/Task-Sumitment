

// Task 1 - Simple Callback Function

function processNumber(number, callback) {
    let result = number * 2;
    callback(result);
}

function displayResult(result) {
    console.log(result);
}

processNumber(10, displayResult);


// Task 2 - Simple Closure Counter

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let counter = createCounter();

counter();
counter();
counter();


// Task 3 - Push and Pop

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

fruits.push("Pineapple");
fruits.push("Watermelon");

fruits.pop();

console.log(fruits);


// Task 4 - Shift and Unshift

let colors = ["Red", "Blue", "Green", "Yellow"];

colors.unshift("Black");

colors.shift();

console.log(colors);


// Task 5 - Manual Push Without push()

const numbers = [10, 20, 30];

let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i];
}

newNumbers[newNumbers.length] = 40;

console.log(newNumbers);


// Task 6 - Array Methods Until concat()

const fruits1 = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];

// Add Banana at the end
fruits1.push("Banana");

// Remove the last element
fruits1.pop();

// Add Grapes at the beginning
fruits1.unshift("Grapes");

// Remove the first element
fruits1.shift();

// Check the length
console.log("Length:", fruits1.length);

// Combine both arrays
const finalArray = fruits1.concat(vegetables);

console.log(finalArray);