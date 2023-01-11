// const getString(arr) => arr.map(Element) = Element.indexOf([3,4,4,3,6,3]){
//     return Element
// }
// const noDuplicates = (arr) =>
//     arr.filter((el, index) => arr.indexOf(el) === index);

// console.log(noDuplicates([3, 4, 4, 3, 6, 3]));


const noDuplicates = (numbers) =>
 numbers.filter((val,index) => numbers.indexOf(val) === index);
console.log(noDuplicates([3, 4, 4, 3, 6, 3]));