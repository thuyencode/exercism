//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Check if a sentence is a pangram or not
 *
 * @param {string} sentence
 * @returns {boolean}
 */
export const isPangram = (sentence) => {
  const sentenceLowered = sentence.toLowerCase()

  return [...'abcdefghijklmnopqrstuvwxyz'].every((char) =>
    sentenceLowered.includes(char)
  )
}
