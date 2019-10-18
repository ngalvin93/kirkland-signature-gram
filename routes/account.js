const express = require('express')
const router = express.Router()

// Routes below are prepended with /account from mounting on app.js
router.get('/login', function (req, res) {
  res.render('login')
})

router.post('/login', function (req, res, next) {
  console.log('post to /login')
  if (validUser(req.body)) {
    res.send('Valid email and password format')
  } else {
    next(new Error('Invalid email and password format'))
  }
})

router.get('/register', function (req, res) {
  res.render('register')
})

router.post('/register', function (req, res, next) {
  if (validUser(req.body)) {
    res.redirect('/')
  } else {
    next(new Error('Invalid email and password format'))
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
function validUser (user) {
  const validEmail = typeof user.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)
  const validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length >= 6
  return validEmail && validPassword
}

module.exports = router // exports this router usually to app.js
