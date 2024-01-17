// if chunk is an integer with sum of cubes / 2
const sumOfCubeDivisibleChecker = (chunksArray) => {
  const modifiedChunksArray = chunksArray.map((chunk) => {
    let array = chunk.split("");

    const sum = array.reduce((acc, curr) => {
      acc += curr ** 3;
      return acc;
    }, 0);

    if (sum % 2 === 0) {
      return array.reverse();
    } else {
      const firstEl = array.shift();
      array = [...array, firstEl]
      // console.log(array)
      return array;
    }
    // chunk = 
  })
  console.log(modifiedChunksArray)
}



const chunkString = (str, sz) => {
  let chunks = [];
  while (str.length > sz) {
    if (str.length > sz) {
      const chunk = str.slice(0, sz);
      chunks.push(chunk);
      const newStr = str.replace(chunk, '')
      str = newStr;
    }
  }
  return chunks
}

function revrot(str, sz) {
  const chunks = chunkString(str, sz);
  sumOfCubeDivisibleChecker(chunks)
}

revrot("1234569876541", 6);