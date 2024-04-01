const reverseOrRotateChunks = (str, sz) => {
  const chunks = [];
  const processedChunkArray = [];

  while (str.length >= sz) {
    chunks.push(str.slice(0, sz));
    str = str.slice(sz);
  }
  // console.log('chunks:', chunks);
  // console.log('left over:', str);

  chunks.forEach(chunk => {
    if (sumOfCubesIsEven(chunk)) {
      processedChunkArray.push(reverse(chunk))
    } else {
      processedChunkArray.push(rotate(chunk))
    }
  })

  return processedChunkArray.join('');
}

const reverse = (str) => {
  return str.split('').reverse().join('');
}

const rotate = (str) => {
  const firstChar = str.slice(0, 1);
  return str.slice(1) + firstChar;
}

const sumOfCubesIsEven = (str) => {
  const sum = str.split('').reduce((a, c) => a + Number(c), 0);
  return sum % 2 === 0;
}

describe('reverseOrRotateChunks()', () => {
  test.each([
    ["123456987654", 6, "234561876549"],
    ["123456987653", 6, "234561356789"],
    ["66443875", 4, "44668753"],
    ["66443875", 8, "64438756"],
  ])('should return a modified string where chunks of X size have been reversed or rotated', (inputStr, chunkSize, expectedOutput) => {
    // Act
    const result = reverseOrRotateChunks(inputStr, chunkSize);

    // Assert
    expect(result).toBe(expectedOutput);
  })
})

describe('reverse()', () => {
  test.each([
    ["12354","45321"],
    ["",""],
    ["3781","1873"],
  ])('should return a reversed string', (inputStr, expectedOutput) => {
    // Act
    const result = reverse(inputStr);

    // Assert
    expect(result).toBe(expectedOutput);
  })
})

describe('rotate()', () => {
  test.each([
    ["12354","23541"],
    ["81","18"],
    ["3781","7813"],
  ])('should return a string rotated to the left', (inputStr, expectedOutput) => {
    // Act
    const result = rotate(inputStr);

    // Assert
    expect(result).toBe(expectedOutput);
  })
})

describe('sumOfCubesIsEven()', () => {
  test.each([
    ["12354", false],
    ["81", false],
    ["3781", false],
    ["3781269", true],
    ["1111", true],
    ["2464", true],
  ])('should true if the sum of the cubes of the digits is divisible by 2', (inputStr, expectedBoolean) => {
    // Act
    const result = sumOfCubesIsEven(inputStr);

    // Assert
    expect(result).toBe(expectedBoolean);
  })
})
