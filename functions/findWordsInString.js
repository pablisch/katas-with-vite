// This function uses regex that preserves apostrophes and hyphens
export const findWordsInString = (string) => {
  const wordsArray = string.split(/[^a-zA-Z0-9'\-]/);
  return wordsArray.filter(word => word !== '');
}

// console.log(findWordsInString("Hello I'm a   blue-green teapot!"))