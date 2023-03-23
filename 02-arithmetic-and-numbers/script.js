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

let powerNonInteger = d**(1/2);
document.getElementById("power-noninteger").innerHTML = powerNonInteger;

d++;
let increment = d;
document.getElementById("increment").innerHTML = increment;

e--;
let decrement = e;
document.getElementById("decrement").innerHTML = decrement;

a = 10, b = 20, c = 25, d = 5, e = 2;
let total = a + b - c * d / e + e * (a * c - b / d);
document.getElementById("operator-precedence").innerHTML = total; // 459.5

document.getElementById("numeric-true").innerHTML = +true + " = Number(true) = " + Number(true);
document.getElementById("numeric-string").innerHTML = +"20.9" + " = Number(\"20.9\") = " + Number("20.9");
document.getElementById("numeric-undefined").innerHTML = +undefined + " = Number(undefined) = " + Number(undefined);
document.getElementById("numeric-null").innerHTML = +null + " = Number(null) = " + Number(null);

document.getElementById("numeric-true-2").innerHTML = -true + " = -Number(true) = " + -Number(true);
document.getElementById("numeric-string-2").innerHTML = -"20.9" + " = -Number(\"20.9\") = " + -Number("20.9");
document.getElementById("numeric-undefined-2").innerHTML = -undefined + " = -Number(undefined) = " + -Number(undefined);
document.getElementById("numeric-null-2").innerHTML = -null + " = -Number(null) = " + -Number(null);

let varA;
let returnVar = (varA = 20);
document.getElementById("assignment-return").innerHTML = returnVar;

let varB = 25;
let returnVarComma = (10 + 2, varB / 5, ++varB);
document.getElementById("comma-return").innerHTML = returnVarComma;

let i = 10, j = 20;
let prefix = ++i; // prefix = 11, i = 11
let postfix = j++; // postfix = 20, j = 21
let elementContent =  "i = " + i + ", prefix = " + prefix + ", j = " + j + ", postfix = " + postfix;
document.getElementById("prefix-postfix").innerHTML = elementContent;