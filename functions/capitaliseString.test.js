import { capitaliseString } from './capitaliseString';

describe('capitaliseString()', () => {
  test.each([
    ['mAny woRDs', 'Many Words'],
    ['RETURN OF THE KING', 'Return of the King'],
    ['tHe shiniNg', 'The Shining'],
    ['in the heat of the niGHT', 'In the Heat of the Night'],
  ])(
    'returns input string capitalised except small words',
    (inputString, expectedResult) => {
      // Act
      const result = capitaliseString(inputString);

      //Assert
      expect(result).toEqual(expectedResult);
    }
  );
});