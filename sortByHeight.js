export function solution(a) {
  const treeIndices = [];
  a.forEach((item, index) => {
    if (item === -1) treeIndices.push(index);
  })
  let sorted = a.filter(item => item !== -1).sort((a, b) => a - b);
  treeIndices.forEach(tree => {
    sorted = [...sorted.slice(0, tree), -1, ...sorted.slice(tree)];
  })
  return sorted
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))