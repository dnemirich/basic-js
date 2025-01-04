const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digitArr = n.toString().split('');
  const combArr = [];
  digitArr.forEach((d, idx) => {
    const copy = [...digitArr];
    copy.splice(idx, 1);
    combArr.push(parseInt(copy.join('')))
  })
  return Math.max(...combArr);
}

module.exports = {
  deleteDigit
};
