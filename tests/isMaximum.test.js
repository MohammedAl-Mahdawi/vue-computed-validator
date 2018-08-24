import isMaximum from "../src/rules/isMaximum"

test('[1, 2, 3] array has maximum 3 element', () => {
    expect(isMaximum([[1, 2, 3], 3])).toBe(true);
});

test('[1, 2, 3, 4] array exceed the maximum 2 element', () => {
    expect(isMaximum([[1, 2, 3, 4], 2])).toBe(false);
});

test('"Mohammed" has maximum 8 letters', () => {
    expect(isMaximum(["Mohammed", 8])).toBe(true);
});

test('"Al-Mahdawi" exceed the maximum 8 letters', () => {
    expect(isMaximum(["Al-Mahdawi", 8])).toBe(false);
});