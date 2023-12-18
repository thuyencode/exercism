//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Given a year, report if it is a leap year.
 *
 * @param {number} year
 */
export const isLeap = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
