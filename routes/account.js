const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
const router = express.Router()
const app = express()
var { getPasswordFromUsername, insertNewUser } = require('../db')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes below are prepended with /account from mounting on app.js
router.get('/login', function (req, res) {
  res.render('login')
})

// function checkAuth (req, res, next) {
//   if (req.isAuthenticated()) {
//     next()
//   } else {
//     res.redirect('login')
//   }
// }

router.post('/login', passport.authenticate('local', { failureRedirect: 'login', successRedirect: '/' }), function (req, res, next) {
  console.log('✅Verifying login information and posting to /login...')
  if (validLoginInformation(req.body)) {
    console.log('✅Login information is valid! Searching for the user in the database...')
    getPasswordFromUsername(req.body)
      .then(function (userObj) {
        console.log('✅Found this user in the database: ', userObj)
        if (!userObj) {
          res.send('There was a login error!')
        } else {
          console.log(req.body.password)
          bcrypt.compare(req.body.password, userObj.password)
            .then(function (bool) {
              console.log('Result of compare: ', bool)
              if (bool) {
                res.redirect(`/${userObj.username}`)
              } else {
                res.send('There was a login error!')
              }
            })
        }
      })
      .catch(function (error) {
        next(new Error(error))
      })
  } else {
    next(new Error('Invalid information format'))
  }
})

router.get('/register', function (req, res) {
  res.render('register')
})

router.post('/register', function (req, res, next) {
  console.log('--------------------------------------------------------------------')
  console.log('Here is the request body: ', req.body)
  if (validRegisterInformation(req.body)) {
    console.log('Here is the request body: ', req.body)
    bcrypt.hash(req.body.password, 10)
      .then(function (hash) {
        const fullname = req.body.fullname
        const username = req.body.username
        const email = req.body.email
        const password = hash
        const bcryptUser = {
          fullName: fullname,
          username: username,
          email: email,
          password: password
        }
        insertNewUser(bcryptUser)
          // somewhere here a session for the new user should be created
          .then(function (username) {
            res.redirect(`/${username}`)
          })
          .catch(function (err) {
            console.log(err)
            next(new Error(err))
          })
      })
  } else {
    res.send('The information you entered is not valid format!')
  }
})

// clicks this on /:username
router.get('/edit', function (req, res) {
  console.log('🐷 Session content: ', req.session)
  console.log('🐸 User content: ', req.user)
  if (req.isAuthenticated()) {
    res.json({
      Name: req.user.fullName,
      Username: req.user.username,
      Email: req.user.email,
      Bio: req.user.bio
    })
  } else {
    res.redirect('login')
  }
})

// when on account/edit, user can edit basic information like bio
router.post('/edit', function (req, res) {
  if (req.isAuthenticated()) {
    console.log('🌈 Editing the account information!')
    res.send('Changed account information')
  } else {
    res.redirect('login')
  }
})

// user clicks a logout button
router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

// validation functions
// --------------------------------------------------------------------------------------------------------
function validRegisterInformation (user) {
  const validFullName = typeof user.fullname === 'string' && user.fullname.trim() !== '' && (user.fullname.trim().length >= 1 && user.fullname.trim().length <= 25)
  const validUsername = typeof user.username === 'string' && user.username.trim() !== '' && (user.fullname.trim().length >= 1 && user.fullname.trim().length <= 25)
  const validEmail = typeof user.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) && user.email.trim() !== '' && (user.fullname.trim().length >= 1 && user.fullname.trim().length <= 100)
  const validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length <= 6
  return validFullName && validUsername && validEmail && validPassword
}

function validLoginInformation (user) {
  const validUsername = typeof user.username === 'string' && user.username.trim() !== '' && user.username.trim().length >= 1
  const validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length <= 6
  return validUsername && validPassword
}

module.exports = router // exports this router usually to app.js
