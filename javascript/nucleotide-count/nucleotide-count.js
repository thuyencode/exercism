//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {string} strand DNA sequence
 */
export function countNucleotides(strand) {
  const regex = /[^ACGT]/
  const nucleotide_count = {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  }

  if (regex.test(strand)) {
    throw new Error('Invalid nucleotide in strand')
  }

  strand.split('').forEach((nucleotide) => {
    nucleotide_count[nucleotide]++
  })

  return Object.values(nucleotide_count).join(' ')
}
