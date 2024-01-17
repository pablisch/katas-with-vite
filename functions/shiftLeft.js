export const shiftArrayLeft = (array) => {
  const firstElement = array.shift();
  array.push(firstElement);
  return array
}

export const shiftStringLeft = (string) => {
  const firstChar = string.charAt(0);
  return string.substring(1) + firstChar;
}

// console.log(shiftArrayLeft([1,2,3]))
// console.log(shiftStringLeft('123'))

export const shiftArrayLeftByN = (array, shiftDistance) => {
  for (let i = 0; i < shiftDistance; i++) {
    const firstElement = array.shift();
    array.push(firstElement);
  }
  return array
}

export const shiftStringLeftByN = (string, shiftDistance) => {
  const startSubstring = string.substring(0, shiftDistance);
  return string.substring(shiftDistance) + startSubstring;
}

// console.log(shiftArrayLeftByN([1,2,3,4,5,6], 4))
// console.log(shiftStringLeftByN('123456', 4))