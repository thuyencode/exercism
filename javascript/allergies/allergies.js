//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  /**
   * @type {string[]} The allergies the person has according to their given score
   */
  #list = []

  /**
   * @param {number} score The allergy score
   */
  constructor(score) {
    for (const allergy of Allergies.allergiesList) {
      if (score <= 0) break
      if (score < allergy[0]) continue

      score -= allergy[0]

      this.#list.unshift(allergy[1])
    }
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
    for (const allergen of this.#list) {
      if (item === allergen) return true
    }

    return false
  }

  static get allergiesList() {
    return Object.freeze(
      new Map([
        [128, 'cats'],
        [64, 'pollen'],
        [32, 'chocolate'],
        [16, 'tomatoes'],
        [8, 'strawberries'],
        [4, 'shellfish'],
        [2, 'peanuts'],
        [1, 'eggs']
      ])
    )
  }
}
