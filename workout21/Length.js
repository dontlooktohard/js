function stringLengths(arr) {
    let lengths = [];
    for (let i = 0; i < arr.length; i++) {
      lengths.push(arr[i].length);
    }
    return lengths;
  }
  
  let arr = ["boo", "doooo", "hoo","ro"];
  console.log(stringLengths(arr));