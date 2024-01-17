import { longestStrings } from "./longestStrings";

describe('longestStrings()', () => {
  test.each([
    [["aba", "aa", "ad", "vcd", "aba"], ["aba", "vcd", "aba"]],
    [["abacaba", 
    "abacab", 
    "abac", 
    "xxxxxx"], ["abacaba"]],
  ])('should return an array of the longest strings from the input array', (inputArray, expectedOutputArray) => {
    expect(longestStrings(inputArray)).toEqual(expectedOutputArray);
  })
})