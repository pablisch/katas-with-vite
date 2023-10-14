const highLowMk1 = (str) => {
  const arr = str.split(' ').map(num => +num);
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};

const highLowMk2 = (str) => {
  const arr = str.split(' ').map(Number);
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};

const highLow = (str) => {
  const arr = str.split(' ');
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};

export default highLow;

// when passed numerical strings, Math.max() and Math.min() treat them as numbers