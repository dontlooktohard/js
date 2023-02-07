// Instructions
// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

const arr1 = ["hi", "my name is what", "my name is who"];
const arr2 = ["slim shady", 11];

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every((word) => typeof word === "string")) {
      const capWords = words.map((word) => word.toUpperCase());
      resolve(capWords);
    } else {
      reject("This is not a string");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject("No words to sort");
    }
  });
}

makeAllCaps(arr1)
  .then((result) => sortWords(result))
  .then((sortedWords) => sortedWords)
  .catch((error) => error);

makeAllCaps(arr2)
  .then((result) => sortWords(result))
  .then((sortedWords) => sortedWords)
  .catch((error) => error);
