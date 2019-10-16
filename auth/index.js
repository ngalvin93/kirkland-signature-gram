const express = require('express')
const router = express.Router()

// Routes below are prepended with /auth from mounting on app.js
router.get('/login', function (req, res) {
  res.json({
    message: 'Login page with form'
  })
})

router.post('/login', function (req, res) {
  res.json({
    message: 'Attemping to send login information'
  })
})

router.get('/register', function (req, res) {
  res.json({
    message: 'Register page with form'
  })
})

router.post('/register', function (req, res) {
  res.json({
    message: 'Attempting to send register information'
  })
})

module.exports = router // exports this router usually to app.js
