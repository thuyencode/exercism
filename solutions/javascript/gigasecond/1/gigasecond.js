//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Calculate the date and time one gigasecond after a certain date.
 *
 * @param {Date} date
 */
export const gigasecond = (date) => {
  // One giga-milliseconds
  const gigaMs = Math.pow(10, 9) * 1000

  return new Date(date.getTime() + gigaMs)
}
