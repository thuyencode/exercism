import { reverse } from './reverse-string'

describe('Reverse String', () => {
  test('an empty string', () => {
    const expected = ''
    expect(reverse('')).toEqual(expected)
  })

  test('a word', () => {
    const expected = 'tobor'
    expect(reverse('robot')).toEqual(expected)
  })

  test('a capitalized word', () => {
    const expected = 'nemaR'
    expect(reverse('Ramen')).toEqual(expected)
  })

  test('a sentence with punctuation', () => {
    const expected = `!yrgnuh m'I`
    expect(reverse(`I'm hungry!`)).toEqual(expected)
  })

  test('a palindrome', () => {
    const expected = 'racecar'
    expect(reverse('racecar')).toEqual(expected)
  })
})
