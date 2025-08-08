//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Thanks to: https://the-algorithms.com/algorithm/doubly-linked-list?lang=javascript

export class LinkedList {
  #length = 0

  /**
   * @type {Node | null}
   * @private
   */
  #head = null

  /**
   * @type {Node | null}
   * @private
   */
  #tail = null

  /**
   * Add new item at the end of linked list
   *
   * @param {number} item
   */
  push(item) {
    const node = new Node(item)

    if (!this.#head) {
      this.#head = node
      this.#tail = node
    } else {
      node.prev = this.#tail
      this.#tail.next = node
      this.#tail = node
    }

    this.#length++
  }

  /**
   * Remove the last item from linked list
   */
  pop() {
    return this.removeAt(this.#length - 1)
  }

  /**
   * Remove the first item from linked list
   */
  shift() {
    return this.removeAt(0)
  }

  /**
   * Add new item at the start of linked list
   *
   * @param {number} item
   */
  unshift(item) {
    const node = new Node(item)

    if (!this.#head) {
      this.#head = node
      this.#tail = node
    } else {
      node.next = this.#head
      this.#head.prev = node
      this.#head = node
    }

    this.#length++
  }

  /**
   * Delete `item` from linked list
   *
   * @param {number} item
   * @returns The deleted item
   */
  delete(item) {
    return this.removeAt(this.indexOf(item))
  }

  /**
   * Return the number of items in linked list
   */
  count() {
    return this.#length
  }

  /**
   * Get the index of `item` in linked list
   *
   * @param {number} item
   */
  indexOf(item) {
    let index = -1
    let current = this.#head

    while (current) {
      if (current.item === item) return ++index

      index++
      current = current.next
    }

    return -1
  }

  /**
   * The remove the item at a position
   *
   * @param {number} position The index of the item that needs to be removed
   * @returns The removed item
   */
  removeAt(position) {
    if (position > -1 && position < this.#length) {
      let current = this.#head
      let previous = null
      let index = 0

      if (position === 0) {
        this.#head = current.next

        if (this.#length === 1) {
          this.#tail = null
        } else {
          this.#head.prev = null
        }
      } else if (position === this.#length - 1) {
        current = this.#tail
        this.#tail = current.prev
        this.#tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        previous.next = current.next
        current.next.prev = previous
      }

      this.#length--
      return current.item
    } else {
      return null
    }
  }
}

/**
 * A node in a `LinkedList`
 *
 * @param {number} item
 */
function Node(item) {
  this.item = item

  /**
   * @type {Node | null}
   * @public
   */
  this.next = null
  /**
   * @type {Node | null}
   * @public
   */
  this.prev = null
}
