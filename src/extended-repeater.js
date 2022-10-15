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
  let repStr = '';
  if (options.repeatTimes != undefined) {}
  for (let i = 0; i < options.repeatTimes; i++) {
     repStr += str;
     if (options.addition != undefined) {
       for (let j = 0; j < options.additionRepeatTimes; j++) {
        repStr += options.addition;
         if (j < options.additionRepeatTimes - 1) {
          repStr += options.additionSeparator;
        }
     }
    }
    if (options.separator != undefined) {
     if (i < options.repeatTimes -1) {
     repStr += options.separator;
     }
    } else {
      if (i < options.repeatTimes -1) {
        repStr += '+';
        }
    }
  }
  return repStr;
}

console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }));

module.exports = {
  repeater
};
