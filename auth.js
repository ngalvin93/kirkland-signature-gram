const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const { findUserByUsernameStrategy, findUserByIdStrategy } = require('./db')

// configure local strategy
const localStrategy = new LocalStrategy(
  function (username, password, done) {
    console.log('🔸 Checking to see if there is a user with that username...')
    findUserByUsernameStrategy(username)
      .then(function (result) {
        if (result) {
          console.log('✅ User found')
          const user = result
          console.log('🔸 Comparing the passwords...')
          bcrypt.compare(password, user.password)
            .then(function (bool) {
              if (user && bool) {
                console.log('✨ Password matched!')
                return done(null, user)
              } else {
                console.log('🤮 Password did not match!')
                return done(null, false)
              }
            })
        } else {
          console.log('Theres no user with that login')
          return done(null, false)
        }
      })
      .catch(function (error) {
        console.log('findUserByUsernameStrategy error: ', error)
        return done(error)
      })
  })

// configure facebook strategy
const facebookStrategy = new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: '/auth/facebook/callback', // redirect user back to app after approval from facebook; this is where the user details will be stored
  profileFields: ['id', 'emails', 'displayName']
},
// facebook will send back token and profile
function (accessToken, refreshToken, profile, done) {
  // findOrCreateUser(profile)
  console.log(profile)
  done(null, profile)
})

passport.use(localStrategy)
passport.use(facebookStrategy)

passport.serializeUser(function (user, done) {
  console.log('👉🏻 SERIALIZING USER: ' + user)
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  console.log('👉🏻 DESERIALIZING USER: ' + user)
  findUserByIdStrategy(user.userId)
    .then(function (user) {
      done(null, user[0])
    })
    .catch(function (error) {
      console.log('Deserialize Error:', error)
      done(error, null)
    })
})

module.exports = passport
