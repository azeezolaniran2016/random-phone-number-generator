const expect = require('chai').expect

const Generator = require('../../lib/Generator')
const generator = new Generator()
const existingMobiles = [
  '0123238211',
  '0127438948',
  '0149926991',
  '01594493101',
  '0184111591',
  '0187006008',
  '0217785484',
  '0219975741',
  '0228111931',
  '0228210301',
  '0237675478',
  '0243547761',
  '024366160',
  '0260315296',
  '0277609760',
  '03041156311'
]

describe('Generator', () => {
  it('#generateRandomMobile() should return a 10 digit number', () => {
    const newRand = generator.generateRandomMobile()
    expect(newRand.length).to.equal(10)
  })

  it('#generateRandomMobile() should return a string', () => {
    const newRand = generator.generateRandomMobile()
    expect(newRand).to.be.a('string')
  })

  it('#newUniqueMobiles() should return a new array of expected length', () => {
    expect(generator.newUniqueMobiles([], 200).length).to.equal(200)
    expect(generator.newUniqueMobiles(existingMobiles, 200).length).to.equal(200 + existingMobiles.length)
  })

  it('#newUniqueMobiles() should return a new array of unique mobile numbers', () => {
    const mobiles = generator.newUniqueMobiles(existingMobiles, 10000)
    expect(new Set(mobiles).size).to.equal(mobiles.length)
  })

})

