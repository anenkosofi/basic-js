/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const totalStats = {};

  domains.forEach((domain) => {
    const subdomains = domain.split(".").reverse();
    let currentSubdomain = "";

    subdomains.forEach((subdomain) => {
      currentSubdomain += `.${subdomain}`;
      totalStats[currentSubdomain] = (totalStats[currentSubdomain] || 0) + 1;
    });
  });

  return totalStats;
}

module.exports = {
  getDNSStats,
};
