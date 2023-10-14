import factorial from './factorial';

describe('factorial', () => {
  test('should return the factorial of an input from 1 to 12', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
    expect(factorial(12)).toBe(479001600);
  });
  
  test('should throw a RangeError if the input is less than 0 or more than 12', () => {
    expect(() => factorial(13)).toThrow("RangeError");
    expect(() => factorial(100)).toThrow("RangeError");
    expect(() => factorial(-1)).toThrow("RangeError");
    expect(() => factorial(-12)).toThrow("RangeError");
  });
  
  test('should return 1 if the input is 0', () => {
    expect(factorial(0)).toBe(1);
  });
});