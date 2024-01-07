//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Thanks to Dyrits's solution 'cause I do not understant the instructions: https://exercism.org/tracks/javascript/exercises/meetup/solutions/Dyrits

/**
 * @param {number} year
 * @param {number} month
 * @param {string} description
 * @param {string} day
 * @returns {Date | undefined}
 */
export const meetup = (year, month, description, day) => {
  switch (description) {
    case 'teenth':
      return handleTeenthDay(year, month, day)

    case 'last':
      return handleLastDay(year, month, day)

    default:
      return handleOtherDay(year, month, day, description)
  }
}

/**
 * @param {number} year
 * @param {number} month
 * @param {string} day
 * @returns {Date | undefined}
 */
function handleTeenthDay(year, month, day) {
  const date = new Date(year, month, 0)

  for (let teen of TEENS) {
    date.setDate(teen)

    if (WEEKDAYS[date.getDay()] === day) {
      return date
    }
  }
}

/**
 * @param {number} year
 * @param {number} month
 * @param {string} day
 * @returns {Date | undefined}
 */
function handleLastDay(year, month, day) {
  const date = new Date(year, month, 0)

  for (let dayMonth = date.getDate(); dayMonth > 0; dayMonth--) {
    date.setDate(dayMonth)

    if (WEEKDAYS[date.getDay()] === day) {
      return date
    }
  }
}

/**
 * @param {number} year
 * @param {number} month
 * @param {string} day
 * @param {string} description
 * @returns {Date | undefined}
 */
function handleOtherDay(year, month, day, description) {
  const date = new Date(year, month, 0)
  const week = 7 * WEEKS.indexOf(description)

  for (let dayMonth = 1; dayMonth < 32; dayMonth++) {
    date.setDate(dayMonth)

    if (WEEKDAYS[date.getDay()] === day) {
      date.setDate(dayMonth + week)
      return date
    }
  }
}

const TEENS = [13, 14, 15, 16, 17, 18, 19]
const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
const WEEKS = ['first', 'second', 'third', 'fourth']
