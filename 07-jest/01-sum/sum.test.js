const sum = require('./sum');

describe('sum', () => {
    test('1 + 2 = 3', () => {
        expect(sum(1, 2)).toEqual(3);
    });
    test('10 + 200 = 210', () => {
        expect(sum(10, 200)).toEqual(210);
    });
});
