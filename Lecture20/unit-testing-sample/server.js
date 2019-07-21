const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/fare', (req, res) => {
  const km = req.query.km
  const min = req.query.min

  // calculate fare here

  res.json({
    fare: 0.00
  })
})

app.listen(4567, () => {
  console.log('Server running http://localhost:4567')
})
