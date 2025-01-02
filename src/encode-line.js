const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let counter = 1;

  if (str.length === 0) return str;

  for (let i = 1; i < str.length; i++) {

    if (str[i] === str[i - 1]) {
      counter++;
    } else {
      res += (counter === 1) ? str[i - 1] : counter + str[i - 1];
      counter = 1;
    }
  }

  res += counter === 1 ? str[str.length - 1] : counter + str[str.length - 1];

  return res;
}

module.exports = {
  encodeLine
};
