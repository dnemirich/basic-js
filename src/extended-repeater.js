const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = {
    ...options,
    addition:
      options?.addition !== undefined ? String(options.addition) : ''
  };

  const s = String(str);

  let res = '';

  for (let i = 0; i < repeatTimes; i++) {
    res = res + str;
    if (addition.length !== 0) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        res = res + addition;
        if (j !== additionRepeatTimes - 1) {
          res = res + additionSeparator;
        }
      }
    }
    if (i !== repeatTimes - 1) {
      res = res + separator;
    }
  }

  return res;
}


module.exports = {
  repeater
};
