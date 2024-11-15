import {increasingSequence} from '../src/increasingSequence.js';

describe('increasingSequence()', () => {
  test.each([
    // [[1,2,3,4,5], true],
    // [[1,8,3,4,5], true],
    // [[1,4,3,5,2], false],
    // [[1,3,5,2,9], true],
    // [[1,3,3,2,9], false],
    // [[1,2,2,2], false],
    // [[123, -17, -5, 1, 2, 3, 12, 43, 45], true],
    [[3, 6, 5, 8, 10, 20, 15], false],
  ])('should ', (sequence, expectedBoolean) => {
    expect(increasingSequence(sequence)).toBe(expectedBoolean)
  });
});