exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function () {
      // Inserts seed entries
      return knex('User').insert([
        { fullName: 'Kirkland Signature', username: 'kirksig', email: 'kirkland@gmail.com', password: '123456', bio: '💥 The original since 1923. #costco #keeps #the #cost #low', profilePicture: '/uploads/pro1.jpg' },
        { fullName: 'Chris Oakman', username: 'chris', email: 'mcarey@music.com', password: 'abcdef', bio: 'I like banana foo! 🍌', profilePicture: '/uploads/pro2.jpg' },
        { fullName: 'Amanda Shih', username: 'amanda', email: 'endless@music.com', password: '654321', bio: 'Oh God. 👡👡👡👡', profilePicture: '/uploads/pro3.jpg' },
        { fullName: 'Tyler Swanner', username: 'tyler', email: 'selenag@gmail.com', password: 'fedcba', bio: 'Tyler is an artist, musician, multimodal designer, and perpetual student.', profilePicture: '/uploads/pro4.jpg' },
        { fullName: 'James Harden', username: 'james', email: 'jharden13@rockets.com', password: '000000', bio: 'Rockets champions 2020 #NBA' }
      ])
    })
}
