//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Get Bob's reply to `message
 * `
 * @param {string} message
 * @returns {string}
 */
export const hey = (message) => {
  const trimmedMessage = message.trim()

  if (isAllCapital(trimmedMessage) && trimmedMessage.endsWith('?')) {
    return "Calm down, I know what I'm doing!"
  }

  if (isAllCapital(trimmedMessage)) {
    return 'Whoa, chill out!'
  }

  if (trimmedMessage.endsWith('?')) {
    return 'Sure.'
  }

  if (isSilence(trimmedMessage)) {
    return 'Fine. Be that way!'
  }

  return 'Whatever.'
}

/**
 * Check if `message` only contains capital letters
 *
 * @param {string} message
 * @returns {boolean}
 */
function isAllCapital(message) {
  const str = message.replace(/[^a-z]/gi, '')

  if (str.length === 0) return false

  return [...'abcdefghijklmnopqrstuvwxyz'].every((char) => !str.includes(char))
}

/**
 * Check if `message` is silence or not
 *
 * @param {string} message
 * @returns {boolean}
 */
function isSilence(message) {
  if (message.length === 0) return true

  return /^[\s\\]*$/.test(message.trim())
}
