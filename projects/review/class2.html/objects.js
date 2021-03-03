// Arrays
let listOfNumbers = [4,5,6,2,9];
var x = listOfNumbers[3] + 4; console.log(x);
// list[1] -> 5
// list[0] -> 4
var y = listOfNumbers[5]; // undefined (error out of range)
console.log(y);
// Properties
let fullName = "John Smith";
var len = fullName.length; console.log(len); // length of string
// Objects
let day1 = {
    squirrel: false,
    events: ['work', 'ate pizza', 'ran']
};
console.log(day1.squirrel);
console.log(day1.events[1]);