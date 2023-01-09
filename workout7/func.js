/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/
// From function declarations to function expressions
const hiYou= function () {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}
const power = function (a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}
const add = function (a, b = 5) {
let myNumber = a;
let sum = myNumber + b;
return sum;
}
// From function expressions to function declarations
function hello(){ "Hello!"};
function squareRoot(a) { Math.sqrt(a)};
function randomNumbers(a, b) { Math.random() * (a - b) +
b};