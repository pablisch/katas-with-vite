import {getDerivative} from '../src/derivative.js';

describe('getDerivative()', () => {
  test.each([
    [7, 8, '56x^7'],
    [5, 9, '45x^8'],
  ])('should return the product and the exponent minus 1', (num1, num2, expectedOutput) => {
    // act
    const result = getDerivative(num1, num2);
    // assert
    expect(result).toBe(expectedOutput);
  })
})