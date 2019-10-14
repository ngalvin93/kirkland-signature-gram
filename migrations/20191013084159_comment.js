
exports.up = function (knex) {
  return knex.schema.createTable('Comment', function (table) {
    table.increments('commentId')
    table.integer('userId')
      .notNullable()
      .references('userId')
      .inTable('User')
      .onDelete('CASCADE')
    table.integer('postId')
      .notNullable()
      .references('postId')
      .inTable('Post')
      .onDelete('CASCADE')
    table.string('comment', 250)
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Comment')
}
