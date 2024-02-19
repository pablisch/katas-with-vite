import { describe } from 'vitest';
import { roundUpToFive } from './roundUpToFive';

describe('roundUpToFive()', () => {
  test.each([
    [0, 0],
    [2, 5],
    [3, 5],
    [12, 15],
    [30, 30],
    [-2, 0],
    [-5, -5],
  ])(
    'should return the the input rounded up to the nearest mulitple of 5',
    (num, expectedNum) => {
      expect(roundUpToFive(num)).toBe(expectedNum);
    }
  );
});
