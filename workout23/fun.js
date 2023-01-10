let filledArray = Array(100).fill({name: "John"});
console.log(filledArray);

let numberArray = Array.from({length: 100}, (_, i) => i + 1);
console.log(numberArray);

let object = {a: 1, b: 2, c: 3};
let values = Object.values(object);
console.log(values);

let array = [1, 2, 3];
let object2 = Object.fromEntries(array.map((x, i) => [i, x]));
console.log(object2);

let checkArray = Array.isArray(array);
console.log(checkArray);

let originalArray = [1, 2, 3];
let copyArray = [...originalArray];
copyArray[0] = 5;
console.log(originalArray); 
console.log(copyArray); 

let originalArray2 = [1, 2, 3];
let copyArray2 = originalArray2;
copyArray2[0] = 5;
console.log(originalArray2);
console.log(copyArray2);