//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {Record<number, string[]>} scoresTable
 * @returns {Record<string, number>}
 */
export const transform = (scoresTable) => {
  const oneToOneScoresTable = {}

  for (const key in scoresTable) {
    scoresTable[key].forEach((letter) => {
      oneToOneScoresTable[letter.toLowerCase()] = Number(key)
    })
  }

  return oneToOneScoresTable
}
