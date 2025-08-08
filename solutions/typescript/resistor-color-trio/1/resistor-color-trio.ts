// Thanks to: https://exercism.org/tracks/typescript/exercises/resistor-color-trio/solutions/bobahop

export function decodedResistorValue([r1, r2, r3]: Color[]) {
  const ohms =
    (COLORS.indexOf(r1) * 10 + COLORS.indexOf(r2)) *
    Math.pow(10, COLORS.indexOf(r3))

  const [divisor, prefix] = METRIC_PREFIXES.find(
    ([divisor]) => ohms >= divisor
  ) ?? [1, '']

  return `${ohms / divisor} ${prefix}ohms`
}

type Color = (typeof COLORS)[number]

const COLORS = Object.freeze([
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
] as const)

const METRIC_PREFIXES = Object.freeze([
  [1_000_000_000, 'giga'],
  [1_000_000, 'mega'],
  [1000, 'kilo']
] as const)
