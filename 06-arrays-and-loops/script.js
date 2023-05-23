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

console.log('----- Alternative way of removing elements -----');
console.log(array);
delete array[1];
delete array[4];
console.log(array);

console.log('----- Merging multiple arrays -----');
console.log(array.concat(' | ', array1, ' | ', array2));

console.log('----- Flattening ("unrolling") an array -----');
const arrayLvl1 = [1, 1n, '1'];
const arrayLvl2 = [2n, 2, '2'];
const arrayLvl3 = [3, '3', 3n];
const arrayLvl4 = ['4', 4, 4n ];
const array3 = [0, 0n];
array3.push(arrayLvl1);
arrayLvl1.push(arrayLvl2);
arrayLvl2.push(arrayLvl3);
arrayLvl3.push(arrayLvl4);
array3.push('00');
console.log(array3.flat(0));
console.log(array3.flat(1));
console.log(array3.flat(2));
console.log(array3.flat(3));
console.log(array3.flat(4));

console.log('----- Splicing an array -----');
console.log(array1);
array1.splice(1, 2, "orange", 28, () => "hello world"); // remove and add items
console.log(array1);
array1.splice(5, 0, "new item 1", "new item 2");        // add items only
console.log(array1);
array1.splice(1, 2);                                    // remove items only
console.log(array1);