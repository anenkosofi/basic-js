/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const nonNegativeElements = arr.filter((element) => element !== -1);

  // Sort the non-negative elements
  nonNegativeElements.sort((a, b) => a - b);

  // Replace non-negative elements in the original array with the sorted ones
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = nonNegativeElements[index];
      index++;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight,
};
