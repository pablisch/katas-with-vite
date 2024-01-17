import {countChars} from './countChars';

describe('countChars()', () => {
  test.each([
    ['aba', {'a': 2, 'b': 1}],
    ['abacus', {'a': 2, 'b': 1, 'c': 1, 'u': 1, 's': 1}],
  ])('should return an object with a count of each char in the input string', (string, expectedObject) => {
    // Act
    const result = countChars(string);
    // Assert
    expect(result).toEqual(expectedObject);
  })
})