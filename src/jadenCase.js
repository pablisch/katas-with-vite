export const jadenCase1 = (string) => {
  const wordArray = string.split(' ');
  const jadenisedArray = wordArray.map(word => word = word[0].toUpperCase() + word.slice(1))
  return jadenisedArray.join(' ')
}

export const jadenCase2 = (string) => {
  const wordArray = string.split(' ');
  return wordArray.map(word => word = word[0].toUpperCase() + word.slice(1)).join(' ')
}

export const jadenCase = (string) => {
  return string.split(' ').map(word => word = word[0].toUpperCase() + word.slice(1)).join(' ')
}