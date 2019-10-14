
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Like').del()
    .then(function () {
      // Inserts seed entries
      return knex('Like').insert([
        { userId: 1, postId: 2 },
        { userId: 3, postId: 1 },
        { userId: 3, postId: 5 },
        { userId: 2, postId: 5 },
        { userId: 5, postId: 3 }
      ])
    })
}
