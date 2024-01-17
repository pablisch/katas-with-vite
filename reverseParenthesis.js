export const reverseParenthesis = (string) => {
  if (!string.split('').includes('(')) return string

  let stringArray = string.split('');
  let i = 0;

  while (stringArray.includes('(')) {
    // build/rebuild array of ALL parenthesis indices
    let parenIndices = [];
    stringArray.forEach((item, index) => {
      if (item === '(' || item === ')') parenIndices.push(index);
    });

    // check if '(' is follwed by ')'
    if (stringArray[parenIndices[i]] === '(' && stringArray[parenIndices[i + 1]] === ')') {
      const reversedSubstringArray = stringArray.slice(parenIndices[i], (parenIndices[i + 1]) + 1).reverse();
      // substitute parenthesis for whitespace and old values for new reversed values
      reversedSubstringArray.forEach((item, index) => {
        if (index === 0 || index === reversedSubstringArray.length - 1) {
          stringArray[parenIndices[i] + index] = '';
          return;
        }
        stringArray[[parenIndices[i] + index]] = item;
      })
      // if no '()' match, increment 'i' for the next run
    } else {
      i = (i < (parenIndices.length / 2) - 1) ? i + 1 : 0;
    }
  }
  return stringArray.join('');
}
