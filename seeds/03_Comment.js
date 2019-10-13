
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('Comment').insert([
        {userId: 2, postId: 2, comment: 'Awesome photo'},
        {userId: 3, postId: 2, comment: 'Great stuff'},
        {userId: 5, postId: 1, comment: 'Generic comment on a generic post!!!! #fire'},
        {userId: 1, postId: 4, comment: 'Hey this is cool'},
        {userId: 2, postId: 5, comment: 'Coding is life :)'}
      ]);
    });
};