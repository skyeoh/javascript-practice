/*
 * Binary Search
 * =============
 * Given a sorted array and a target, binarySearch searches
 * for the target in the array. If found, it returns the index
 * of the target; otherwise, it returns -1.
 * No duplicate entries are allowed in the array.
 */

const binarySearch = function(array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

module.exports = binarySearch;
