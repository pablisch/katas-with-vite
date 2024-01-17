import keepHydarating from './keepHydarating';

describe('keepHydarating', () => {
  test('should return the correct amount of water to hydrate rounded down', () => {
    expect(keepHydarating(3)).toBe(1);
    expect(keepHydarating(6.7)).toBe(3);
    expect(keepHydarating(11.8)).toBe(5);
  });
});