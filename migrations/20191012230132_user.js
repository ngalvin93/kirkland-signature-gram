
exports.up = function(knex) {
return knex.schema.createTable('User', function (table) {
  table.increments('userId')
  table.string('firstName', 25)
    .notNullable()
  table.string('lastName', 25)
    .notNullable()
  table.string('email', 100)
    .notNullable()
    .unique()
  table.string('password', 6)
    .notNullable()
  table.string('bio', 250)
  table.timestamps(true, true)
})
};

exports.down = function(knex) {
  return knex.schema.dropTable('User')
};