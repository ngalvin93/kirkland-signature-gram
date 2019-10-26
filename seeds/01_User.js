exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function () {
      // Inserts seed entries
      return knex('User').insert([
        { fullName: 'Kirkland Signature', username: 'kirksig', email: 'kirkland@gmail.com', password: '123456', bio: '💥 The original since 1923. #costco #keeps #the #cost #low', profilePicture: '/uploads/pro1.jpg' },
        { fullName: 'Mariah Carey', username: 'mcarey', email: 'mcarey@music.com', password: 'abcdef', bio: 'I sing falseto notes very good.', profilePicture: '/uploads/pro2.jpg' },
        { fullName: 'Frank Ocean', username: 'franko', email: 'endless@music.com', password: '654321', bio: 'I am a singer/song writer.', profilePicture: '/uploads/pro3.jpg' },
        { fullName: 'Selena Gomez', username: 'sgomez', email: 'selenag@gmail.com', password: 'fedcba', bio: 'Disney kid for life!!', profilePicture: '/uploads/pro4.jpg' },
        { fullName: 'James Harden', username: 'jharden13', email: 'jharden13@rockets.com', password: '000000', bio: 'Rockets champions 2020 #NBA' }
      ])
    })
}
