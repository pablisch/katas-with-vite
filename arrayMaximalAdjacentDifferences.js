// CodeSignal Intro - Island of Knowledge No.20

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

function solution(inputArray) {
  return inputArray.reduce((acc, curr, index) => {
    if (index > 0) {
      // console.log('this:', Math.abs(curr - inputArray[index - 1]))
      const diff = Math.abs(curr - inputArray[index - 1]);
      acc = diff > acc ? diff : acc;
    }
    return acc;
  }, 0)
}

// console.log(solution([2, 4, 1, 0]))