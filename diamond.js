export const diamond = (num) => {
  if (num % 2 === 0 || num < 1) return null;
  const diamondArray = []
  for (let i = num; i > 0; i -= 2) {
    if (i === num) {
      diamondArray.push(`${'*'.repeat(i)}\n`)
    } else {
      const line = `${' '.repeat(((num - i) / 2))}${'*'.repeat(i)}\n`
      diamondArray.push(line);
      diamondArray.unshift(line);
    }
  }
  return diamondArray.join('');
}