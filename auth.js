var passport = require('passport')
const bcrypt = require('bcrypt')
var LocalStrategy = require('passport-local').Strategy
var { findUserByUsernameStrategy, findUserByIdStrategy } = require('./db')

const strategy = new LocalStrategy(
  function (username, password, done) {
    console.log('🔸 Checking to see if there is a user with that username...')
    findUserByUsernameStrategy(username)
      .then(function (result) {
        if (result) {
          console.log('✅ User found! This is the user: ', result)
          const user = result
          console.log('🔸 Comparing the passwords: ' + user.password + ' 🆚 ' + password)
          bcrypt.compare(password, user.password)
            .then(function (bool) {
              if (user && bool) {
                console.log('Password matched! ✨')
                return done(null, user)
              } else {
                console.log('Password did not match! 🤮')
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

passport.use(strategy)

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
