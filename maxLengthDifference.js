export const getMaxDiff = (arr1, arr2) => {
  if (!arr1.length || !arr2.length) return '-1';

  const lengths1 = arr1.map(str => str.length);
  const lengths2 = arr2.map(str => str.length);

  const max1 = Math.max(...lengths1);
  const min1 = Math.min(...lengths1);
  const max2 = Math.max(...lengths2);
  const min2 = Math.min(...lengths2);

  return (Math.max(Math.abs(max1 - min2), Math.abs(min1 - max2))).toString();
}