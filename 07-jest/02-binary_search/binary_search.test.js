const binarySearch = require('./binary_search');

describe('binarySearch', () => {
    test('odd number of entries, target present', () => {
        const array = [1, 2, 3, 4, 5];
        expect(binarySearch(array, 3)).toEqual(2);
    });
    test('odd number of entries, target absent', () => {
        const array = [1, 2, 3, 4, 5];
        expect(binarySearch(array, 10)).toEqual(-1);
    });
});
