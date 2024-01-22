export function age(
  planet: keyof typeof A_YEAR_ON_PLANET,
  seconds: number
): number {
  return Number(
    (seconds / (A_YEAR_ON_PLANET[planet] * A_YEAR_ON_EARTH)).toFixed(2)
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
