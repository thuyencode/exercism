//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  #rows = []
  #columns = []

  /**
   * @constructor
   * @param {string} matrixStr A string representing a matrix of numbers
   */
  constructor(matrixStr) {
    this.#rows = matrixStr
      .split('\n')
      .map((row) => row.split(' ').map((item) => Number(item)))

    this.#columns = this.#rows[0].map((_, index) =>
      this.#rows.map((row) => row[index])
    )
  }

  get rows() {
    return this.#rows
  }

  get columns() {
    return this.#columns
  }
}
