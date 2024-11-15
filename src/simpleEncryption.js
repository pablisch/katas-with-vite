const encrypt = (str, num) => {
  if (!str || num < 1) return str;
  for (let i = 0; i < num; i++) {
    const arr = str.split('');
    const odds = arr.filter((char, index) => index % 2 === 1);
    const evens = arr.filter((char, index) => index % 2 === 0);
    const encryptedString = odds.join('').concat(evens.join(''))
    str = encryptedString;
  }
  return str
}

const unencrypt = (str, num) => {
  if (!str || num < 1) return str;
  
  for (let i = 0; i < num; i++) {
    const arr = str.split('');
    const odds = arr.slice(0, Math.floor(arr.length / 2))
    const evens = arr.slice(Math.floor(arr.length / 2), arr.length)
    const unencryptedString = [];
    
    for (let j = 0; j < evens.length; j++) {
      unencryptedString.push(evens[j]);
      if (j < odds.length) unencryptedString.push(odds[j]);
    }
    str = unencryptedString.join('');
  }
  return str
}

console.log(encrypt('135024', 2))
console.log(unencrypt('012345', 2))