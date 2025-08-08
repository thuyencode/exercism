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
export const decodedValue = (colors) => {
  return Number(`${COLORS.indexOf(colors[0])}${COLORS.indexOf(colors[1])}`)
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
