           
           
           
           
           // block 1
var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}
b = 5;
return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// in this block  number = 9 * 2  and b = 5 because someFunction(9) immediately add 9 
// and firstResult(2) make it run 2 more times

    //   block 2
var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a);
//  in this block the scope goes first to the global fun and so its 1

//             //   block 3
let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}
//  over her let will start by 3 and print 3 times 3 because of the setTimeOut