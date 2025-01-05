const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mRows = matrix.length;
  const mCols = matrix[0].length;
  const res = Array.from({ length: mRows }, () =>
    Array(mCols).fill(0)
  );
  const neighbours = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
  ];

  const checkNeighbours = (row, col) => {
    let counter = 0;
    neighbours.forEach(([nRow, nCol]) => {
      if (
        row + nRow < mRows &&
        row + nRow >= 0 &&
        col + nCol < mCols &&
        col + nCol >= 0
      ) {
        if (matrix[row + nRow][col + nCol]) {
          counter++;
        }
      }
    });
    return counter;
  };

  for (let row = 0; row < mRows; row++) {
    for (let column = 0; column < mCols; column++) {
      res[row][column] = checkNeighbours(row, column);
    }
  }

  return res;
}

module.exports = {
  minesweeper
};
