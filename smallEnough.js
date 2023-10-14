const smallEnoughMk1 = (array, limit) => {
  for (const number of array) {
    if (number > limit) {
      return false;
    }
  };
  return true
};

const smallEnough = (array, limit) => {
  return Math.max(...array) <= limit;
}

export default smallEnough;