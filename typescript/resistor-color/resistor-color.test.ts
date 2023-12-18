// @ts-nocheck

import { colorCode, COLORS } from './resistor-color'

describe('color code', () => {
  test('Black', () => {
    expect(colorCode('black')).toEqual(0)
  })

  test('White', () => {
    expect(colorCode('white')).toEqual(9)
  })

  test('Orange', () => {
    expect(colorCode('orange')).toEqual(3)
  })
})

describe('Colors', () => {
  test('returns all colors', () => {
    expect(COLORS).toEqual([
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
    ])
  })
})
