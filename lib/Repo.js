const fs = require('fs')

/**
 * Repo class for managing all things related to persistence
 */
class Repo {
  constructor(storeName, storeExt) {
    this.storePath = this.getStorePath(storeName, storeExt)
  }

  /**
   * getStorePath creates the full path to the store file
   * @param {string} storeName name of the store file
   * @param {string} storeExt extension of the store file
   * @returns {string} full path to the store file, with the name and extension provided
   */
  getStorePath(storeName, storeExt) {
    return `${process.cwd()}/${storeName}.${storeExt}`
  }

  /**
   * getStore returns the path to the store file
   * @returns {array} - array containing all numbers
   */
  getStore() {
    try {
      return JSON.parse(fs.readFileSync(this.storePath))
    } catch(err) {
      return []
    }
  }

  /**
   * updateMobile numbers update the store with the new mobile numbers
   * @param {array} mobileNumbers the new mobile numbers in the store
   * @returns {undefined}
   */
  updateMobileNumbers(mobileNumbers) {
    fs.writeFileSync(this.storePath, JSON.stringify(mobileNumbers))
  }
}

module.exports = Repo
