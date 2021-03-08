// FUNCTIONS
const sqareNumber = function(x) {
    return x* x;
}
console.log( sqareNumber(3) );   //9
var value = sqareNumber(4);   
console.log(value);//16
// Declaration notation
function half(a) {
    return a/2;
}
console.log(half(4));   //2
//Objects and Arrays
let listOfNumber = [4,5,6,2,9];
var x = listOfNumber[3];   
console.log(x);//2
var x = listOfNumber[3] + 4;   
console.log(x);//6
// Properties
var name1 = "John Smith";
var len = name1.length;
console.log(len);   //10
//object
let day1 = {
    squirrel: false,
    events: ['work', 'ate pizza', 'ran']
}
console.log(day1.squirrel);   //false
console.log(day1.events[1]);   // atte pizza