import sumDigits from '../src/sumDigits.js';

describe('sumDigits()', () => {
  test("should return the sum of a number's digits", () => {
    expect(sumDigits(11)).toBe(2);
    expect(sumDigits(111)).toBe(3);
    expect(sumDigits(110)).toBe(2);
    expect(sumDigits(161)).toBe(8);
    expect(sumDigits(-161)).toBe(8);
  });
});