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
  // Use regex to replace all the non English alphabet characters from string
  return new Set(sentence.replace(/[^a-zA-Z]/g, '').toLowerCase()).size === 26
}
