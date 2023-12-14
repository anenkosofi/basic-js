/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return []; // Return an empty array for empty or invalid matrices
  }

  const rows = matrix.length;
  const columns = matrix[0].length;

  const result = [];

  for (let row = 0; row < rows; row++) {
    const rowResult = [];

    for (let col = 0; col < columns; col++) {
      let count = 0;

      // Check neighbors in a 3x3 grid around the current cell
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (
            i >= 0 &&
            i < rows &&
            j >= 0 &&
            j < columns &&
            !(i === row && j === col)
          ) {
            count += matrix[i][j] ? 1 : 0;
          }
        }
      }

      rowResult.push(count);
    }

    result.push(rowResult);
  }

  return result;
}

module.exports = {
  minesweeper,
};
