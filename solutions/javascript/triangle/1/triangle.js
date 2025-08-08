//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  #sides

  /**
   * @param  {...number} sides
   */
  constructor(...sides) {
    this.#sides = sides
  }

  get isTriangle() {
    if (!this.#sides.every((side) => side > 0)) {
      return false
    }

    const [a, b, c] = this.#sides

    return a + b >= c && b + c >= a && a + c >= b
  }

  get isEquilateral() {
    if (!this.isTriangle) return false

    return new Set(this.#sides).size === 1
  }

  get isIsosceles() {
    if (!this.isTriangle) return false
    if (this.isEquilateral) return true

    return new Set(this.#sides).size === 2
  }

  get isScalene() {
    if (!this.isTriangle) return false

    return !(this.isEquilateral || this.isIsosceles)
  }
}
