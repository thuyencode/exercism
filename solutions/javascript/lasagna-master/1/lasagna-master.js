/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determine whether the lasagna is done
 *
 * @param {number} times The timer
 * @returns {string} Status message
 */
export function cookingStatus(times) {
  switch (times) {
    case undefined:
      return 'You forgot to set the timer.'

    case 0:
      return 'Lasagna is done.'

    default:
      return 'Not done, please wait.'
  }
}

/**
 * Estimate the preparation time
 *
 * @param {string[]} layers An array of layers
 * @param {number} minutes The average preparation time per layer in minutes
 * @returns {number} The total preparation time
 */
export function preparationTime(layers, minutes) {
  return layers.length * (minutes ?? 2)
}

/**
 * Compute the amounts of noodles and sauce needed
 *
 * @param {string[]} layers An array of layers
 * @returns {Quantities} The amounts of noodles and sauce needed
 */
export function quantities(layers) {
  let noodles = 0
  let sauce = 0.0

  for (const layer of layers) {
    switch (layer) {
      case 'noodles':
        noodles += 50
        break

      case 'sauce':
        sauce += 0.2
        break
    }
  }

  return { noodles, sauce }
}

/**
 * Add the secret ingredient
 *
 * @param {string[]} friendsList List of ingredients from friend
 * @param {string[]} myList List of ingredients from yours
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

/**
 * Scale the recipe
 *
 * @param {Object} recipe A recipe object that needs to be scaled
 * @param {number} portions The number of portions you want to cook
 */
export function scaleRecipe(recipe, portions) {
  const scaledRecipe = { ...recipe }

  for (const key in scaledRecipe) {
    scaledRecipe[key] *= portions / 2
  }

  return scaledRecipe
}
