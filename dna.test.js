import { translateDna } from "./dna";

decribe('translateDna()', () => {
  test.each([])('should return a string where T in the input string is replaced by U', (inputString, expectedResult) => {
    // Act
    const result = translateDna(inputString);

    // Assert
    expect(result).toBe(expectedResult);
  })
})