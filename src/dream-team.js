const { NotImplementedError } = require('../extensions/index.js');

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
  let teamName = [];
  if (Array.isArray(members)) {
    for (let member of members) {
      if (typeof member === 'string') {
        for (let i = 0; i < member.length; i++) {
          if (member[i] != ' ') {
            teamName.push(member[i].toUpperCase());
           break;
          } else {
            continue;
          }
        }
      }
    }
  } else {
    return false;
  }
    return teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};
