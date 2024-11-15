export const roundUpToFive = (num) => {
  const roundedNum = Math.ceil(num / 5) * 5;
  return roundedNum === -0 ? 0 : roundedNum;
}