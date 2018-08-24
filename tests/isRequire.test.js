import isRequire from "../src/rules/isRequire"

test('"hi" considered required', () => {
    expect(isRequire(['hi'])).toBe(true);
});

test('"" consider not required', () => {
    expect(isRequire([''])).toBe(false);
});