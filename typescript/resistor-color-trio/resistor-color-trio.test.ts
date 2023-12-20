// @ts-nocheck

import { decodedResistorValue } from './resistor-color-trio'

describe('Resistor Colors', () => {
  test('Orange and orange and black', () => {
    expect(decodedResistorValue(['orange', 'orange', 'black'])).toEqual(
      '33 ohms'
    )
  })

  test('Blue and grey and brown', () => {
    expect(decodedResistorValue(['blue', 'grey', 'brown'])).toEqual('680 ohms')
  })

  test('Red and black and red', () => {
    expect(decodedResistorValue(['red', 'black', 'red'])).toEqual('2 kiloohms')
  })

  test('Green and brown and orange', () => {
    expect(decodedResistorValue(['green', 'brown', 'orange'])).toEqual(
      '51 kiloohms'
    )
  })

  test('Yellow and violet and yellow', () => {
    expect(decodedResistorValue(['yellow', 'violet', 'yellow'])).toEqual(
      '470 kiloohms'
    )
  })

  test('Blue and violet and blue', () => {
    expect(decodedResistorValue(['blue', 'violet', 'blue'])).toEqual(
      '67 megaohms'
    )
  })

  test('Minimum possible value', () => {
    expect(decodedResistorValue(['black', 'black', 'black'])).toEqual('0 ohms')
  })

  test('Maximum possible value', () => {
    expect(decodedResistorValue(['white', 'white', 'white'])).toEqual(
      '99 gigaohms'
    )
  })

  test('First two colors make an invalid octal number', () => {
    expect(decodedResistorValue(['black', 'grey', 'black'])).toEqual('8 ohms')
  })

  test('Ignore extra colors', () => {
    expect(decodedResistorValue(['blue', 'green', 'yellow', 'orange'])).toEqual(
      '650 kiloohms'
    )
  })
})
