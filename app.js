// var createError = require('http-errors')
require('dotenv').config()
var express = require('express')
var path = require('path')
const bcrypt = require('bcrypt')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var FacebookStrategy = require('passport-facebook').Strategy
var session = require('express-session')

var indexRouter = require('./routes/index')
var accountRouter = require('./routes/account') // automatically looks for index.js in the specified directory

var { findUserByUsernameStrategy, findUserByIdStrategy } = require('./db')

var app = express()

const port = process.env.PORT || 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// set up express sessions
app.set('trust proxy', 1)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())
app.use(passport.session())

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404))
// })

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.use('/', indexRouter)
app.use('/account', accountRouter)

// passport configuration
passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log('🔸 Checking to see if there is a user with that username...')
    findUserByUsernameStrategy(username)
      .then(function (result) {
        if (result) {
          console.log('✅ User found! This is the user: ', result)
          const user = result
          console.log('🔸 Comparing the passwords: ' + user.password + ' 🆚 ' + password)
          bcrypt.compare(password, user.password)
            .then(function (bool) {
              if (user && bool) {
                console.log('Password matched! ✨')
                return done(null, user)
              } else {
                console.log('Password did not match! 🤮')
                return done(null, false)
              }
            })
        } else {
          console.log('Theres no user with that login')
          return done(null, false)
        }
      })
      .catch(function (error) {
        console.log('findUserByUsernameStrategy error: ', error)
        return done(error)
      })
  }
))

passport.serializeUser(function (user, done) {
  console.log('👉🏻 SERIALIZING')
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  console.log('👉🏻 DESERIALIZING')
  findUserByIdStrategy(user.userId)
    .then(function (user) {
      done(null, user[0])
    })
    .catch(function (error) {
      console.log('deserializeUser err:', error)
      done(error, null)
    })
})

// local strategy
// passport.use(new Strategy(
//   function (username, password, cb) {
//     db.users.findByUsername(username, function (err, user) {
//       if (err) { return cb(err) }
//       if (!user) { return cb(null, false) }
//       if (user.password !== password) { return cb(null, false) }
//       return cb(null, user)
//     })
//   }))

// facebook strategy
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: '/auth/facebook/callback'
},
function (accessToken, refreshToken, profile, cb) {
  return cb(null, profile)
}
))

// // this is the session id associated with the id
// passport.serializeUser(function (user, cb) {
//   cb(null, user)
// })

// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj)
// })

// facebook
app.get('/auth/facebook',
  passport.authenticate('facebook'))

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/error' }),
  function (req, res) {
    res.redirect('/success')
  })

app.get('/success', (req, res) => res.send('You have successfully logged in'))

app.get('/error', (req, res) => res.send('error logging in'))

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404))
// })

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}

//   // render the error page
//   res.status(err.status || 500)
//   res.render('error')
// })

// listen on port
app.listen(port, function () {
  console.log('Listening on port ' + port + ' 👌')
})

module.exports = app
