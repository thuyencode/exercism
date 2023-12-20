export function toRna(dna: string) {
  if (!dna) {
    throw new Error('Invalid input DNA.')
  }

  return dna
    .split('')
    .map((nucleotide) => {
      const rna = DNA_TO_RNA.get(nucleotide)

      if (!rna) {
        throw new Error('Invalid input DNA.')
      }

      return rna
    })
    .join('')
}

const DNA_TO_RNA = Object.freeze(
  new Map<string, string>([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U']
  ])
)
