const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copy = [...arr].filter((el) => el !== -1).sort((a, b) => a - b);
  const idx = [];
  arr.forEach((el, i) => {
    if (el === -1) {
      idx.push(i);
    }
  });

  idx.forEach((i) => copy.splice(i, 0, -1));
  return copy;
}

module.exports = {
  sortByHeight
};
