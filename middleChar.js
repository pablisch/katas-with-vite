const getTheMiddleChar = (word) => {
  const evenAdjuster = word.length % 2 === 0 ? 1 : 0
  const numToRemove = Math.floor(word.length / 2 - evenAdjuster);
  return numToRemove > 0 ? word.slice(numToRemove).slice(0, -numToRemove) : word;
}

export default getTheMiddleChar;