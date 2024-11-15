import { getFirstNElements } from '../src/firstNElements.js';

describe('getFirstNElements()', () => {
  test.each([[[0, 1, 2, 3, 5, 8, 13], 3, [0, 1, 2]]])(
    'returns an array of the first n elements of the input array',
    (inputArray, n, expectedResult) => {
      // Act
      const result = getFirstNElements(inputArray, n);

      //Assert
      expect(result).toEqual(expectedResult);
    }
  );
});
