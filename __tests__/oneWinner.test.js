import {declare_winner, Fighter} from '../src/oneWinner.js';

describe('declare_winner()', () => {
  test.each([
    [new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew", "Lew"],
    [new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry", "Harry"],
    [new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry", "Harald"],
  ])('should return the winner between two fighters', (Fighter1, Fighter2, firstAttacker, expectedWinner) => {
    // Act
    const result = declare_winner(Fighter1, Fighter2, firstAttacker);
    // Assert 
    expect(result).toBe(expectedWinner)
  })
})

describe('declare_winner()', () => {
  test('should return the winner between two fighters', () => {
    // Act
    const result = declare_winner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew");
    // Assert 
    expect(result).toBe('Lew')
  })
})