let x = 100 + 150;
document.getElementById("literals-sum").innerHTML = x;

let a = 10, b = 20;
let y = a + b;
document.getElementById('variables-sum').innerHTML = y;

let c = 25;
let z = (100 + 200) * c;
document.getElementById("arithmetic-expression").innerHTML = z;

let d = 5, e = 2;

let sum = d + e;
document.getElementById("addition").innerHTML = sum;

sum = d - e;
document.getElementById("subtraction").innerHTML = sum;

let product = d * e;
document.getElementById("multiplication").innerHTML = product;

let quotient = d / e;
document.getElementById("division").innerHTML = quotient;

let remainder = d % e;
document.getElementById("modulo").innerHTML = remainder;

let power = d**e;
document.getElementById("power").innerHTML = power;

d++;
let increment = d;
document.getElementById("increment").innerHTML = increment;

e--;
let decrement = e;
document.getElementById("decrement").innerHTML = decrement;

a = 10, b = 20, c = 25, d = 5, e = 2;
let total = a + b - c * d / e + e * (a * c - b / d);
document.getElementById("operator-precedence").innerHTML = total; // 459.5