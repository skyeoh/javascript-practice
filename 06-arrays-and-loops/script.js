console.log('script.js is linked properly');

const array = ["apple", "orange", 10, 200n, true, false, null, undefined];
console.log(array);

const array1 = ["apple", 200, true, array, function() { return 10; }];
console.log(array1);

const array2 = new Array("apple", 200, true, array, function() { return 10; }, null, undefined);
console.log(array2);

console.log(array[0]);
console.log(array[6]);
console.log(array1[4]);
console.log(array2[3]);
console.log(array);
console.log(array1);
console.log(array2);

console.log(array1);
array1[4] = "A function was here";
console.log(array1);

console.log(array2);
array2[5] = 100;
console.log(array2);

console.log("--------------------");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("--------------------");

array2.forEach(item => console.log(item));
console.log("--------------------");

console.log(Array.isArray(array));
console.log(array1 instanceof Array);
console.log(array2 instanceof Array);

console.log("----- String representation of an array -----");
console.log(array1.toString());
console.log(array1.join());
console.log(array1.join(' | '));

console.log("----- Adding and removing elements from an array -----");
array.push("NEW ELEMENT");
console.log(array);
const elem1 = array.pop();
console.log(elem1);
console.log(array);

const elem2 = array.shift();
console.log(elem2);
console.log(array);
array.unshift(elem2);
console.log(array);