import {jadenCase} from './jadenCase';

describe('jadenCase()', () => {
  test.each([
    ["How can mirrors be real if our eyes aren't real", "How Can Mirrors Be Real If Our Eyes Aren't Real"],
  ])('should return string with every word capitalised', (inputString, outputString) => {
    // Act
    const result = jadenCase(inputString);
    // Assert
    expect(result).toBe(outputString);
  })
})