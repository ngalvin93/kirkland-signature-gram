var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Feed')
})

router.get('/:id', function (req, res, next) {
  if (req.params.id === 'account') {
    res.send('Sorry page not found')
  } else {
    res.render('profile')
  }
})

module.exports = router
