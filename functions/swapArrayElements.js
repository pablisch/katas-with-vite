export const swapArrayElements = (array, index1, index2) => {
  const value1 = array[index1] // save this value before it is overwritten by splice
  array.splice(index1, 1, array[index2]); // replace first value with second value
  array.splice(index2, 1, value1); // replace second value with recorded first value
  return array;
}

// console.log(swapArrayElements([1, 2, 3, 4, 5, 6], 2, 4));