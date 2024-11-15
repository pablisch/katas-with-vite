import { reverseParenthesis } from "../src/reverseParenthesis.js";

describe('reverseParenthesis()', () => {
  test.each([
    ['(bar)', 'rab'],
    ['foo(bar)baz', 'foorabbaz'],
    ['foo(bar)baz(blim)', 'foorabbazmilb'],
    ['foo(bar(baz))blim', 'foobazrabblim'],
    ['foo(bar(baz)foo)blim', 'foooofbazrabblim'],
    ['foo(bar(baz(blim)bar)foo)(blim)', 'foooofbazmilbbarrabmilb'],
  ])('should return string with values in parenthesis reversed', (inputString, expectedOutput) => {
    // Act
    const result = reverseParenthesis(inputString);
    // Assert
    expect(result).toBe(expectedOutput);
  })
})