//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Thanks to: https://youtu.be/Ck_kwEk4obY

/**
 * Return the pascal triangle from the number of `rows`
 *
 * @param {number} rows
 * @returns {number[][]}
 */
export const rows = (rows) => {
  const pascalTriangle = []

  for (let i = 0; i < rows; i++) {
    const temp = []

    for (let k = 0; k <= i; k++) {
      temp.push(recursionPascal(k, i))
    }

    pascalTriangle.push(temp)
  }

  return pascalTriangle
}

/**
 * Calculate the item in pascal triangle through recursion
 *
 * @param {number} k
 * @param {number} n
 * @returns {number}
 */
function recursionPascal(k, n) {
  if (k === 0 || k === n) {
    return 1
  } else {
    return recursionPascal(k - 1, n - 1) + recursionPascal(k, n - 1)
  }
}
