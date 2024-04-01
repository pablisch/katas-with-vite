export const countOccurrences = (array) => {
  const countObject = {};

  array.forEach((element) => {
    countObject[element] = (countObject[element] || 0) + 1;
  });

  return countObject;
};

console.log(countOccurrences(['and', 'the', 'cat', 'and', 'cat', 'cat', 'hen', 'and', 'cat']))