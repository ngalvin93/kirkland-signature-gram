var express = require('express')
var router = express.Router()
var { findUserByUsername, getAllPosts, getAllPostsFromID } = require('../db')

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
  // personal profile
  if (req.isAuthenticated() && (req.params.username === req.user.username)) {
    findUserByUsername(req.params.username)
      .then(function (user) {
        return getAllPostsFromID(user.userId)
      })
      .then(function (postsArr) {
        console.log('This new user ✅: ', postsArr)
        res.render('profile', {
          user: req.user.username,
          profile: req.user.fullName,
          bio: req.user.bio,
          pic: req.user.profilePicture,
          posts: postsArr
        })
      })
      .catch(function (err) {
        next(new Error(err))
      })
  // signed in user visiting another profile
  } else if (req.isAuthenticated()) {
    findUserByUsername(req.params.username)
      .then(function (user) {
        if (user) {
          getAllPostsFromID(user.userId)
            .then(function (postsArr) {
              console.log('Post array: ', postsArr)
              res.render('profile', {
                user: req.user.username,
                profile: user.fullName,
                bio: user.bio,
                pic: user.profilePicture,
                posts: postsArr
              })
            })
        } else {
          res.send('USER NOT FOUND! TRY ANOTHER USERNAME.')
        }
      })
      .catch(function (err) {
        next(new Error(err))
      })
  // not signed in visiting a profile
  } else {
    findUserByUsername(req.params.username)
      .then(function (user) {
        if (user) {
          getAllPostsFromID(user.userId)
            .then(function (postsArr) {
              res.render('profile', {
                user: req.user,
                profile: user.fullName,
                bio: user.bio,
                pic: user.profilePicture,
                posts: postsArr
              })
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
