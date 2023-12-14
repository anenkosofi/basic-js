/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 10) {
    return n; // If n is already a single-digit number, return it
  }

  // Convert the number to a string, split it into digits, and sum them
  const sum = String(n)
    .split("")
    .map(Number)
    .reduce((acc, digit) => acc + digit, 0);

  // Recursively call the function with the sum
  return getSumOfDigits(sum);
}

module.exports = {
  getSumOfDigits,
};
