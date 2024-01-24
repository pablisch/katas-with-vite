// codeSignal intro - exploring the waters no.18

// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

function solution(inputString) {
  // Create object of char counts
  // IF two or more counts are odd return FALSE
  // IF one or less counts are odd return TRUE

  const charCounts = {};
  for (let char of inputString) {
    charCounts[char] = (charCounts[char] || 0) + 1; 
  }

  let oddCount = 0;
  for (let char in charCounts) {
    charCounts[char] % 2 === 1 && oddCount++;
  }

  return oddCount < 2;
}

console.log(solution('abbcccddddccc'))