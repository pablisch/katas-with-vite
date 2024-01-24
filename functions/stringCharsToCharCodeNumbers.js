const charsToNumbers = (string) => {
  const stringPositions = [];

  for (let char in string) {
    stringPositions.push(string.toUpperCase().charCodeAt(char) - 64)
  }
  
  return stringPositions.join(' ')
}