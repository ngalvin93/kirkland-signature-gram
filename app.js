// var createError = require('http-errors')
require('dotenv').config()
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var passport = require('./auth')
var FacebookStrategy = require('passport-facebook').Strategy
var session = require('express-session')

var indexRouter = require('./routes/index')
var accountRouter = require('./routes/account') // automatically looks for index.js in the specified directory

var { findOrCreateUser } = require('./db')

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
  res.render('error')
})

app.use('/account', accountRouter)
app.use('/', indexRouter)

// facebook strategy
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: '/auth/facebook/callback'
},
function (accessToken, refreshToken, profile, done) {
  findOrCreateUser(profile)
  done(null, profile)
}))

app.get('/auth/facebook',
  passport.authenticate('facebook'))

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
