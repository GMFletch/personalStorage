function solution(matrix) {
  const returnSet = new Set();
  for (let row = 1, numRows = matrix.length; row < numRows; row++) {
    for (let col = 1, numCols = matrix[0].length; col < numCols; col++) {
      returnSet.add(
        (tempSquare =
          1000 * matrix[row - 1][col - 1] +
          100 * matrix[row - 1][col] +
          10 * matrix[row][col - 1] +
          matrix[row][col])
      );
    }
  }
  return returnSet.size;
}
