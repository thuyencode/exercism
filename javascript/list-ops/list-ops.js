//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  #list

  /**
   * @constructor
   * @param {any[]} list
   */
  constructor(list = []) {
    this.#list = list
  }

  /**
   * Add all items in `list` to the end of the list
   *
   * @param {List} list
   * @returns {List}
   */
  append(list) {
    this.#list = [...this.values, ...list.values]

    return this
  }

  /**
   *
   * @param {List} lists
   * @returns {List}
   */
  concat(lists) {
    if (lists === undefined) return this

    if (lists.length() > 0) {
      for (const item of lists.values) {
        if (item instanceof List) {
          this.append(item)
        } else {
          this.#list = [...this.values, ...item]
        }
      }
    }

    return this
  }

  /**
   * Return the list of all items for which `callback(item)` is `true`
   *
   * @param {Function} callback
   * @returns {List}
   */
  filter(callback) {
    let temp = []

    for (const item of this.values) {
      if (callback(item)) {
        temp = [...temp, item]
      }
    }

    return new List(temp)
  }

  /**
   * Return the list of the results of applying `callback(item)` on all items
   *
   * @param {Function} callback
   * @returns {List}
   */
  map(callback) {
    let temp = []

    for (const item of this.values) {
      temp = [...temp, callback(item)]
    }

    return new List(temp)
  }

  /**
   * Return the total number of items within the list
   *
   * @returns {number}
   */
  length() {
    let count = 0

    for (const index in this.values) {
      count++
    }

    return count
  }

  /**
   * Reduce each item into the `accumulator` from the left
   *
   * @param {Function} callback
   * @param {number} accumulator
   */
  foldl(callback, accumulator) {
    for (const item of this.values) {
      accumulator = callback(accumulator, item)
    }

    return accumulator
  }

  /**
   * Reduce each item into the `accumulator` from the right
   *
   * @param {Function} callback
   * @param {number} accumulator
   */
  foldr(callback, accumulator) {
    for (const item of this.reverse().values) {
      accumulator = callback(accumulator, item)
    }

    return accumulator
  }

  /**
   * Return a list with all the original items, but in reversed order
   *
   * @returns {List}
   */
  reverse() {
    let temp = []

    for (const item of this.values) {
      temp = [item, ...temp]
    }

    return new List(temp)
  }

  get values() {
    return [...this.#list]
  }
}
