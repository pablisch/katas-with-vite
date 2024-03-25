function multipleOfIndex(array) {
  return array.filter((num, index) => num % index === 0 | index === num);
}

console.log(multipleOfIndex([22,-6,32,82,9,25]))