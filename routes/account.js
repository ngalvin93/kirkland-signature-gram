const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router()
const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig.development)
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// passport configuration
passport.use(new LocalStrategy(
  function (username, password, done) {
    // is there an exisitng use with that username? see if there a username that matches the username
    findUserByUsernameStrategy(username)
      .then(function (result) {
        const user = result[0]
        if (user && user.password === password) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
      .catch(function (error) {
        console.log('findUserByUsernameStrategy error: ', error)
        return done(error)
      })
  }
))

// session configuration
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

// routes below are prepended with /account from mounting on app.js
router.get('/login', function (req, res) {
  res.render('login')
})

router.post('/login', function (req, res, next) {
  // validate correct login information
  // check if there is a user with the username
  // if there is an existing user, then compare passwords
  // if there is no existing user, then return an error
  // if passwords match, then login and redirect
  if (validLoginInformation(req.body)) {
    findUserByUsername(req.body)
      .then(function (userObj) {
        console.log('This is after pulling from the db: ', userObj)
        if (!userObj) {
          res.send('There was a login error!')
        } else {
          console.log(req.body.password)
          bcrypt.compare(req.body.password, userObj.password)
            .then(function (bool) {
              console.log('Result of compare: ', bool)
              if (bool) {
                res.redirect(`/${userObj.username}`)
              } else {
                res.send('There was a login error!')
              }
            })
        }
      })
  } else {
    next(new Error('Invalid information format'))
  }
})

router.get('/register', function (req, res) {
  res.render('register')
})

router.post('/register', function (req, res, next) {
  if (validRegisterInformation(req.body)) {
    bcrypt.hash(req.body.password, 10)
      .then(function (hash) {
        const fullname = req.body.fullname
        const username = req.body.username
        const email = req.body.email
        const password = hash
        const bcryptUser = {
          fullName: fullname,
          username: username,
          email: email,
          password: password
        }
        insertNewUser(bcryptUser)
          .then(function (username) {
            res.redirect(`/${username}`)
          })
          .catch(function (err) {
            console.log(err)
            next(new Error(err))
          })
      })
  } else {
    res.send('something went wong!!!!')
  }
})

router.get('/edit', function (req, res) {
  res.send('Account settings')
})

router.post('/edit', function (req, res) {
  res.send('Change account settings')
})

// validation functions
// --------------------------------------------------------------------------------------------------------
function validRegisterInformation (user) {
  const validFullName = typeof user.fullname === 'string' && user.fullname.trim() !== '' && (user.fullname.trim().length >= 1 && user.fullname.trim().length <= 25)
  const validUsername = typeof user.username === 'string' && user.username.trim() !== '' && (user.fullname.trim().length >= 1 && user.fullname.trim().length <= 25)
  const validEmail = typeof user.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) && user.email.trim() !== '' && (user.fullname.trim().length >= 1 && user.fullname.trim().length <= 100)
  const validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length <= 6
  return validFullName && validUsername && validEmail && validPassword
}

function validLoginInformation (user) {
  const validUsername = typeof user.username === 'string' && user.username.trim() !== '' && user.username.trim().length >= 1
  const validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length <= 6
  return validUsername && validPassword
}

// knex queries
// --------------------------------------------------------------------------------------------------------
function findUserByUsername (user) {
  const username = user.username
  return knex.select().from('User').where({
    username: username
  })
    .then(function (userArr) {
      // const singleUser = userArr[0]
      // console.log(userArr)
      const singleUser = {
        username: userArr[0].username,
        password: userArr[0].password
      }
      console.log(singleUser)
      return singleUser
    })
    .catch(function (err) {
      console.error(err)
    })
}

function findUserByUsernameStrategy (username) {
  return knex('User').where('username', username)
}

function insertNewUser (user) {
  return knex('User').insert({
    fullName: user.fullName,
    username: user.username,
    email: user.email,
    password: user.password
  }, 'username')
}

module.exports = router // exports this router usually to app.js
