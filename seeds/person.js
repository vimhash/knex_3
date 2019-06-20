;
exports.seed = function(knex, Promise) {
    return knex('person').del()
      .then(function () {
        return knex('person').insert([
          {
            nombre: 'Johao',
            correo_electronico: 'perlazajohao@gmail.com',
            clave: '1234'
          }
      ]);
    });
};