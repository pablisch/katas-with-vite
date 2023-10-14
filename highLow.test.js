import highLow from './highLow';

describe('highLow', () => {
  test('should return two numbers separated by a single space, high to low', () => {
    expect(highLow("1 2 3 4")).toBe("4 1");
    expect(highLow("4 5 6")).toBe("6 4");
    expect(highLow("36 3 2 56 102")).toBe("102 2");
    expect(highLow("1000 2000 3 13 5600 25")).toBe("5600 3");
  });
});