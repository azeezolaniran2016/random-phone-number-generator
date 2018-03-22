class Generator {
  /**
   * generateRandomMobile generates a random 10 digit mobile number
   * @returns {string} returns a 10 digit mobile number string
   */
  generateRandomMobile() {
    return '0' + Math.floor(100000000 + Math.random() * 900000000)
  }
  /**
   * Generates a mobile between 00000000001 and 9999999999 that is unique
   * relative to a set of numbers.
   * @param {store} - Array of mobile numbers that should be unique 
   * 
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
