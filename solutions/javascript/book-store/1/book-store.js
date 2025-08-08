//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Calculate the price of book purchases
 *
 * @param {number[]} books
 */
export const cost = (books) => {
  // Price in cents
  const BASE_PRICE = 800

  if (books.length === 0) return 0
  if (books.length === 1) return BASE_PRICE

  const clonedBooks = [...books]
  const baskets = []

  while (clonedBooks.length > 0) {
    const basketItems = [...new Set(clonedBooks)]

    baskets.push(basketItems.length)

    for (const item of basketItems) {
      clonedBooks.splice(clonedBooks.indexOf(item), 1)
    }
  }

  while (baskets.includes(3) && baskets.includes(5)) {
    baskets.splice(baskets.indexOf(3), 1)
    baskets.splice(baskets.indexOf(5), 1)
    baskets.push(4, 4)
  }

  return baskets.reduce(
    (price, basket) => price + basket * BASE_PRICE * (1 - DISCOUNTS[basket]),
    0
  )
}

const DISCOUNTS = { 1: 0, 2: 0.05, 3: 0.1, 4: 0.2, 5: 0.25 }
