/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  switch (extras.shift()) {
    case 'ExtraSauce':
      return pizzaPrice(pizza, ...extras) + 1
    case 'ExtraToppings':
      return pizzaPrice(pizza, ...extras) + 2
  }

  switch (pizza) {
    case 'Margherita':
      return 7

    case 'Caprese':
      return 9

    case 'Formaggio':
      return 10
  }
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((accumulator, pizzaOrder) => {
    accumulator += pizzaPrice(pizzaOrder.pizza, ...pizzaOrder.extras)

    return accumulator
  }, 0)
}

pizzaPrice('Margherita')
