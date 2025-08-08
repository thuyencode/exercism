//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Convert a number into a string that contains raindrop sounds corresponding to certain potential factors.
 *
 * @param {number} num
 */
export const convert = (num) => {
  if (num <= 1) return String(num)

  const raindrops = Object.keys(RAINDROPS).reduce(
    (acc, factor) =>
      num % Number(factor) === 0 ? acc + RAINDROPS[factor] : acc,
    ''
  )

  return raindrops.length !== 0 ? raindrops : String(num)
}

const RAINDROPS = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
}
