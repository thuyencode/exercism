//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Compute the Scrabble score for `word`.
 *
 * @param {string} word
 * @return The Scrabble score of`word`.
 */
export const score = (word) => {
  word = word.toUpperCase()

  return Array.from(LETTER_VALUES.keys()).reduce(
    (acc, letter) =>
      (word.match(new RegExp(letter, 'g')) || []).length *
        LETTER_VALUES.get(letter) +
      acc,
    0
  )
}

const LETTER_VALUES = Object.freeze(
  new Map([
    ['A', 1],
    ['E', 1],
    ['I', 1],
    ['O', 1],
    ['U', 1],
    ['L', 1],
    ['N', 1],
    ['R', 1],
    ['S', 1],
    ['T', 1],
    ['D', 2],
    ['G', 2],
    ['B', 3],
    ['C', 3],
    ['M', 3],
    ['P', 3],
    ['F', 4],
    ['H', 4],
    ['V', 4],
    ['W', 4],
    ['Y', 4],
    ['K', 5],
    ['J', 8],
    ['X', 8],
    ['Q', 10],
    ['Z', 10]
  ])
)
