// Instructions
// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch.


const num = 9;

function getNumber(num) {
  return new Promise((resolve, reject) => {
    if (num >= 10) {
      resolve(`the num is ${num} so its resolved`);
    } else {
      reject(`the num is ${num} so its  rejected`);
    }
  });
}

getNumber(num)
  .then(result => console.log(result))
  .catch(error => console.log(error));