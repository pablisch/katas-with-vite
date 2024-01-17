export const findAllSubStrings = (string) => {
  let start;
  let end;
  let substringArray = [];

  for (start = 0; start < string.length; start++) {
    for (end = start + 1; end < string.length + 1; end++) {
      substringArray.push(string.slice(start, end));
    }
  }
  return substringArray;
}

// console.log(findAllSubStrings('and'))