exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function () {
      // Inserts seed entries
      return knex('User').insert([
        { firstName: 'Kirkland', lastName: 'Signature', email: 'kirkland@gmail.com', password: '123456', bio: 'The original.' },
        { firstName: 'Mariah', lastName: 'Carey', email: 'mcarey@music.com', password: 'abcdef', bio: 'I sing falseto notes very good.' },
        { firstName: 'Frank', lastName: 'Ocean', email: 'endless@music.com', password: '654321', bio: 'I am a singer/song writer.' },
        { firstName: 'Selena', lastName: 'Gomez', email: 'selenag@gmail.com', password: 'fedcba', bio: 'Disney kid for life!!' },
        { firstName: 'James', lastName: 'Harden', email: 'jharden13@rockets.com', password: '000000', bio: 'Rockets champions 2020 #NBA' }
      ])
    })
}
