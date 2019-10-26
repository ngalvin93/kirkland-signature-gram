exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Post').del()
    .then(function () {
      // Inserts seed entries
      return knex('Post').insert([
        { userId: 3, imagePath: '/uploads/img1.jpg', caption: 'Digitial crafts is lyfe' },
        { userId: 1, imagePath: '/uploads/img2.jpg', caption: 'Turn around dont drown' },
        { userId: 4, imagePath: '/uploads/img3.jpg', caption: '🔥🔥🔥🔥🔥🔥' },
        { userId: 4, imagePath: '/uploads/img4.jpg', caption: 'OMG WTF DIS IS CRAY' },
        { userId: 3, imagePath: '/uploads/img5.jpg', caption: 'Wingaurdian Leviosa in dis thang :)' }
      ])
    })
}
