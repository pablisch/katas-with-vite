const reverseWordsMk1 = (phrase) => {
  const words = phrase.split(" ");
  const wordsOnly = words.map(word => word.trim()).filter(word => word !== '');
  
  return wordsOnly.reverse().join(" ");
};

const reverseWords = (phrase) => {
  return phrase.split(" ").map(w => w.trim()).filter(w => w !== '').reverse().join(" ");
};

export default reverseWords;