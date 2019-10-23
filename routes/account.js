const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
// const session = require('express-session')
// const LocalStrategy = require('passport-local').Strategy
const router = express.Router()
const app = express()
var {findUserByUsername,insertNewUser} = require('../db') 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// // passport configuration
// passport.use(new LocalStrategy(
//   function (username, password, done) {
//     console.log('🔸 Checking to see if there is a user with that username...')
//     findUserByUsernameStrategy(username)
//       .then(function (result) {
//         if (result) {
//           console.log('✅ User found! This is the user: ', result)
//           const user = result
//           console.log('🔸 Comparing the passwords: ' + user.password + ' 🆚 ' + password)
//           bcrypt.compare(password, user.password)
//             .then(function (bool) {
//               if (user && bool) {
//                 console.log('Password matched! ✨')
//                 return done(null, user)
//               } else {
//                 console.log('Password did not match! 🤮')
//                 return done(null, false)
//               }
//             })
//         } else {
//           console.log('Theres no user with that login')
//           return done(null, false)
//         }
//       })
//       .catch(function (error) {
//         console.log('findUserByUsernameStrategy error: ', error)
//         return done(error)
//       })
//   }
// ))

// passport.serializeUser(function (user, done) {
//   console.log('👉🏻 SERIALIZING')
//   done(null, user.userId)
// })

// passport.deserializeUser(function (id, done) {
//   console.log('👉🏻 DESERIALIZING')
//   findUserByIdStrategy(id)
//     .then(function (user) {
//       done(null, user[0])
//     })
//     .catch(function (error) {
//       console.log('deserializeUser err:', error)
//       done(error, null)
//     })
// })

// // session configuration
// app.set('trust proxy', 1)
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }))

// // init passport
// app.use(passport.initialize())
// app.use(passport.session())

// routes below are prepended with /account from mounting on app.js
router.get('/login', function (req, res) {
  res.render('login')
})

router.post('/login', passport.authenticate('local', { failureRedirect: 'login', successRedirect: '/' }), function (req, res, next) {
  console.log('✅Verifying login information and posting to /login...')
  if (validLoginInformation(req.body)) {
    console.log('✅Login information is valid! Searching for the user in the database...')
    findUserByUsername(req.body)
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
  if (validRegisterInformation(req.body)) {
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
          .then(function (username) {
            res.redirect(`/${username}`)
          })
          .catch(function (err) {
            console.log(err)
            next(new Error(err))
          })
      })
  } else {
    res.send('something went wong!!!!')
  }
})

router.get('/edit', function (req, res) {
  res.send('Account settings')
})

router.post('/edit', function (req, res) {
  res.send('Change account settings')
})

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

// // knex queries
// // --------------------------------------------------------------------------------------------------------
// function findUserByUsernameStrategy (username) {
//   return knex('User').where('username', username)
//     .then(function (result){
//       const user = result[0]
//       return user
//     })
//     .catch(function(err){
//       console.log(err)
//       return null
//     })
// }

// function findUserByIdStrategy (id) {
//   return knex('User').where('userId', id)
// }

// function findUserByUsername (user) {
//   const username = user.username
//   return knex.select().from('User').where({
//     username: username
//   })
//     .then(function (userArr) {
//       // const singleUser = userArr[0]
//       // console.log(userArr)
//       const singleUser = {
//         username: userArr[0].username,
//         password: userArr[0].password
//       }
//       console.log(singleUser)
//       return singleUser
//     })
//     .catch(function (err) {
//       console.error(err)
//     })
// }

// function insertNewUser (user) {
//   return knex('User').insert({
//     fullName: user.fullName,
//     username: user.username,
//     email: user.email,
//     password: user.password
//   }, 'username')
// }

module.exports = router // exports this router usually to app.js
