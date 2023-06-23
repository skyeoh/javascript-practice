const binarySearch = require('./binary_search');

describe('binarySearch', () => {
    test('odd no. of entries, target in middle', () => {
        const array = [1, 2, 3, 4, 5];
        expect(binarySearch(array, 3)).toEqual(2);
    });
    test('odd no. of entries, target at end', () => {
        const array = [1, 2, 3, 4, 5];
        expect(binarySearch(array, 5)).toEqual(4);
    });
    test('odd no. of entries, target absent', () => {
        const array = [1, 2, 3, 4, 5];
        expect(binarySearch(array, -10)).toEqual(-1);
    });
    test('even no. of entries, target at start', () => {
        const array = [-20, -10, -5, 0, 2, 5, 9, 15];
        expect(binarySearch(array, -20)).toEqual(0);
    });
    test('even no. of entries, target in middle', () => {
        const array = [-20, -10, -5, 0, 2, 5, 9, 15];
        expect(binarySearch(array, 9)).toEqual(6);
    });
    test('even no. of entries, target absent', () => {
        const array = [-20, -10, -5, 0, 2, 5, 9, 15];
        expect(binarySearch(array, 20)).toEqual(-1);
    });
    test('single entry, target present', () => {
        expect(binarySearch([10], 10)).toEqual(0);
    });
    test('single entry, target absent', () => {
        expect(binarySearch([-10], 0)).toEqual(-1);
    });
    test('two entries, target present', () => {
        expect(binarySearch([-7, -1], -1)).toEqual(1);
    });
    test('two entries, target absent', () => {
        expect(binarySearch([10, 20], 5)).toEqual(-1);
    });
    test('empty array', () => {
        expect(binarySearch([], 10)).toEqual(-1);
    });
});
