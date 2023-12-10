const ARGUMENT_NOT_PASSED = "Unable to determine the time of year!";
const INVALID_ARGUMENT = "Invalid date!";

const seasons = {
  winter: [11, 0, 1],
  spring: [2, 3, 4],
  summer: [5, 6, 7],
  autumn: [8, 9, 10],
};

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return ARGUMENT_NOT_PASSED;
  }

  try {
    if (date.getTime() === date.getTime()) {
      const month = date.getMonth();

      const season = Object.entries(seasons).find(([key, value]) => {
        if (value.includes(month)) {
          return key;
        }
      });
      return season[0] || null;
    }
  } catch (e) {
    throw new Error(INVALID_ARGUMENT);
  }
}

module.exports = {
  getSeason,
};
