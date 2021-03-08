// SYNTAX
var x = 5.0;
console.log(x);  //5
x = 0/0
console.log(x);  // Not a Number   NaN
var name1 = "Joe";  
console.log(name1);  //Joe
var name2 = 'Jane';
console.log(name2);  // Jane
var name3= `Jill`;
console.log(name3); //Jill
var sentence1 = 'The cat in the "hat"';
console.log(sentence1);   // the cat in the "hat"
var sentence2 = "The cat in the \"hat\" ";
console.log(sentence2);   //The cat in the "hat"
var string1 = "old" + " new";
console.log(string1);
console.log(3>2);  // true
console.log("a" != "b");  // true
var y = 2;
console.log(x == 3 || y != 2);  // false
var q = "3.5" + 0.5;  
console.log(q);  //3.50.5
// EXPRESSION   fragment of code to produce a value
var x = 3 + 5;   //expression 3 + 5
console.log( 4 * 2 );    //8    expression inside the parenthesis -parameter
// var name1 = prompt("Enter your name");    //on a web browser prompts for a name
x = Math.max(3,4);
console.log(x);   //4
// IF STATEMENTS, SWITCH STATEMENT 
if ( x < 10 ) {
    console.log("low");  //low
};
if (x <=10 ) console.log("hello");     //hello
if ( x < 10 ) {
    console.log("low");
}
else {
    console.log("high");    
}
value = -1;
var inp = 'b';
switch (inp) {
    case 'a':
        value = 1;
        break;
    case 'b':
        value = 2;
        break;
    default:
        value = 999;
        break;
}
console.log(value);  //2
// LOOPS  do   while   -for-
i = 0;
do {
    console.log("i= " + i);
    i++;
} while (i<5);
/*
i= 0
i= 1
i = 2
i = 3
i = 4
*/
var j = 0;
while (j < 3) {
    console.log("j= " + j);
    j += 1;
}
/*
j= 0
j = 1
j = 2
*/
for (var k=0; k < 4; k++) {
    console.log("k=" + k);
}
/*
k= 0
k= 1
k= 2
*/
// Remainder
var num1 = 224 % 2;
console.log(num1);   //0
var num2 = 223 % 2;
console.log(num2);   //1




// VARIABLE

