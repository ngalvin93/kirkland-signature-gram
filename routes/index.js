var express = require('express')
var router = express.Router()
var { findUserByUsername } = require('../db')

/* GET home page. */
router.get('/', function (req, res, next) {
  // here is the user object
  console.log('Here is the req session: ', req.user)
  if (req.isAuthenticated()) {
    // res.render('home')
    // if there is a session, render out all the posts
    // getAllPosts
    res.json(req.user)
  } else {
    res.redirect('account/login')
  }
})

router.get('/:username', function (req, res, next) {
  findUserByUsername(req.params.username)
    .then(function (user) {
      res.send(user)
    })
    .catch(function (err) {
      res.status(404).send('That username does not exist! Error: ' + err)
    })
})

module.exports = router
