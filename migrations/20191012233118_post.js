
exports.up = function(knex) {
    return knex.schema.createTable('Post', function (table) {
        table.increments('postId')
        table.integer('userId')
            .notNullable()
            .references('userId')
            .inTable('User')
            .onDelete('CASCADE')
        table.string('imagePath')
            .notNullable()
        table.string('caption', 250)
            .notNullable()
        table.integer('like')
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Post')
};
