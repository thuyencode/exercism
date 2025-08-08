//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  _balance = 0
  _isOpen = false

  open() {
    if (this._isOpen) {
      throw new ValueError()
    }

    this._isOpen = true
  }

  close() {
    if (!this._isOpen) {
      throw new ValueError()
    }

    this._isOpen = false

    this._balance = 0
    this._isOpen = false
    this._isClosed = true
  }

  /**
   * Deposit an `amount` of money
   * @param {number} amount
   */
  deposit(amount) {
    if (amount <= 0) {
      throw new ValueError()
    }

    if (!this._isOpen) {
      throw new ValueError()
    }

    this._balance += amount
  }

  /**
   * Deposit an `amount` of money
   * @param {number} amount
   */
  withdraw(amount) {
    if (amount <= 0 || amount > this._balance) {
      throw new ValueError()
    }

    if (!this._isOpen) {
      throw new ValueError()
    }

    this._balance -= amount
  }

  get balance() {
    if (!this._isOpen) {
      throw new ValueError()
    }

    return this._balance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}
