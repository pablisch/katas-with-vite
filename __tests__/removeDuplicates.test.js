import {removeDuplicates} from '../src/removeDuplicates.js';

describe('removeDuplicates()', () => {
  test.each([[[1,1,2], [1,2]], [[1,2,1,1,3,2], [1,2,3]]])('should return an array of uniques non-negative integers', (inputArray, outputArray) => {
    // Act
    const result = removeDuplicates(inputArray);
    // Assert
    expect(result).toEqual(outputArray);
  })
})