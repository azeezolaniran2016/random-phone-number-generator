const { SORT_ASC, SORT_DESC } = require('./constants')

class Util {
  /**
   * sortMobiles sorts an array of 10 digit string mobile numbers to be sorted in a 
   * specified by the sort order
   * @param {array} mobiles array of 10 digit string mobile numbers to be sorted
   * @param {string} order string constant representing the sort order
   * @returns {array} 
   */
  static sortMobiles(mobiles, order) {
    switch (order) {
      case SORT_ASC: {
        return Util.sortMobilesAsc(mobiles)
      }
      case SORT_DESC: {
        return Util.sortMobilesDesc(mobiles)
      }
      default: {
        return mobiles
      }
    }
  }

  /**
   * sortMobileAsc sorts and array of 10digit string mobile numbers array in ascending order
   * @param {array} mobiles array of 10 digit string mobile numbers
   * @returns {array} new array containing all numbers in the input array
   * sorted in ascending order
   */
  static sortMobilesAsc(mobiles) {
    return [...mobiles].sort((a, b) => {
      return Number(a) - Number(b)
    })
  }

  /**
   * sortMobileDesc sorts and array of 10digit string mobile numbers array in descending order
   * @param {array} mobiles array of 10 digit string mobile numbers
   * @returns {array} new array containing all numbers in the input array
   * sorted in descending order
   */
  static sortMobilesDesc(mobiles) {
    return [...mobiles].sort((a, b) => {
      return Number(b) - Number(a)
    })
  }

  /**
   * maxMobile returns the min mobile number in an Array of string mobile numbers
   * @param {array} mobiles array of 10 digit string mobile numbers
   * @returns {string} min 10 digit mobile number string (which starts with 0) in the passed in array
   */
  static minMobile(mobiles) {
    return '0' + Math.min(...mobiles)
  }

  /**
   * maxMobile returns the max mobile number in an Array of string mobile numbers
   * @param {array} mobiles array of 10 digit string mobile numbers
   * @returns {string} max 10 digit mobile number string (which starts with 0) in the passed in array
   */
  static maxMobile(mobiles) {
    return '0' + Math.max(...mobiles)
  }
}

module.exports = Util
