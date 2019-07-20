const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const GithubStrategy = require('passport-github').Strategy
const { Users } = require('./db')

passport.use(
  new LocalStrategy((username, password, done) => {
    Users.findOne({
      where: {
        username,
      },
    })
      .then((user) => {
        if (!user) {
          return done(new Error('Username invalid'))
        }

        if (user.password != password) {
          return done(null, false)
        }

        done(null, user)
      })
      .catch(done)
  }),
)

passport.use(
  new FacebookStrategy(
    {
      clientID: '510074252855921',
      clientSecret: '5c8cc5db4f4b311324c3843373c81ad1',
      callbackURL: 'http://localhost:8787/login/facebook/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      Users.create({
        username: profile.id,
        fbAccessToken: accessToken,
      })
        .then((user) => {
          done(null, user)
        })
        .catch(done)
    },
  ),
)

passport.use(
  new GithubStrategy(
    {
      clientID: 'Iv1.dd202091e69d1ad3',
      clientSecret: '9a24f48d1cd21cef57d805d3fff2d269c7b5e94c',
      callbackURL: 'http://localhost:8787/login/github/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      Users.create({
        username: profile.id,
        ghAccessToken: accessToken,
      })
        .then((user) => {
          done(null, user)
        })
        .catch(done)
    },
  ),
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((userId, done) => {
  Users.findOne({
    where: {
      id: userId,
    },
  })
    .then((user) => done(null, user))
    .catch(done)
})

module.exports = passport
