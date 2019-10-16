
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Like').del()
    .then(function () {
      // Inserts seed entries
      return knex('Like').insert([
        { postId: 2 },
        { postId: 1 },
        { postId: 5 },
        { postId: 5 },
        { postId: 3 }
      ])
    })
}
