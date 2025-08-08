//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// I'm sorry but this cipher thing hurts my brain
// Thanks to: https://exercism.org/tracks/javascript/exercises/simple-cipher/solutions/KillyMXI
// Reading their detailed explanation is recommended

export class Cipher {
  #A_CODE = 'a'.charCodeAt(0)

  constructor(key = undefined) {
    this._key = key ? this.#fromBase26String(key) : this.#makeRandomKey()
  }

  encode(plaintext) {
    return this.#numericOp(
      this.#zipWithLoop((a, b) => (a + b) % 26, this._key)
    )(plaintext)
  }

  decode(cyphertext) {
    return this.#numericOp(
      this.#zipWithLoop((a, b) => (26 + a - b) % 26, this._key)
    )(cyphertext)
  }

  get key() {
    return this.#toBase26String(this._key)
  }

  #zipWithLoop(f, bs) {
    const len = bs.length
    return (as) => as.map((v, i) => f(v, bs[i % len]))
  }

  #fromBase26String(str) {
    return [...str].map((c) => c.charCodeAt(0) - this.#A_CODE)
  }

  #toBase26String(xs) {
    return String.fromCharCode(...xs.map((x) => x + this.#A_CODE))
  }

  #numericOp(f) {
    return (str) => this.#toBase26String(f(this.#fromBase26String(str)))
  }

  #makeRandomKey() {
    return Array.from({ length: 100 }, () => Math.floor(Math.random() * 26))
  }
}
