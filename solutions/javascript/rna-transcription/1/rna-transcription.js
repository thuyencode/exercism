//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {string} dna
 */
export const toRna = (dna) => {
  if (!dna) return ''

  return dna
    .split('')
    .map((nucleotide) => DNA_TO_RNA[nucleotide])
    .join('')
}

const DNA_TO_RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}
