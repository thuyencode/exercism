// Based on my solution at the JavaScript track: https://exercism.org/tracks/javascript/exercises/raindrops/solutions/thuyencode

export function convert(num: number): string {
  if (num <= 1) return String(num)

  const raindrops = Object.keys(RAINDROPS).reduce(
    (acc, factor) =>
      num % Number(factor) === 0 ? acc + RAINDROPS[factor] : acc,
    ''
  )

  return raindrops.length !== 0 ? raindrops : String(num)
}

const RAINDROPS: Record<string, string> = Object.freeze({
  '3': 'Pling',
  '5': 'Plang',
  '7': 'Plong'
})
