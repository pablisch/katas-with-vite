import smallEnough from './smallEnough.js';

describe('smallEnough()', () => {
  test('should return true when the limit is not exceeded', () => {
    expect(smallEnough([1, 2, 3, 4, 5], 6)).toBe(true);
    expect(smallEnough([13, 222, 300, 400, 500], 501)).toBe(true);
    expect(smallEnough([11, 22, 33, 44, 55], 60)).toBe(true);
  });

  test('should return false when the limit is exceeded', () => {
    expect(smallEnough([1, 2, 3, 4, 5], 4)).toBe(false);
    expect(smallEnough([13, 222, 300, 400, 500], 499)).toBe(false);
    expect(smallEnough([11, 22, 33, 44, 55], 13)).toBe(false);
  });
});