const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let counter = 0;
  const mRows = matrix.length;
  const mCols = matrix[0].length;
  const zeroes = Array(mCols).fill(false);

  for (let r = 0; r < mRows; r++) {
    for (let c = 0; c < mCols; c++) {
      if (zeroes[c]) {
        continue;
      }
      counter += matrix[r][c];

      if (matrix[r][c] === 0) {
        zeroes[c] = true;
        continue;
      }
    }
  }

  return counter;
}

module.exports = {
  getMatrixElementsSum
};
