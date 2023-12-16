//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  /**
   * @type {{[key: string]: string[]}}
   * @private
   */
  #db = {}

  roster() {
    this.#deleteEmptyGrades()
    this.#sortDb()

    return JSON.parse(JSON.stringify(this.#db))
  }

  /**
   * @param {string} student
   * @param {number} grade
   */
  add(student, grade) {
    const oldGrade = this.#gradeOf(student)

    if (oldGrade !== undefined) {
      this.#db[oldGrade].splice(this.#db[oldGrade].indexOf(student), 1)
    }

    if (this.#db[grade] === undefined) {
      this.#db[grade] = Array.of(student)
    } else {
      this.#db[grade].push(student)
      this.#db[grade] = [...new Set(this.#db[grade])]

      this.#sortGrade(grade)
    }
  }

  /**
   * @param {number} grade
   * @returns {string[] | []}
   */
  grade(grade) {
    if (this.#db[grade] === undefined) return []

    return [...this.#db[grade]]
  }

  /**
   * @param {string} student
   * @private
   */
  #gradeOf(student) {
    for (const grade in this.#db) {
      if (this.#db[grade].includes(student)) {
        return grade
      }
    }
  }

  /**
   * @param {number} grade
   * @private
   */
  #sortGrade(grade) {
    this.#db[grade].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  }

  /**
   * @private
   */
  #sortDb() {
    this.#db = Object.keys(this.#db)
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .reduce((obj, key) => {
        obj[key] = this.#db[key]

        return obj
      }, {})
  }

  /**
   * @private
   */
  #deleteEmptyGrades() {
    for (const key in this.#db) {
      if (this.grade(key).length === 0) {
        delete this.#db[key]
      }
    }
  }
}
