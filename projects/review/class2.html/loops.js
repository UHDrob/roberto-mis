// LOOPS
// do loop
var i = 0;
do {
    console.log("i=" + i);
    i = i + 1;
} while (i<5);
// while loop
var j = 0;
while (j<3) {
    console.log("j=" + j);
    j +=1; // j = j + 1
}
// for loop   <- preferred
for (var k = 0; k<4; ++k) {
    console.log(k);
}
// Remainder operator
var num = 224%2; console.log(num); // 0
var num = 223%2; console.log(num); // 1
