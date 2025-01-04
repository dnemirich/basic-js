const { NotImplementedError } = require('../extensions/index.js');

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
  const res = {};
  domains.forEach((d) => {
    const parts = d.split('.');
    let sd = '';
    parts.reverse().forEach((p) => {
      sd = `${sd}.${p}`;
      if (res[sd]) {
        res[sd] += 1;
      } else {
        res[sd] = 1;
      }
    });
  });

  return res;
}

module.exports = {
  getDNSStats
};
