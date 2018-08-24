import isIqMobile from "../src/rules/isIqMobile"

test('0770-535-7355 is Iraqi number', () => {
    expect(isIqMobile(['0770-535-7355'])).toBe(true);
});

test('0770.535.7355 is Iraqi number', () => {
    expect(isIqMobile(['0770.535.7355'])).toBe(true);
});

test('07705357355 is Iraqi number', () => {
    expect(isIqMobile(['07705357355'])).toBe(true);
});

test('0970-535-7355 is not Iraqi number', () => {
    expect(isIqMobile(['0970-535-7355'])).toBe(false);
});