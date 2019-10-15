exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Post').del()
    .then(function () {
      // Inserts seed entries
      return knex('Post').insert([
        { userId: 3, imagePath: 'imagePath1', caption: 'Sample caption for the uploaded image!', like: 84 },
        { userId: 1, imagePath: 'imagePath2', caption: 'Sample caption for the uploaded image!', like: 12 },
        { userId: 4, imagePath: 'imagePath3', caption: 'Sample caption for the uploaded image!', like: 3 },
        { userId: 4, imagePath: 'imagePath4', caption: 'Sample caption for the uploaded image!', like: 4 },
        { userId: 3, imagePath: 'imagePath5', caption: 'Sample caption for the uploaded image!', like: 20 }
      ])
    })
}
