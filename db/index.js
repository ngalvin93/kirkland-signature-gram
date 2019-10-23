const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig.development)

// knex queries
// --------------------------------------------------------------------------------------------------------
function findUserByUsernameStrategy (username) {
  return knex('User').where('username', username)
    .then(function (result) {
      const user = result[0]
      return user
    })
    .catch(function (err) {
      console.log(err)
      return null
    })
}

function findUserByIdStrategy (id) {
  return knex('User').where('userId', id)
}

function findUserByUsername (user) {
  const username = user.username
  return knex.select().from('User').where({
    username: username
  })
    .then(function (userArr) {
    // const singleUser = userArr[0]
    // console.log(userArr)
      const singleUser = {
        username: userArr[0].username,
        password: userArr[0].password
      }
      console.log(singleUser)
      return singleUser
    })
    .catch(function (err) {
      console.error(err)
    })
}

function insertNewUser (user) {
  return knex('User').insert({
    fullName: user.fullName,
    username: user.username,
    email: user.email,
    password: user.password
  }, 'username')
}

module.exports = {
  findUserByUsernameStrategy,
  findUserByIdStrategy,
  findUserByUsername,
  insertNewUser
}
