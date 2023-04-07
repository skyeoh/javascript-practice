console.log(5 > 3);     // true
console.log(5 < 3);     // false
console.log(5 >= 3);    // true
console.log(5 <= 3);    // false
console.log(5 == 3);    // false
console.log(5 != 3);    // true

let result = 10 < 15;
console.log(result);    // true

console.log('A' < 'Z');         // true
console.log('Glow' < 'Glee')    // false
console.log('Beetle' > 'Beet')  // true
console.log('A' > 'a')          // false
let chara = 'a',
    charA = 'A';
console.log("unicode of 'a' = " + chara.charCodeAt(0));
console.log("unicode of 'A' = " + charA.charCodeAt(0));

console.log('2' > 1 );      // true
console.log('001' == 1);    // true
console.log(true == 1);     // true
console.log(false == '');   // true

console.log(0 == false);    // true
console.log('' == false);   // true
console.log('' == 0);       // true
console.log(0 === false);   // false
console.log('' === false);  // false
console.log('' === 0);      // false

console.log(null === undefined); // false
console.log(null == undefined);  // true
console.log(null > 0);           // false
console.log(null == 0);          // false
console.log(null >= 0);          // true
console.log(undefined > 0);      // false
console.log(undefined < 0);      // false
console.log(undefined == 0);     // false

console.log("5 > 4: " + (5 > 4));                                   // true: 5 is larger than 4
console.log('"apple" > "pineapple": ' + ("apple" > "pineapple"));   // false: First character 'a' is smaller than 'p'
console.log('"2" > "12": ' + ("2" > "12"));                         // true: First character '2' is greater than '1'
console.log("undefined == null: " + (undefined == null));           // true: undefined, null are only equal to one another based on loose equality '=='
console.log("undefined === null: " + (undefined === null));         // false: undefined and null are different types
console.log('null == "\n0\n": ' + (null == "\n0\n"));               // false: undefined, null are only equal to one another based on loose equality '=='
console.log('null === +"\n0\n": ' + (null === +"\n0\n"));           // false: they are different types; one is null and the other is a number

function calculateOutputValue() {
    const textInput = document.getElementById("text-input-conditional").value;
    const inputNumber = Number(textInput);
    let outputText;

    if (inputNumber < 0) {
        outputText = `The number you entered ${inputNumber} is less than 0.`;
    } else if (inputNumber < 10) {
        outputText = `The number you entered ${inputNumber} is [0, 10).`;
    } else if (inputNumber < 50) {
        outputText = `The number you entered ${inputNumber} is [10, 50).`;
    } else if (inputNumber < 100) {
        outputText = `The number you entered ${inputNumber} is [50, 100).`;
    } else {
        outputText = `The number you entered ${inputNumber} is 100 or larger.`;
    }

    document.getElementById("text-output-conditional").textContent = outputText;
}

let boolValueOr = true || true;
document.getElementById("logical-or-1").innerHTML = boolValueOr;
boolValueOr = true || false;
document.getElementById("logical-or-2").innerHTML = boolValueOr;
boolValueOr = false || true;
document.getElementById("logical-or-3").innerHTML = boolValueOr;
boolValueOr = false || false;
document.getElementById("logical-or-4").innerHTML = boolValueOr;

let returnValOr = '' || null || undefined || console.log(1) || !console.log(2) || console.log(3) || console.log(4);
document.getElementById("logical-or-truthy-1").innerHTML = returnValOr;
returnValOr = '' || null || undefined || console.log(1) || console.log(2) || !console.log(3) || console.log(4);
document.getElementById("logical-or-truthy-2").innerHTML = returnValOr;
returnValOr = '' || null || undefined || console.log(1) || console.log(2) || console.log(3) || console.log(4);
document.getElementById("logical-or-truthy-3").innerHTML = returnValOr;

let boolValueAnd = true && true;
document.getElementById("logical-and-1").innerHTML = boolValueAnd;
boolValueAnd = true && false;
document.getElementById("logical-and-2").innerHTML = boolValueAnd;
boolValueAnd = false && true;
document.getElementById("logical-and-3").innerHTML = boolValueAnd;
boolValueAnd = false && false;
document.getElementById("logical-and-4").innerHTML = boolValueAnd;

console.log("--------------------");
let returnValAnd = 'Hello world!' && !console.log(1) && 100 && console.log(2) && 0 && !console.log(3);
document.getElementById("logical-and-truthy-1").innerHTML = returnValAnd;
returnValAnd = 'Hello world!' && !console.log(1) && 100 && !console.log(2) && 0 && !console.log(3);
document.getElementById("logical-and-truthy-2").innerHTML = returnValAnd;
returnValAnd = 'Hello world!' && !console.log(1) && 100 && !console.log(2) && true && 20*Number(!console.log(3));
document.getElementById("logical-and-truthy-3").innerHTML = returnValAnd;