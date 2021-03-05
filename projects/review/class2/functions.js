const squareNumber = function(x) {
    var q = 13;
    return x*x;
}
console.log(squareNumber(3));
var value = squareNumber(4); console.log(value);
// scope
// x and 1 are only valid inside the function

// Declaration Notation
function half(a) {
    // check for divide by zero
    // throw an exception
    return a/2;
}