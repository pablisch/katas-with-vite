export const isPalindrome = (string) => {
  return string === string.split('').reverse().join('');
}

// BELOW operates directly on the string.
// It has little performance advantage and is not as readable imho

export const isPalindrome2 = (string) => {
  const length = string.length;

  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }

  return true;
};

// console.log('racecar', isPalindrome('racecar'));
// console.log('racecart', isPalindrome('racecart'));
// console.log('racecar', isPalindrome2('racecar'));
// console.log('racecart', isPalindrome2('racecart'));


