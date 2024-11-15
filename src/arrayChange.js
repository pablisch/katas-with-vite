// codeSignal intro - exploring the waters no.17

// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// solution(inputArray) = 3

function solution(inputArray) {
  let moves = 0;

  inputArray.forEach((num, index) => {
    if (index === 0) return;
    while (inputArray[index] <= inputArray[index - 1]) {
      inputArray[index]++;
      moves++;
    }
  });

  return moves;
}


// console.log(solution([1, 1, 1]));
// console.log(solution([-1000, 0, -2, 0]));
// console.log(solution([2, 1, 10, 1]));
