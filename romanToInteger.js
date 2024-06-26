// Leet code - EASY - No.13

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
  const numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let count = 0;
  for (let key in numerals) {
    while (s.indexOf(key) === 0) {
      count += numerals[key];
      s = s.replace(key, '');
    }
  }
  return count;
};

var romanToInt = function(s) {
  const sym = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

let result = 0;

for (let i = 0; i < s.length; i++) {
  const cur = sym[s[i]];
  const next = sym[s[i + 1]];

  if (cur < next) {
    result += next - cur;
    i++;
  } else {
    result += cur;
  }
}

return result;
};

var romanToInt3 = function(s) {
  const numerals = {
    M: 1000,
    m: 900,
    D: 500,
    d: 400,
    C: 100,
    c: 90,
    L: 50,
    l: 40,
    X: 10,
    x: 9,
    V: 5,
    v: 4,
    I: 1,
  }
  let count = 0;
  s = s.replace('CM', 'm').replace('CD', 'd').replace('XC', 'c').replace('XL', 'l').replace('IX', 'x').replace('IV', 'v');
  for (let key in numerals) {
    while (s.indexOf(key) === 0) {
      count += numerals[key];
      s = s.replace(key, '');
    }
  }
  return count;
};

// console.log(romanToInt("MCMXCIV"));