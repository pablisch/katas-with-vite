const findLongestStringLength = (array) => {
  let maxLength = 0;
  array.forEach(string => {
    string.length > maxLength && (maxLength = string.length);
  })
  return maxLength;
}

export const longestStrings = (array) => {
  const longestStringLength = findLongestStringLength(array);
  return array.filter(string => string.length === longestStringLength)
}