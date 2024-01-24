// codeSignal intro smoothsailing no.11
// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

function solution(n) {
  const numArray = n.toString().split('').map(Number);
  const halfnumOfNums = numArray.length / 2;
  const firstHalf = numArray.slice(0, halfnumOfNums);
  const secondHalf = numArray.slice(halfnumOfNums);
  const sumOfFirstHalf = firstHalf.reduce((acc, curr) =>  acc += curr, 0);
  const sumOfSecondHalf = secondHalf.reduce((acc, curr) => acc += curr, 0);
  return sumOfFirstHalf === sumOfSecondHalf;
}

// console.log(solution(1230), true);
// console.log(solution(239017), false);
