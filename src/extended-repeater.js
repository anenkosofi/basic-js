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
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  let string1 = [];
  let string2 = [];

  let mainString = str;
  let additionString = "";

  if (typeof addition !== "undefined") {
    additionString = addition;
    for (let i = 0; i < (additionRepeatTimes || 1); i += 1) {
      string2.push(String(additionString));
    }
    string2 = string2.join(additionSeparator || "|");

    if (string2.length) {
      mainString += string2;
    } else {
      mainString += addition;
    }
  }

  for (let i = 0; i < (repeatTimes || 1); i += 1) {
    string1.push(mainString);
  }

  string1 = string1.join(separator || "+");

  return string1;
}

module.exports = {
  repeater,
};
