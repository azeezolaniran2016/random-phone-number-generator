class Generator {
  /**
   * generateRandomMobile generates a random 10 digit mobile number
   * @returns {string} returns a 10 digit mobile number string
   */
  generateRandomMobile() {
    return '0' + Math.floor(100000000 + Math.random() * 900000000)
  }
  /**
   * Generates the specified size of mobile numbers between 00000000001 and 
   * 9999999999 that is unique and appends them to the relative array of mobile
   * numbers
   * @param {store} - Array containing mobile numbers that generated mobile numbers
   * should be unique agains
   * @param {size} - Size of mobile numbers to be generated
   * @returns {array} - Array containing the passed in mobile numbers with unique
   * mobile numbers of specified size append to them.
   */
  newUniqueMobiles(store, size) {
    const newStore = [...store]
    let rand
    let count = 0
    while(true) {
      rand = this.generateRandomMobile()

      if (newStore.indexOf(rand) == -1) {
        newStore.push(rand)
        count++
      }
      
      if (count === size) {
        break
      }
    }
    return newStore
  }
}

module.exports = Generator
