var express = require('express')
var router = express.Router()
var { findUserByUsername, getAllPosts } = require('../db')

// routes
// --------------------------------------------------------------------------------------------------------------
router.get('/', function (req, res, next) {
  console.log('Here is the req session: ', req.user)
  if (req.isAuthenticated()) {
    getAllPosts()
      .then(function (results) {
        // console.log('All the posts here: ', results)
        res.json(results)
      })
  } else {
    res.render('login')
  }
})

router.get('/:username', function (req, res, next) {
  console.log('⚡️ Request params: ', req.params.username)
  console.log('⚡️ Request user session: ', req.user)
  if (req.isAuthenticated() && (req.params.username === req.user.username)) {
    findUserByUsername(req.params.username)
      .then(function (user) {
        res.json({
          Status: 'Administrator',
          'Full Name': user.fullname,
          Username: user.username,
          Bio: user.bio
        })
      })
      .catch(function (err) {
        next(new Error(err))
      })
  } else {
    findUserByUsername(req.params.username)
      .then(function (user) {
        res.json({
          Status: 'Visitor',
          'Full Name': user.fullname,
          Username: user.username,
          Bio: user.bio
        })
      })
      .catch(function (err) {
        next(new Error(err))
      })
  }
})

module.exports = router
