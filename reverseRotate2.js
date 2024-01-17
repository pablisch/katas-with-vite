const sumOfCubesIsEven = (array) => {
  const sumOfCubes = array.reduce((acc, curr) => {
    acc += curr ** 3;
    return acc;
  }, 0);
  return sumOfCubes % 2 === 0;
};

const chunkString = (str, sz) => {
  let chunks = [];
  while (str.length > sz) {
    const chunk = str.slice(0, sz);
    chunks.push(chunk.split(''));
    const newStr = str.replace(chunk, '');
    str = newStr;
  }
  return chunks;
};

function revRot(str, sz) {
  const chunks = chunkString(str, sz);
  chunks.map((chunk) => {
    if (sumOfCubesIsEven(chunk)) {
      chunk.reverse();
    } else {
      const firstEl = chunk.shift();
      chunk.push(firstEl);
    }
  });
  return chunks.flat().join('');
}

console.log(revRot('1234569876541', 6));
