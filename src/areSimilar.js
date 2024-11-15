// codeSignal intro - exploring the waters no.16

// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// solution(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// solution(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// solution(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

function solution(a, b) {
  const comparison = a.map((item, index) => item === b[index]);
  const mismatches = comparison.filter(bool => bool === false).length;

  if (mismatches === 0) return true;
  if (mismatches !== 2) return false;

  const swaps = comparison.reduce((acc, curr, index) => {
    if (curr === false) acc.push({ index: index, value: a[index]});
    return acc;
  }, [])

  a.splice(swaps[0].index, 1, swaps[1].value);
  a.splice(swaps[1].index, 1, swaps[0].value);
  return JSON.stringify(a) === JSON.stringify(b);
}

// console.log(solution([1, 2, 3], [1, 2, 3]))
// console.log(solution([1, 2, 3], [2, 1, 3]))
// console.log(solution([1, 2, 2], [2, 1, 1]))
// console.log(solution([1, 1, 4], [1, 2, 3]))