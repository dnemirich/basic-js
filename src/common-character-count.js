const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  const countChars = (freq, curr) => {
    if (freq[curr]) {
      freq[curr] += 1;
    } else {
      freq[curr] = 1;
    }
    return freq;
  };
  const arr1Counts = arr1.reduce(countChars, {});
  const arr2Counts = arr2.reduce(countChars, {});
  let res = 0;

  for (let key of Object.keys(arr1Counts)) {
    if (arr2Counts[key]) {
      res += Math.min(arr1Counts[key], arr2Counts[key]);
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
