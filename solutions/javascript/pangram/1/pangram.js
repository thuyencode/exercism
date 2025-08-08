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
  const listOfChars = new Set(sentence.replace(/[^a-zA-Z]/g, '').toLowerCase())
  let sumOfSentence = 0

  listOfChars.forEach((char) => (sumOfSentence += char.charCodeAt(0)))

  return SUM_OF_PANGRAM === sumOfSentence
}

// The sum from the char code of 'a' (97) to 'z' (122)
const SUM_OF_PANGRAM = 2847
