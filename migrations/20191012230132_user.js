
exports.up = function (knex) {
  return knex.schema.createTable('User', function (table) {
    table.increments('userId')
    table.string('fullName', 25)
      .notNullable()
    table.string('username', 25)
      .notNullable()
      .unique()
    table.string('email', 100)
      .notNullable()
      .unique()
    table.string('password', 60)
      .notNullable()
    table.string('bio', 250)
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('User')
}
