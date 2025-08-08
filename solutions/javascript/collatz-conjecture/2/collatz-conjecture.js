//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Solve The Collatz Conjecture or 3x+1 problem
 *
 * @param {number} n
 * @returns {number}
 */
export const steps = (n, count = 0) => {
  if (n <= 0) {
    throw new Error('Only positive numbers are allowed')
  }

  if (n === 1) return count

  return steps(n % 2 === 0 ? n / 2 : 3 * n + 1, ++count)
}
