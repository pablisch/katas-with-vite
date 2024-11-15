import { diamond } from '../src/diamond.js';

describe('diamond()', () => {
  test.each([
    [3, " *\n***\n *\n"],
    [2, null],
    [5, "  *\n ***\n*****\n ***\n  *\n"],
    [-3, null],
    [1, "*\n"]
  ])('should return a string that forms a diamond pattern of asterisks', (num, expectedString) => {
    // Act
    const result = diamond(num);
    // Assert
    expect(result).toBe(expectedString);
  })
})