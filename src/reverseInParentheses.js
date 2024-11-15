function solution(inputString) {
  const inputArray = inputString.split('');
  const parenIndices = getIndices(inputArray, ['(', ')']);
  let i = 0;

  while (inputArray.includes('(')) {
    if (inputArray[parenIndices[i]] === '(' && inputArray[parenIndices[i + 1]] === ')') {
      const section = inputArray.slice(parenIndices[i] + 1, parenIndices[i + 1]).reverse().slice();
      inputArray.splice(parenIndices[i], section.length + 2, '*', ...section, '*')
      parenIndices.splice(i, 2);
    }
    i = i < (parenIndices.length / 2) - 1 ? i + 1 : 0;
  }
  return inputArray.filter(item => item !== '*').join('')
}

function getIndices(array, targets) {
  return array.reduce((indices, curr, index) => {
    if (targets.includes(curr)) indices.push(index);
    return indices
  }, [])
}

// console.log(solution("(bar)"))
// console.log(solution("foo(bar)baz"))
// console.log(solution("foo(bar)baz(blim)"))
// console.log(solution("foo(bar(baz))blim"))