console.log("hello world")
console.log("Well come John your month salary is 500000") 


// app.js or index.js 
const prompt = require('prompt-sync')(); // This line is essential 
console.log("starting") 
const name = prompt('Enter your name: '); 
console.log(`Hello, ${name}`); 
// program that checks if the number is positive, negative or zero 
// input from the user 
const number = parseInt(prompt("Enter a number: ")); 
 
// check if number is greater than 0 
if (number > 0) { 
    console.log("The number is positive"); 
} 
 
// check if number is 0 
else if (number == 0) { 
  console.log("The number is zero"); 
} 
 
// if number is less than 0 
else { 
     console.log("The number is negative");
}


//portfolio week1 arithmetic operators
// Function to perform addition on multiple numbers
function add(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Function to perform subtraction on multiple numbers
function subtract(...numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, num) => acc - num);
}

// Function to perform multiplication on multiple numbers
function multiply(...numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, num) => acc * num, 1);
}

// Function to perform division on multiple numbers
function divide(...numbers) {
    if (numbers.length === 0) return undefined;
    return numbers.reduce((acc, num) => {
        if (num === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return acc / num;
    });
}

// Example usage:
const nums = [20, 5, 2];

console.log("Addition:", add(...nums));         // 20 + 5 + 2 = 27
console.log("Subtraction:", subtract(...nums)); // 20 - 5 - 2 = 13
console.log("Multiplication:", multiply(...nums)); // 20 * 5 * 2 = 200
console.log("Division:", divide(...nums));      // 20 / 5 / 2 = 2
