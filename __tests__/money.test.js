import calculateYears from '../src/money.js';

describe('calculateYears()', () => {
  test('should return the nimber of years needed to reach a set wealth', () => {
    // Arrange
    const principal = 1000;
    const interest = 0.05;
    const tax = 0.18;
    const desired = 1100;
    // Act
    const expectedYears = calculateYears(principal, interest, tax, desired);
    // Assert
    expect(expectedYears).toBe(3)
  })
})

describe('calculateYears()', () => {
  test.each([
    [1000, 0.05, 0.18, 1100, 3],
    [1000, 0.01625, 0.18, 1200, 14],
    [1000, 0.05, 0.18, 1000, 0]
  ])('should return the nimber of years needed to reach a set wealth', (principal, interest, tax, desired, expectedYears) => {
    // Act
    const actualYears = calculateYears(principal, interest, tax, desired);
    // Assert
    expect(actualYears).toBe(expectedYears)
  })
})