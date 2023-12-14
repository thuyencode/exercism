//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {keyof A_YEAR_ON_PLANET} planet
 */
export const age = (planet, second) => {
  return Number(
    (second / (A_YEAR_ON_PLANET[planet] * A_YEAR_ON_EARTH)).toFixed(2)
  )
}

// Seconds
const A_YEAR_ON_EARTH = 31557600

const A_YEAR_ON_PLANET = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}