//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {Record<number, string[]>} scoresAndLetters
 * @returns {Record<string, number>}
 */
export const transform = (scoresAndLetters = {}) => {
  const oneToOneScoresAndLetters = {}

  for (const key in scoresAndLetters) {
    for (const letter of scoresAndLetters[key]) {
      oneToOneScoresAndLetters[letter.toLocaleLowerCase()] = Number(key)
    }
  }

  return oneToOneScoresAndLetters
}
