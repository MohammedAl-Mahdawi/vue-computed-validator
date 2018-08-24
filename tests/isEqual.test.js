import isEqual from "../src/rules/isEqual"

test('2 equal to 2', () => {
    expect(isEqual([2, 2])).toBe(true);
});

test('1 is not equal to 2', () => {
    expect(isEqual([1, 2])).toBe(false);
});