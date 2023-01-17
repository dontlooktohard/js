// Answer the questions below and use the map or the
// forEach method :
// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
let arr = ['Dog', 'Cat', 'Banana', 'Mouse'];
const doubleValues = (arr) => {
  let newArr = arr.map(function(element){
    return element;
  })
  return newArr;
}

console.log(doubleValues(arr));

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
let arr2 = [1, 2, 3, 4, 5, 6];
let newArr2 = [];
console.log(arr2);
const onlyEvenValues = (arr) => {
  arr.forEach(function(element){
      if(element % 2 === 0)
      {
        newArr2.push(element);
      } 
  })
  return arr;
}
onlyEvenValues(arr2);
console.log('New even array: ', newArr2)

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.

let arrOK = ['hello',2 ,'world', 'its me',1] ;
const showFirstAndLast = (arr) => {
  let newArr = arr.filter(function(element){
    if(typeof element ==='string')
    {
      return element;
    }
  })
  return newArr =[newArr[0],newArr[newArr.length -1]]
}

console.log(showFirstAndLast(arrOK));

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.

let str = 'Fall down seven times, Stand up eight.';
let obj = {};
const vowelCount = (str) =>{
  str = str.toLowerCase().split('');
  str.forEach(function(element){
    if(element === 'a' || element === 'e' || element === 'i' || element === 'o'){
      obj[element] = 0;
    }
  })
  str.forEach(function(element){
    if(element === 'a' || element === 'e' || element === 'i' || element === 'o'){
      obj[element] += 1;
    }
  })
};
vowelCount(str);
console.log(obj);

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
function capitalizer(string) {
  const letters = [];
  [...string].forEach((letter) => {
    letters.push(letter.toUpperCase());
  });
  return letters.join("");
}
console.log(capitalizer("hello world"));

// 6. Write a function called shiftLetters that takes a string as an argument and return’s an encoded string with each letter
// shifted down the alphabet by one.
function shiftLetters(string) {
  let encoded = "";
  [...string].forEach((letter) => {
    let charCode = letter.charCodeAt(letter[0]) - 1;
    encoded += String.fromCharCode(charCode);
  });
  return encoded;
}
console.log(shiftLetters("bcd"))
//7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
function swapCase(string) {
  let splitted = string.split(" ");
  let capitalizedEveryOther = [];
  splitted.forEach((word, index) => {
    if (index % 2 === 0) {
      capitalizedEveryOther.push(capitalizer(word));
    } else {
      capitalizedEveryOther.push(word);
    }
  });
  return capitalizedEveryOther.join(" ");
}
console.log(swapCase("hi there how are you?"));