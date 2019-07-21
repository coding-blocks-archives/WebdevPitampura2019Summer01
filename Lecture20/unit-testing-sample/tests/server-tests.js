const { app } = require('../server')
const request = require('request')
const { expect } = require('chai')

describe('GET /fare server tests', () => {
  let server = null

  before(() => {
    server = app.listen(3333)
  })

  it('should return 20 for 0 km and 0 min', (done) => {
    request('http://localhost:3333/fare?km=0&min=0',
    (err, resp, body) => {
      if (err) return done(err)

      let data = JSON.parse(body)

      expect(data.fare).to.equal(20)
      done()

    })
  })

  after(() => {
    server.close()
  })
})
