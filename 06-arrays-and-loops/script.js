console.log('script.js is linked properly');

const array = ["apple", "orange", 10, 200n, true, false, null, undefined];
console.log(array);

const array1 = ["apple", 200, true, array, function() { return 10; }];
console.log(array1);

const array2 = new Array("apple", 200, true, array, function() { return 10; }, null, undefined);
console.log(array2);