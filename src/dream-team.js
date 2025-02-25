/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members
      .filter((a) => typeof a === "string")
      .map((b) => b.trim().slice(0, 1).toUpperCase())
      .sort((a, b) => a.localeCompare(b))
      .join("");
  }
  return false;
}

module.exports = {
  createDreamTeam,
};
