import getTheMiddleChar from './middleChar';

describe('getTheMiddleChar()', () => {
  test.each([['test', 'es'], ['testing', 't'], ['middle', 'dd'], ['A', 'A']])('should the middle char/s of a word', (word, expectedString) => {
    // Act
    const result = getTheMiddleChar(word);
    // Assert
    expect(result).toBe(expectedString)
  })
})