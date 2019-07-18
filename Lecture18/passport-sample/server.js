const express = require('express')
const { db, Users } = require('./db')
const session = require('express-session')
const passport = require('./setuppassport')

const app = express()

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: 'k2h4b 6k24h j6 b24kj6b 24kj6b 2',
    resave: false,
    saveUninitialized: true,
  }),
)

// must come after session middleware
app.use(passport.initialize())
app.use(passport.session())

app.get('/signup', (req, res) => res.render('signup'))
app.post('/signup', (req, res) => {
  Users.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => {
      console.log(user)
      res.redirect('/login')
    })
    .catch((err) => {
      console.error(err)
      res.redirect('/signup')
    })
})

app.get('/login', (req, res) => res.render('login'))

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
  }),
)

function checkLoggedIn(req, res, next) {
  if (req.user) {
    return next()
  }
  res.redirect('/login')
}

app.get('/home', checkLoggedIn,  (req, res) => {
  res.send('Welcome Home')
})

app.get('/home2', checkLoggedIn,  (req, res) => {
  res.send('Welcome Home2')
})


db.sync().then(() => {
  app.listen(8787, () => {
    console.log('Server started on http://localhost:8787')
  })
})
