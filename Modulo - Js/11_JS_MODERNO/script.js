// let e const

var x = 10;
var x = 15;

if (x > 10) {
    var x = 5;
    console.log(x);
}

console.log(x);

// arrow functions

const sum = function (a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b; 