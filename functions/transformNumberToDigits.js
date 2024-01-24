export const numberToDigits = (number) => {
  return number.toString().split('').map(Number);
}

// console.log(numberToDigits(4523));