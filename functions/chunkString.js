export const chunkString = (string, chunkSize) => {
  let chunkArray = [];

  while (string.length > chunkSize) {
    // get chunk and push it into the array
    const chunk = string.slice(0, chunkSize);
    chunkArray.push(chunk.split(''));
    // remove the chunk from the string ready for the next chunking
    string = string.slice(chunkSize);
  }
  return chunkArray;
}

// console.log(chunkString('abcdefghijklmnopqrstuvwxyz', 5))

// 👆🏼 ABOVE only returns full chunks, i.e. of the given chunksize and ignores
// anything left over.

// 👇🏻 BELOW chunks to the specified size but also returns anything left over

export const chunkStringLeftovers = (string, chunkSize) => {
  let chunkArray = [];

  while (string.length > 0) {
    // get chunk and push it into the array
    const chunk = string.slice(0, chunkSize);
    chunkArray.push(chunk.split(''));
    // remove the chunk from the string ready for the next chunking
    string = string.slice(chunkSize);
  }
  return chunkArray;
}

// console.log(chunkStringLeftovers('abcdefghijklmnopqrstuvwxyz', 5))