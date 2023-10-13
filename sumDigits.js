const sumDigitsMk1 = (num) => {
  return (num + '').split('').reduce((acc, curr) => acc += +curr, 0);
};

const sumDigits = (num) => {
  return String(num).split('').reduce((acc, curr) => {
    if (!isNaN(+curr)) {
      acc += +curr;
    }
    return acc;
  }, 0); 
};


export default sumDigits;