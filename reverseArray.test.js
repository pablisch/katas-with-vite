import reverseArray from './reverseArray';
import { test, describe, expect } from 'vitest';

describe('reverseArray', () => {
  test('should return the input array in reverse order', () => {
    const input = [1, 2, 3, 4];
    const result = reverseArray(input);
    expect(result).toEqual([4, 3, 2, 1]);
  });
});