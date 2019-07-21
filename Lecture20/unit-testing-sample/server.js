const express = require('express')
const { calcFare } = require('./fareutils')

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/fare', (req, res) => {
  const km = parseFloat(req.query.km)
  const min = parseInt(req.query.min)

  // calculate fare here

  res.json({
    fare: calcFare(km, min),
  })
})

app.get('/hello', (req, res) => {
  res.send('Hello')
})

module.exports = {
  app,
}
