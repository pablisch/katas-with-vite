import { getLength, getFirst, getLast, pushElement, pushElement2, popElement, popElement2 } from '../src/basicDataTypes.js';

describe('getLength()', () => {
  test('should return the length of an array', () => {
    const input = [1, 2, 3];
    const result = getLength(input);
    expect(result).toBe(3);
  });

  test('should return the length of an array', () => {
    const input = [];
    const result = getLength(input);
    expect(result).toBe(0);
  });
});

describe('getFirst()', () => {
  test('should return the first element of an array', () => {
    const input = [1, 2, 3];
    const result = getFirst(input);
    expect(result).toBe(1);
  });

  test('should return the first element of an array', () => {
    const input = [2, 3, 4, 5, 6];
    const result = getFirst(input);
    expect(result).toBe(2);
  });

  test('should return undefined when input is an empty array', () => {
    const input = [];
    const result = getFirst(input);
    expect(result).toBe(undefined);
  });
});

describe('getLast()', () => {
  test('should return the last element of an array', () => {
    const input = [1, 2, 3];
    const result = getLast(input);
    expect(result).toBe(3);
  });

  test('should return the last element of an array', () => {
    const input = [1, 2, 3, 4, 5];
    const result = getLast(input);
    expect(result).toBe(5);
  });

  test('should return undefined when input is an empty array', () => {
    const input = [];
    const result = getLast(input);
    expect(result).toBe(undefined);
  });
});

describe('pushElement()', () => {
  test('should push an element into an array', () => {
    const input = [1, 2, 3];
    const result = pushElement(input);
    expect(result).toEqual([1, 2, 3, 1]);
  });

  test('should push an element into an array', () => {
    const input = [2, 3, 4, 5, 6];
    const result = pushElement(input);
    expect(result).toEqual([2, 3, 4, 5, 6, 1]);
  });
});

describe('pushElement2()', () => {
  test('should push an element into an array', () => {
    const input = [1, 2, 3];
    const result = pushElement2(input);
    expect(result).toEqual([1, 2, 3, 1]);
  });

  test('should push an element into an array', () => {
    const input = [2, 3, 4, 5, 6];
    const result = pushElement2(input);
    expect(result).toEqual([2, 3, 4, 5, 6, 1]);
  });
});

describe('popElement()', () => {
  test('should remove the last element from an array', () => {
    const input = [1, 2, 3];
    const result = popElement(input);
    expect(result).toEqual([1, 2]);
  });

  test('should remove the last element from an array', () => {
    const input = [2, 3, 4, 5, 6];
    const result = popElement(input);
    expect(result).toEqual([2, 3, 4, 5]);
  });
});

describe('popElement2()', () => {
  test('should remove the last element from an array', () => {
    const input = [1, 2, 3];
    const result = popElement2(input);
    expect(result).toEqual([1, 2]);
  });

  test('should remove the last element from an array', () => {
    const input = [2, 3, 4, 5, 6];
    const result = popElement2(input);
    expect(result).toEqual([2, 3, 4, 5]);
  });
});