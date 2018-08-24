import isEmail from "../src/rules/isEmail"

test('name@example.com is email', () => {
    expect(isEmail(['name@example.com'])).toBe(true);
});

test('name@examplecom is not email', () => {
    expect(isEmail(['name@examplecom'])).toBe(false);
});