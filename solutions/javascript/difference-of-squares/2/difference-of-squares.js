//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Based on my solution for this exercise on the C track: https://exercism.org/tracks/c/exercises/difference-of-squares

export class Squares {
  /**
   * @type {number | null}
   */
  #sumOfSquares = null
  /**
   * @type {number | null}
   */
  #squareOfSum = null

  /**
   * @param {number} number
   */
  constructor(number) {
    const range = Object.freeze(
      Array.from({ length: number }, (_, index) => index + 1)
    )

    this.#sumOfSquares = range.reduce((acc, item) => acc + Math.pow(item, 2), 0)
    this.#squareOfSum = Math.pow(
      range.reduce((acc, item) => acc + item, 0),
      2
    )
  }

  get sumOfSquares() {
    return this.#sumOfSquares
  }

  get squareOfSum() {
    return this.#squareOfSum
  }

  get difference() {
    return this.#squareOfSum - this.#sumOfSquares
  }
}

const n = new Squares(2)
