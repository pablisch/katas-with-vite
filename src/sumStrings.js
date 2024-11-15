const sumStringsMk1 = (num1, num2) => {
  return (+num1 + +num2).toString();
};

const sumStringsMk2 = (a, b) => {
  return String(Number(a) + Number(b));
}

const sumStringsMk3 = (a, b) => {
  return String(+a + +b);
}

const sumStrings = (a, b) => {
  return (+a + +b) + '';
}

export default sumStrings;