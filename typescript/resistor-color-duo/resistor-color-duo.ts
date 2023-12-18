export function decodedValue([r1, r2]: Color[]) {
  return COLORS.indexOf(r1) * 10 + COLORS.indexOf(r2)
}

type Color = (typeof COLORS)[number]

const COLORS = [
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
] as const
