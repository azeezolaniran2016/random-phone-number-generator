const expect = require('chai').expect

const {SORT_ASC, SORT_DESC} = require('../../lib/constants')
const Util = require('../../lib/Util')

const unsortedMobiles = ['0610252969','0127300937','0284727734','0120858557','0848032475','0755776439','0576612541']
const sortedMobilesAsc = ['0120858557', '0127300937', '0284727734', '0576612541', '0610252969', '0755776439', '0848032475']
const sortedMobilesDesc = ['0848032475', '0755776439', '0610252969', '0576612541', '0284727734', '0127300937', '0120858557']
const minMobile = '0120858557';
const maxMobile = '0848032475';

describe('Util', () => {
  it('#sortMobiles() should sort an array of 10 digit string mobile numbers in ASC order if specified', () => {
    expect(Util.sortMobiles(unsortedMobiles, SORT_ASC)).to.deep.equal(sortedMobilesAsc)
  })

  it('#sortMobiles() should sort an array of 10 digit array of string mobile numbers in DESC order if specified', () => {
    expect(Util.sortMobiles(unsortedMobiles, SORT_DESC)).to.deep.equal(sortedMobilesDesc)
  })

  it('#sortMobiles() should NOT sort an array of 10 digit array of string mobile numbers  if no sort order is specified', () => {
    expect(Util.sortMobiles(unsortedMobiles)).to.deep.equal(unsortedMobiles)
  })

  it('#minMobile() should return the mininimum number (a string) in a 10 digit array of string mobile numbers ', () => {
    const min = Util.minMobile(unsortedMobiles)
    expect(min).to.equal(minMobile)
    expect(min).to.be.a('string')
  })

  it('#maxMobile() should return the max number (a string) in a 10 digit array of string mobile numbers ', () => {
    const max = Util.maxMobile(unsortedMobiles)
    expect(max).to.equal(maxMobile)
    expect(max).to.be.a('string')
  })
})
