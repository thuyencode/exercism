// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  /**
   * @type {string[]}
   */
  #names = []

  constructor() {
    this.#names.unshift(this.#getRandomName())
  }

  get alphabets() {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  get name() {
    return this.#names[0]
  }

  reset() {
    let newName = this.#getRandomName()

    while (this.#names.includes(newName)) {
      newName = this.#getRandomName()
    }

    this.#names.unshift(newName)
  }

  #getRandomName() {
    const len = this.alphabets.length
    const n = 10

    return `${this.alphabets[this.#randomNum(len)]}${
      this.alphabets[this.#randomNum(len)]
    }${this.#randomNum(n)}${this.#randomNum(n)}${this.#randomNum(n)}`
  }

  /**
   * @param {number} n
   */
  #randomNum(n) {
    return Math.floor(Math.random() * n)
  }
}

Robot.releaseNames = () => {}
