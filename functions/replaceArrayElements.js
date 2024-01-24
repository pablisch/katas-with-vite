// Exmaple array
const sampleArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// To replace a single element
export const replaceArrayElement = (array, index, value) => {
  array.splice(index, 1, value);
  return array
}

// To replace a single element returning the mutated array AND what was replaced
export const replaceArrayElementAndReturnReplaced = (array, index, value) => {
  const replacedElement = array.splice(index, 1, value);
  return [array, replacedElement]
}

// To replace multiple elements, an array of new elements must be given
export const replaceArrayElements = (array, index, values) => {
  array.splice(index, values.length, ...values);
  return array
}

// To replace multiple elements, an array of new elements must be given
export const replaceArrayElementsAndReturnReplaced = (array, index, values) => {
  const replacedElements = array.splice(index, values.length, ...values);
  return [array, replacedElements]
}

// console.log(replaceArrayElement(sampleArray, 2, 'Nov'));
// console.log(replaceArrayElementAndReturnReplaced(sampleArray, 2, 'Nov'));
// console.log(replaceArrayElements(sampleArray, 2, ['Oct', 'Nov', 'Dec']));
// console.log(replaceArrayElementsAndReturnReplaced(sampleArray, 2, ['Oct', 'Nov', 'Dec']));