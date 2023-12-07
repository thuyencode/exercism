// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5

    case 'Energizer':
    case 'Green Garden':
      return 1.5

    case 'Tropical Island':
      return 3

    case 'All or Nothing':
      return 5

    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded === 0) return 0

  let limesCutNum = 0
  let count = 0

  while (limes.length !== 0) {
    count++

    switch (limes.shift()) {
      case 'medium':
        limesCutNum += 8
        break

      case 'large':
        limesCutNum += 10
        break

      default:
        limesCutNum += 6
        break
    }

    if (limesCutNum >= wedgesNeeded) break
  }

  return count
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    const order = orders.shift()

    if (!order) break

    timeLeft -= timeToMixJuice(order)
  } while (timeLeft > 0)

  return orders
}
