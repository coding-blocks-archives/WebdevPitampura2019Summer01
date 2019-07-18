const express = require('express')
const session = require('express-session')


const app = express()

app.use(session({
  secret: 'a very long unguessable string',
  resave: false,
  saveUninitialized: true
}))

app.get('/', (req ,res) => {
  console.log(req.session)

  if (!req.session.visits) {
    req.session.visits = 1
    res.send('Hello There')
  } else {
    req.session.visits++
    res.send('Welcome Back')
  }
  req.session.save()
})


app.listen(8787, () => {
  console.log('Server started on http://localhost:8787')
})

