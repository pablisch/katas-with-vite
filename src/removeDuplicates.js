// Using Set
export const removeDuplicates = (array) => {
  // let uniqueArray = Array.from(new Set(array))
  // return uniqueArray

  // return Array.from(new Set(array))

  return [...new Set(array)]
}

// Using reduce
export const removeDuplicates2 = (array) => {
  let uniqueArray = array.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  return uniqueArray
}

