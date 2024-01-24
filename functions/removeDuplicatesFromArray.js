// creating a Set allows only unique values, then the spread operator is used to turn it back to an array
export const removeDuplicatesFromArray1 = (array) => {
  const uniqueSet = new Set(array);
  return [...uniqueSet];
}

// creates a new array using only elements who have the index of the first occurence of that value in the original array
export const removeDuplicatesFromArray2 = (array) => {
  return array.filter((value, index, self) => self.indexOf(value) === index);
};

// creates a new array where values are added only if they do not already exist
export const removeDuplicatesFromArray = (array) => {
  return array.reduce((uniqueArray, current) => {
    if (!uniqueArray.includes(current)) {
      uniqueArray.push(current);
    }
    return uniqueArray;
  }, []);
};

// console.log(removeDuplicatesFromArray([1,2,1,3,1,2,1,4,2,1,5]))
// console.log(removeDuplicatesFromArray(['Hello', 'World', 'World', 'Hello', 'World']))