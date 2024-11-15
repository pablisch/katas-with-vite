export const matrixSum = (matrix) => {
  const cols = matrix[0].length;
  const rows = matrix.length;
  let count = 0;
  let occupied = true;

  for (let col = 0; col < cols; col++) {
    occupied = true;
    for (let row = 0; row < rows; row++) {
      if (matrix[row][col] === 0) occupied = false;
      if (occupied) count += matrix[row][col];
    }
  }

  return count;
}