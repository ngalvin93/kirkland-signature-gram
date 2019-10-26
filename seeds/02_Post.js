exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Post').del()
    .then(function () {
      // Inserts seed entries
      return knex('Post').insert([
        { userId: 3, imagePath: '/uploads/5eb31158b407bd0e377d.jpeg', caption: 'Digitial crafts is lyfe'},
        { userId: 1, imagePath: '/uploads/6cfc035fee0950025d2c.jpeg', caption: 'Turn around dont drown' },
        { userId: 4, imagePath: '/uploads/69aae1bb895aef040e26.jpeg', caption: '🔥🔥🔥🔥🔥🔥' },
        { userId: 4, imagePath: '/uploads/892ba56277cf564f4379.jpeg', caption: 'OMG WTF DIS IS CRAY' },
        { userId: 3, imagePath: '/uploads/2307e48c8b5242b41f8c.jpeg', caption: 'Wingaurdian Leviosa in dis thang :)' }
      ])
    })
}
