const BASIC_TIME = 500;
const MASTER_TIME = 800;

/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let timePerWeek = config[focus];
      let weekNumber = 0;
      if (knowsProgramming) {
        weekNumber = Math.ceil(MASTER_TIME/timePerWeek);
      } else {
        weekNumber = Math.ceil((MASTER_TIME+BASIC_TIME)/timePerWeek);
      }
      return weekNumber;
  };
  