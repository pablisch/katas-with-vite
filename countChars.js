export const countChars2 = (string) => {
  const countObject = {};
  for (const char of string) {
    countObject[char] = (countObject[char] || 0) + 1;
  }
  return countObject;
}
// NOTE: I came to understand the above syntax but do not find it very readable
// With the line, countObject[char] = (countObject[char] || 0) + 1;
// the second, countObject[char], attempts to get the value of that char count
// if it cannot find it, then the OR operator allows a 0 value.
// In other words, (countObject[char] || 0) means the char count if avaiable, otherwise, 0.
// In the end, countObject[char] equals it's current cont plus one, or 0 + 1 if there was no previous count.

// Below is a less concise but more readable version...

export const countChars3 = (string) => {
  const countObject = {};
  for (const char of string) {
    // countObject[char] = (countObject[char] || 0) + 1;
    countObject[char] = countObject[char] ? countObject[char] + 1 : 1
  }
  return countObject;
}

// or even...

export const countChars = (string) => {
  const countObject = {};
  for (const char of string) {
    // countObject[char] = (countObject[char] || 0) + 1;
    // countObject[char] = countObject[char] ? countObject[char] + 1 : 1
    if (countObject[char]) {
      countObject[char] += 1
    } else {
      countObject[char] = 1
    }
  }
  return countObject;
}