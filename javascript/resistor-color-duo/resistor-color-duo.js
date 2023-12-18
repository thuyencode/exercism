//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Resistor Color Duo
 *
 * @param {string[]} colors
 * @returns {number}
 */
export const decodedValue = ([r1, r2]) => {
  return COLORS.indexOf(r1) * 10 + COLORS.indexOf(r2)
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
