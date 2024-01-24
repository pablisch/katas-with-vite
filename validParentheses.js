// Leet code - EASY - No.20

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function (string) {
  let stack = [];
  for (let char of string) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (
        // if the stack is empty OR the last el of stack is not the matching open bracket
        !stack.length || 
        (char === ')' && stack[stack.length - 1] !== '(') || 
        (char === '}' && stack[stack.length - 1] !== '{') ||
        (char === ']' && stack[stack.length - 1] !== '[')
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length; // TRUE if stack is empty
};

var isValid2 = function (s) {
  let i;
  let foundPair;

  while (s.length > 0) {
    foundPair = false;
    for (i = 0; i < s.length; i++) {
      if (
        (s[i] === '(' && s[i + 1] === ')') ||
        (s[i] === '[' && s[i + 1] === ']') ||
        (s[i] === '{' && s[i + 1] === '}')
      ) {
        const found = s.slice(i, i + 2);
        s = s.replace(found, '');
        foundPair = true;
      }
    }
    if (foundPair === false) return false;
  }
  return true;
};

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid('{[]}'));
