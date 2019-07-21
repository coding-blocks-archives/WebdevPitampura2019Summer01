const { calcFare } = require('../fareutils')
const { expect } = require('chai')

describe('fare utils tests', () => {
  it('should be 20 for 2 km and 0 min', () => {
    expect(calcFare(2, 0)).to.equal(20)
  })

  it('should be 30 for 4 km and 0 min', () => {
    expect(calcFare(4, 0)).to.equal(30)
  })

  it('should be fail without arguments', () => {
    try {
      calcFare()
    } catch (e) {
      expect(e.message).to.equal('Must pass km and min')
    }
  })
})
