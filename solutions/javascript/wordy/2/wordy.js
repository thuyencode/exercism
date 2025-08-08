// Thanks to: https://exercism.org/tracks/javascript/exercises/wordy/solutions/anurat

const OPS = {
  'What is': '',
  plus: '+',
  minus: '-',
  'multiplied by': '*',
  'divided by': '/',
  '?': ''
}

/**
 * @param {string} word
 * @param {number} i
 */
const notNumber = (word) => isNaN(Number(word)),
  notOp = (word) => '+-*/'.indexOf(word) === -1,
  oddIndex = (_, i) => i % 2

/**
 * Parse and evaluate simple math word problems returning the answer as an integer.
 *
 * @param {string} question
 * @returns {number}
 * @throws {Error} Unknown operation, Syntax error
 */
export function answer(question) {
  let words = question
    .replace(/What is|plus|minus|multiplied by|divided by|\?/g, (w) => OPS[w])
    .split(' ')
    .filter((word) => word)

  switch (true) {
    case words.filter(notNumber).some(notOp):
      throw Error('Unknown operation')
    case words.length % 2 === 0 || !words.filter(oddIndex).every(notNumber):
      throw Error('Syntax error')
  }

  while (words.length > 1) {
    words = [calculate(...words.slice(0, 3)), ...words.slice(3)]
  }

  return Number(words[0])
}

/**
 * @param {string | number} a
 * @param {string} op
 * @param {string | number} b
 * @returns {number}
 */
function calculate(a, op, b) {
  return eval(`${a} ${op} ${b}`)
}
