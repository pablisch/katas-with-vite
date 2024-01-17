import { matrixSum } from './matrixSum';

describe('matrixSum()', () => {
  test.each([
    [[[0, 1, 1, 2], 
    [0, 5, 0, 0], 
    [2, 0, 3, 3]], 9],
    [[[1, 1, 1, 0], 
    [0, 5, 0, 1], 
    [2, 1, 3, 10]], 9],
    [[[4,0,1], 
    [10,7,0], 
    [0,0,0], 
    [9,1,2]], 15],
    [[[1]], 1],
  ])('should retrun the sum of all valid room values in a matrix', (matrix, expectedSum) => {
    expect(matrixSum(matrix)).toBe(expectedSum);
  })
});
