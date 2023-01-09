/*
JavaScript - Declaring Functions

The following exercise contains the following
subjects:
    * functions

Instructions
          * Please reformat the following function
expressions to IIFE functions.
         * Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.

   Submit the file to Hive
*/



//  From function declarations to explicit and implicit
//  return functions (one of each).
const welcome = welcome => 'Welcome to Appleseeds Bootcamp!';
console.log(welcome());

const welcome2 = welcome => {
  return 'Welcome to Appleseeds Bootcamp!';
}
console.log(welcome2());

const power = a => result = Math.pow(a, 2);
console.log(power(2));

const power2 = a => {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}
console.log(power2(2));

// From function expressions to IIFE functions.
(function squareRoot(a){
Math.sqrt(a)
})();

(function randomNumbers (a, b) {
Math.random() * (a - b) + b;
})()