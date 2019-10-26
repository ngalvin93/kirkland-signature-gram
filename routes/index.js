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
        console.log('All the posts here: ', results)
        console.log('Req.user: ', req.user.username)
        // var resultsString = JSON.stringify(results)
        res.render('home', {
          posts: results,
          user: req.user
        })
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
        res.render('profile', {
          user: req.user.username,
          profile: req.user.fullName
        })
      })
      .catch(function (err) {
        next(new Error(err))
      })
  } else if (req.isAuthenticated()) {
    findUserByUsername(req.params.username)
      .then(function (user) {
        if (user) {
          res.render('profile', {
            user: req.user.username,
            profile: user.fullName
          })
        } else {
          res.send('USER NOT FOUND! TRY ANOTHER USERNAME.')
        }
      })
      .catch(function (err) {
        next(new Error(err))
      })
  } else {
    findUserByUsername(req.params.username)
    .then(function (user) {
      if (user) {
        res.render('profile', {
          user: req.params.username,
          profile: user.username
        })
      } else {
        res.send('USER NOT FOUND! TRY ANOTHER USERNAME.')
      }
    })
    .catch(function (err) {
      next(new Error(err))
    })
  }
})

module.exports = router
