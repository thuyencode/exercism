//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// I'm dumb at math so thanks to Michael Brig: https://youtu.be/MD_MFDpHtJ0

export class Clock {
  #hours = 0
  #minutes = 0

  /**
   * @param {number} hours
   * @param {number} minutes
   */
  constructor(hours, minutes = 0) {
    this.#hours = hours
    this.#minutes = minutes
    this.convert()
  }

  get hours() {
    return this.#hours
  }

  get minutes() {
    return this.#minutes
  }

  convert() {
    let hours = (Math.floor(this.#minutes / 60) + this.#hours) % 24
    this.#hours = hours < 0 ? 24 + hours : hours

    let minutes = this.#minutes % 60
    this.#minutes = minutes < 0 ? 60 + minutes : minutes
  }

  toString() {
    return `${this.#hours < 10 ? 0 : ''}${this.#hours}:${
      this.#minutes < 10 ? 0 : ''
    }${this.#minutes}`
  }

  plus(minutes = 1) {
    this.#minutes += minutes
    this.convert()

    return this
  }

  minus(minutes = 1) {
    this.#minutes -= minutes
    this.convert()

    return this
  }

  /**
   * @param {Clock} clock
   */
  equals(clock) {
    return this.#hours === clock.hours && this.#minutes === clock.minutes
  }
}
