/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

const PRE_JUNIOR = 500;
const JUNIOR = 800;
module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = {family: 4}
    ) {
    return Math.ceil(knowsProgramming ? JUNIOR / config[focus] : (JUNIOR + PRE_JUNIOR) / config[focus] );
  };
