export const insertIntoArrayAtIndex = (array, item, index) => {
  if (index > array.length) {
    console.error('⛔️ The provided index is greater than the length of the array. The item has been added to the end.')
  }
  return [...array.slice(0, index), item, ...array.slice(index)];
}

// console.log(insertIntoArrayAtIndex([1,2,3,4,5], 'Hello', 3))