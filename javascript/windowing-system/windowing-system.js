// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
/**
 * Constructor function that store the window's current dimensions
 *
 * @param {number} width
 * @param {number} height
 */
export function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
}

/**
 * Set new width and height for the window
 *
 * @param {number} newWidth
 * @param {number} newHeight
 */
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth
  this.height = newHeight
}

/**
 * Constructor function that store the window's current horizontal and vertical position
 *
 * @param {number} x
 * @param {number} y
 */
export function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
}

/**
 * Set new position for the window
 *
 * @param {number} newX
 * @param {number} newY
 */
Position.prototype.move = function move(newX, newY) {
  this.x = newX
  this.y = newY
}

export class ProgramWindow {
  constructor() {
    this._screenSize = new Size(800, 600)
    this._size = new Size()
    this._position = new Position()
  }

  get screenSize() {
    return this._screenSize
  }

  get size() {
    return this._size
  }

  get position() {
    return this._position
  }

  /**
   * The method to resize the window
   *
   * @param {Size} newSize
   */
  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x
    const maxHeight = this.screenSize.height - this.position.y

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth))
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight))

    this._size.resize(newWidth, newHeight)
  }

  /**
   * The method to move the window
   *
   * @param {Position} newPosition
   */
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width
    const maxY = this.screenSize.height - this.size.height

    const newX = Math.max(0, Math.min(newPosition.x, maxX))
    const newY = Math.max(0, Math.min(newPosition.y, maxY))

    this._position.move(newX, newY)
  }
}

/**
 * Change a program window
 *
 * @param {ProgramWindow} programWindow
 */
export function changeWindow(programWindow) {
  programWindow.move(new Position(100, 150))
  programWindow.resize(new Size(400, 300))

  return programWindow
}
