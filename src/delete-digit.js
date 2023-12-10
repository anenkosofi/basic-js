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
  const digits = String(n).split("").map(Number);
  const minIndex = digits.findIndex(
    (digit, index) => digit < digits[index + 1]
  );

  if (minIndex !== -1) {
    digits.splice(minIndex, 1);
  } else {
    digits.pop();
  }

  return Number(digits.join(""));
}

module.exports = {
  deleteDigit,
};
