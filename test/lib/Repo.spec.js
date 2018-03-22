const expect = require('chai').expect
const fs = require('fs')
const Repo = require('../../lib/Repo')

const storeName = 'test_db'
const storeExt = 'mgn'

const repo = new Repo(storeName, storeExt)

const mobileNumbers = {
  initialMobileNumbers: ['0498384832', '0928482821', '0739291998'],
  newMobileNumbers: ['0498384032', '0928462821', '0739294998'],
}

describe('Repo', () => {
  after(() => {
    fs.unlinkSync(repo.storePath)
  })

  it ('#getStore() should return an instance of an array', () => {
    expect(repo.getStore()).to.be.an('array')
  })

  it ('#getStore() should return an empty array', () => {
    expect(repo.getStore().length).to.equal(0)
  })

  it ('#getStorePath() should return the appropriate path to the store file', () => {
    expect(repo.getStorePath(storeName, storeExt)).to.equal(`${process.cwd()}/${storeName}.${storeExt}`)
  })

  it ('#updateMobileNumbers() should update the mobile numbers in the store with out any errors', () => {
    expect(() => repo.updateMobileNumbers(mobileNumbers.initialMobileNumbers)).to.not.throw()
  })

  it ('#getStore() should return all mobile numbers already added to the store', () => {
    expect(repo.getStore().length).to.equal(mobileNumbers.initialMobileNumbers.length)
    expect(repo.getStore()).to.deep.equal(mobileNumbers.initialMobileNumbers)
  })

  it ('#getStore() should return all mobile numbers added over time', () => {
    repo.updateMobileNumbers([
      ...repo.getStore(), 
      ...mobileNumbers.newMobileNumbers
    ])
    expect(repo.getStore().length).to.equal(
      mobileNumbers.initialMobileNumbers.length + mobileNumbers.newMobileNumbers.length
    )
    expect(repo.getStore()).to.deep.equal([
      ...mobileNumbers.initialMobileNumbers, 
      ...mobileNumbers.newMobileNumbers
    ])
  })
})
