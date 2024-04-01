const sortNums = (arr) => {
  return (!arr) ? [] : arr.sort((a, b) => a - b);
}

console.log(sortNums([1, 2, 10, 50, 5]));
console.log(sortNums(null));