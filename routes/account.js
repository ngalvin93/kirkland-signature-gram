const express = require('express')
const router = express.Router()
const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig.development)
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// testing

router.get('/test', function (req, res) {
  findUserById(2)
    .then(function (student) {
      res.send(student)
    })
    .catch(function (error) {
      console.log(error)
      res.status(500).send('Something went wrong')
    })
})

// Routes below are prepended with /account from mounting on app.js
router.get('/login', function (req, res) {
  res.render('login')
})

router.post('/login', function (req, res, next) {
  if (validLoginInformation(req.body)) {
    res.send('Valid email and password format')
  } else {
    next(new Error('Invalid email and password format'))
  }
})

router.get('/register', function (req, res) {
  res.render('register')
})

router.post('/register', function (req, res, next) {
  if (validRegisterInformation(req.body.username)) {
    res.redirect('/')
  } else {
    next(new Error('Invalid username and password format'))
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
  const validUsername = typeof user.username === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.username)
  const validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length >= 6
  return validUsername && validPassword
}

function validLoginInformation (user) {
  const validUsername = typeof user.username === 'string' && user.username.trim().length < 25
  const validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length >= 6
  return validUsername && validPassword
}

// knex queries
// --------------------------------------------------------------------------------------------------------
function findUserById (id) {
  return knex.select().from('User').where({
    userId: id
  })
    .then(function (results) {
      if (results.length === 0) {
        throw null
      } else {
        return results[0]
      }
    })
}

module.exports = router // exports this router usually to app.js
