import isIqZip from "../src/rules/isIqZip"

test('10001 is Iraqi Zip', () => {
    expect(isIqZip(['10001'])).toBe(true);
});

test('236 is not Iraqi Zip', () => {
    expect(isIqZip(['236'])).toBe(false);
});