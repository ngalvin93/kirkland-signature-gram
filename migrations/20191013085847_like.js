
exports.up = function (knex) {
  return knex.schema.createTable('Like', function (table) {
    table.increments('likeId')
    table.integer('postId')
      .notNullable()
      .references('postId')
      .inTable('Post')
      .onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Like')
}
