import { translateDna } from "../src/dna.js";

describe('translateDna()', () => {
  test.each([
    ['GCAT', 'GCAU'],
    ['TGCAT', 'UGCAU'],
    ['TGCTTAT', 'UGCUUAU'],
    ['GCACGAG', 'GCACGAG'],
    ['', ''],
  ])('should return a string where T in the input string is replaced by U', (inputString, expectedResult) => {
    // Act
    const result = translateDna(inputString);

    // Assert
    expect(result).toBe(expectedResult);
  })
})
