const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    if (arr.length === 0) return counter;

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        counter = Math.max(counter, this.calculateDepth(el) + 1);
      }
    });

    return counter;
  }
}

module.exports = {
  DepthCalculator
};
