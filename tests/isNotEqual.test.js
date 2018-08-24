import isNotEqual from "../src/rules/isNotEqual"

test('2 not equal to 4', () => {
    expect(isNotEqual([2, 4])).toBe(true);
});

test('5 equal to 5', () => {
    expect(isNotEqual([5, 5])).toBe(false);
});