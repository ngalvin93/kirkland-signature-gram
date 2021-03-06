// var createError = require('http-errors')
require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('./auth')
// const FacebookStrategy = require('passport-facebook').Strategy
const session = require('express-session')

const accountRouter = require('./routes/account') // automatically looks for index.js in the specified directory
const indexRouter = require('./routes/index')

// const { findOrCreateUser } = require('./db')

const app = express()

const port = process.env.PORT || 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// set up express sessions
app.set('trust proxy', 1)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())
app.use(passport.session())

// error handlerr
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.send('There is an error...')
})

app.use('/account', accountRouter)
app.use('/', indexRouter)

// facebook strategy
// passport.use(new FacebookStrategy({
//   clientID: process.env.FACEBOOK_APP_ID,
//   clientSecret: process.env.FACEBOOK_APP_SECRET,
//   callbackURL: '/auth/facebook/callback', // redirect user back to app after approval from facebook; this is where the user details will be stored
//   profileFields: ['id', 'email', 'name']
// },
// function (accessToken, refreshToken, profile, done) {
//   findOrCreateUser(profile)
//   done(null, profile)
// }))

app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'email' }))

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/error' }),
  function (req, res) {
    res.redirect('/')
  })

app.get('/success', (req, res) => res.send('You have successfully logged in'))
app.get('/error', (req, res) => res.send('error logging in'))

// listen on port
app.listen(port, function () {
  console.log('Listening on port ' + port + ' 👌')
})

module.exports = app
