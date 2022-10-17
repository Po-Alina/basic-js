const { NotImplementedError } = require('../extensions/index.js');

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
  let whatSeason = new Date(date);
  
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) != '[object Date]') {
    throw new Error ('Invalid date!');
  }

  if (whatSeason.getMonth() === 0 || whatSeason.getMonth() === 1 || whatSeason.getMonth() === 11) {
    return 'winter';
  }

  if (whatSeason.getMonth() >= 2 && whatSeason.getMonth() <=4) {
    return 'spring';
  }

  if (whatSeason.getMonth() >= 5 && whatSeason.getMonth() <= 7) {
    return 'summer';
  }

  if (whatSeason.getMonth() >= 8 && whatSeason.getMonth() <= 10) {
    return 'autumn';
  }
};

module.exports = {
  getSeason
};
