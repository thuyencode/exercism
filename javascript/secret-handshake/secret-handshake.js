//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Convert a number between 1 and 31 to a sequence of actions in the secret handshake
 *
 * @param {number} number
 * @returns {string[]} A sequence of actions
 */
export const commands = (number) => {
  const binary = dec2bin(number)
  /**
   * @type {string[]}
   */
  const actions = []

  binary.reverse().forEach((bin, index) => {
    if (bin === '1') {
      if (ACTION_AT[index] === 'reverse') {
        actions.reverse()
      } else {
        actions.push(ACTION_AT[index])
      }
    }
  })

  return actions
}

const ACTION_AT = [
  'reverse',
  'jump',
  'close your eyes',
  'double blink',
  'wink'
].reverse()

// Thanks to: https://stackoverflow.com/a/16155417
/**
 * Convert a decimal number to a string of binary number
 *
 * @param {number} decimal
 * @returns {string[]} An array of strings that represents the binary form of `decimal`
 */
function dec2bin(decimal) {
  const bin = (decimal >>> 0).toString(2).split('')

  bin.unshift(...Array.from({ length: 5 - bin.length }).fill('0'))

  return bin
}
