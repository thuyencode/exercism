//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Return a reversed string of `str`
 *
 * @param {string} str
 * @returns {string}
 */
export const reverseString = (str) => {
  let newStr = ''

  for (const c of str) {
    newStr = c + newStr
  }

  return newStr
}
