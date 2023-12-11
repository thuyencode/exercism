/// <reference path="./global.d.ts" />
//
// @ts-check

const PIZZA_PRICE = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10
}

const EXTRA_OPTIONS_PRICE = {
  ExtraSauce: 1,
  ExtraToppings: 2
}

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  if (extras.length > 0) {
    return EXTRA_OPTIONS_PRICE[extras.shift()] + pizzaPrice(pizza, ...extras)
  }

  return PIZZA_PRICE[pizza]
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (sum, pizzaOrder) =>
      sum + pizzaPrice(pizzaOrder.pizza, ...pizzaOrder.extras),
    0
  )
}
