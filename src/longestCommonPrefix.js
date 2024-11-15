// Leet code - EASY - No.14

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  let prefix;
  const shortestLength = strs.reduce((acc, curr) => acc = curr.length >= acc ? acc : curr.length)
  for (let s = shortestLength; s >= 0; s--) {
    let possible = true;
    let prefix = strs[0].slice(0, s);
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].slice(0, s) !== prefix) possible = false;
    }
    if (possible === true) return prefix;
  }
};

// rewrite this with .every() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));