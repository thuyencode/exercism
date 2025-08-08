//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Calculate the Hamming Distance between two DNA strands.
 *
 * @param {string} dna1
 * @param {string} dna2
 * @returns {number} the Hamming Distance
 */
export const compute = (dna1, dna2) => {
  if (dna1.length !== dna2.length) {
    throw new Error('strands must be of equal length')
  }

  return dna1
    .split('')
    .reduce(
      (acc, letter, index) => (letter === dna2.charAt(index) ? acc : ++acc),
      0
    )
}
