const factorial = (num) => {
  if (num > 12 || num < 0) throw new RangeError("RangeError");
  if (num === 0) return 1;
  return ([...Array(num).keys()].map(key => key += 1)).reduce((acc, curr) => acc * curr, 1);
};

export default factorial;

// [...Array(4).keys()] => [ 0, 1, 2, 3 ]
  
// [...Array(4).keys()].map(key => key += 1) => [ 1, 2, 3, 4 ]

// the .reduce((acc, curr) => acc * curr, 1) multiplies all the array elements together


// THE WAY TO DO IT USING FACTORIAL!!!
// function factorial(n) {
//   if (n < 0 || n > 12)
//     throw new RangeError();
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }

const input = 5;

console.log(
  input * factorial(input -1)
)
console.log(
  factorial(input)
)