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
  let string = "";

  if (!str.length) {
    return string;
  }

  const object = str.split("").reduce((acc, char) => {
    if (acc[char]) {
      acc[char] += 1;
    } else {
      acc[char] = 1;
    }
    return acc;
  }, {});

  Object.entries(object).map(([key, value]) => {
    if (value > 1) {
      string += `${value}${key}`;
    } else {
      string += `${key}`;
    }
  });

  return string;
}

module.exports = {
  encodeLine,
};
