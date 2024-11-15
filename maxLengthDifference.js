export const getMaxDiff = (arr1, arr2) => {
  if (!arr1.length || !arr2.length) return '-1';

  const lengths1 = arr1.map(str => str.length);
  const lengths2 = arr2.map(str => str.length);

  const max1 = Math.max(...lengths1);
  const min1 = Math.min(...lengths1);
  const max2 = Math.max(...lengths2);
  const min2 = Math.min(...lengths2);

  return (Math.max(Math.abs(max1 - min2), Math.abs(min1 - max2))).toString();
}

// describe('getMaxDiff()', () => {
//   test.each([
//     [["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"], '13']
//   ])('should return a string of the maximum difference in length between the strings in the two input strings', (arr1, arr2, expectedResult) => {
//     // Act
//     const result = getMaxDiff(arr1, arr2);

//     // Assert
//     expect(result).toBe(expectedResult);
//   })
// })