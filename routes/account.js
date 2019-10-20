const express = require('express')
const router = express.Router()
const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig.development)
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes below are prepended with /account from mounting on app.js
router.get('/login', function (req, res) {
  res.render('login')
})

router.post('/login', function (req, res, next) {
  if (validLoginInformation(req.body)) {
    findUserByUsername(req.body.username)
      .then(function (user) {
        if (!user) {
          res.send('there is no user with that username')
        } else {
          res.json(user)
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
    insertNewUser(req.body)
      .then(function (username) {
        res.redirect(`/${username}`)
      })
      .catch(function (err) {
        next(new Error(err))
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
  const validFullName = typeof user.fullname === 'string' && user.fullname.trim() !== '' && user.fullname.trim().length >= 1
  const validUsername = typeof user.username === 'string' && user.username.trim() !== '' && user.username.trim().length >= 1
  const validEmail = typeof user.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) && user.email.trim() !== ''
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
function findUserByUsername (username) {
  return knex.select().from('User').where({
    username: username
  })
    .then(function (user) {
      return user[0]
    })
}

function insertNewUser (user) {
  const fullname = user.fullname
  const username = user.username
  const email = user.email
  const password = user.password
  return knex('User').insert({
    fullName: fullname,
    username: username,
    email: email,
    password: password
  }, 'username')
}

module.exports = router // exports this router usually to app.js
