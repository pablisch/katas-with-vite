// create an array of indices where a certain VALUE is positioned in original ARRAY

// Using reduce with a simple IF
export const makeArrayOfIndices = (array, value) => {
  return array.reduce((indices, curr, index) => {
    if (curr === value) indices.push(index);
    return indices;
  }, []);
};

// Using reduce with a ternary
export const makeArrayOfIndices2 = (array, value) => {
  return array.reduce((indices, curr, index) => (curr === value ? indices.concat(index) : indices), []);
};

// Using forEach
export const makeArrayOfIndices3 = (array, value) => {
  const indicesArray = [];
  array.forEach((item, index) => {
    if (item === value) indicesArray.push(index);
  });
  return indicesArray;
};

// console.log(makeArrayOfIndices([1, 2, 1, 4, 5, 6, 1, 6, 5, 7, 5, 1], 5));
