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
        { userId: 3, imagePath: '/uploads/img5.jpg', caption: 'Wingaurdian Leviosa in dis thang :)' },
        { userId: 4, imagePath: '/uploads/img6.jpg', caption: '✨ It gon rain today i love that' },
        { userId: 2, imagePath: '/uploads/img7.jpg', caption: 'I listen to music for the luls 🥒!!!!! crazy' },
        { userId: 1, imagePath: '/uploads/img8.jpg', caption: 'Where can I get one of those???? #costco #savings' },
        { userId: 1, imagePath: '/uploads/img9.jpg', caption: '🍭🍬🍡 life is like a box of chocolates #forestgump #film #movie' },
        { userId: 3, imagePath: '/uploads/img10.jpg', caption: 'I like where this is going....👹' },
        { userId: 2, imagePath: '/uploads/img11.jpg', caption: 'Javascript???  More like lava lips!!!' },
        { userId: 2, imagePath: '/uploads/img12.jpg', caption: '$5 rotiserrie chicken coming right up🔥🐓🔥🐓🔥🐓' },
        { userId: 5, imagePath: '/uploads/img13.jpg', caption: 'I need to gooooooo!!! who in??' }
      ])
    })
}
