import isMinimum from "../src/rules/isMinimum"

test('[1, 2, 3] array has at least 3 element', () => {
    expect(isMinimum([[1, 2, 3, 4, 5], 3])).toBe(true);
});

test('"Mohammed" string has at least 3 letters', () => {
    expect(isMinimum(["Mohammed", 3])).toBe(true);
});

test('[1, 2, 3] array does not have at least 4 element', () => {
    expect(isMinimum([[1, 2, 3], 4])).toBe(false);
});

test('"Al-Mahdawi" does not have at least 12 letters', () => {
    expect(isMinimum(["Al-Mahdawi", 12])).toBe(false);
});