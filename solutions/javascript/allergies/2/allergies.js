//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Thanks to: https://exercism.org/tracks/javascript/exercises/allergies/solutions/slaymance

export class Allergies {
  /**
   * @type {string[]} The allergies the person has according to their given score
   */
  #list = []

  /**
   * @param {number} score The allergy score
   */
  constructor(score) {
    this.#list = Allergies.allergiesList.filter((_, i) => (score >> i) & 1)
  }

  /**
   * @returns {string[]} The allergen list of the person
   */
  list() {
    return this.#list
  }

  /**
   * Check if the person is allergic to `item` or not
   *
   * @param {string} item
   */
  allergicTo(item) {
    return this.#list.includes(item)
  }

  static get allergiesList() {
    return Object.freeze([
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats'
    ])
  }
}
