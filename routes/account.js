const express = require('express')
const router = express.Router()

// Routes below are prepended with /account from mounting on app.js
router.get('/login', function (req, res) {
  res.render('login')
})

router.post('/login', function (req, res) {
  res.send('Attemping to send login information')
})

router.get('/register', function (req, res) {
  res.render('register')
})

router.post('/register', function (req, res, next) {
  if(req.body) {
    console.log('truth', req.body.email)
  } else {
    console.log('false', req.body)
    next(new Error('Invalid user'))
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
  const validEmail = typeof user.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const validPassword = typeof user.password === 'string' && user.password.trim() != '' && user.password.trim().length >= 6
  console.log("from thr function: " + user)
  return validEmail && validPassword
}

module.exports = router // exports this router usually to app.js
