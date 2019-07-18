const express = require('express')
const session = require('express-session')


const app = express()

app.use(session({
  secret: 'a very long unguessable string',
  resave: false,
  saveUninitialized: true
}))

app.get('/', (req ,res) => {
  res.send('Hello there!')
})


app.listen(8787, () => {
  console.log('Server started on http://localhost:8787')
})

