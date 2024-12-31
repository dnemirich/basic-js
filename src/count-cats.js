const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((acc, arr) => {
    const innerSum = arr.reduce((innerAcc, el) => {
      innerAcc += el === '^^' ? 1 : 0;
      return innerAcc;
    }, 0);
    return acc + innerSum;
  }, 0);
}

module.exports = {
  countCats
};
