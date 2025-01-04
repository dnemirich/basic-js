const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const occurrences = {};
  const res = [];
  names.forEach(n => {
  if (!occurrences[n]) {
    occurrences[n] = 1;
    res.push(n);
  } else {
    let k = occurrences[n];
    let str = `${n}(${k})`;
    while (occurrences[str]) {
      k++;
      str = `${n}(${k})`;
    }
    occurrences[n] = k + 1;
    occurrences[str] = 1;
    res.push(str);
  }
  })
  return res
}

module.exports = {
  renameFiles
};
