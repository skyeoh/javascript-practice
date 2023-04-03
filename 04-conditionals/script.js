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