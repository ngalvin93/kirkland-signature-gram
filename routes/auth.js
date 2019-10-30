const passport = require('./auth')
const express = require('express')
const router = express.Router()

// facebook
router.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'email' }))

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/error' }),
  function (req, res) {
    res.redirect('/')
  })

module.exports = router
