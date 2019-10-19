exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function () {
      // Inserts seed entries
      return knex('User').insert([
        { fullName: 'Kirkland Signature', username: 'kirksig', email: 'kirkland@gmail.com', password: '123456', bio: 'The original.' },
        { fullName: 'Mariah Carey', username: 'mcarey', email: 'mcarey@music.com', password: 'abcdef', bio: 'I sing falseto notes very good.' },
        { fullName: 'Frank Ocean', username: 'franko', email: 'endless@music.com', password: '654321', bio: 'I am a singer/song writer.' },
        { fullName: 'Selena Gomez', username: 'sgomez', email: 'selenag@gmail.com', password: 'fedcba', bio: 'Disney kid for life!!' },
        { fullName: 'James Harden', username: 'jharden13', email: 'jharden13@rockets.com', password: '000000', bio: 'Rockets champions 2020 #NBA' }
      ])
    })
}
