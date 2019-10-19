var express = require('express')
var router = express.Router()
const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig.development)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home')
})

router.get('/:username', function (req, res, next) {
  findUserByUsername(req.params.username)
  .then(function (user) {
    res.send(user)
  })
})

// knex query
// --------------------------------------------------------------------------------------------------------
function findUserById (id) {
  return knex.select().from('User').where({
    userId: id
  })
  .then(function (results) {
    if (results.length === 0) {
      throw null
    } else {
      return results[0]
    }
  })
}

function findUserByUsername (username) {
  return knex.select().from('User').where({
    username: username
  })
  .then(function (results) {
    if (results.length === 0) {
      throw null
    } else {
      return results[0]
    }
  })
}



module.exports = router
