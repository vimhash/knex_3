;
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('person', function(table) {
        table.increments('id').primary();
        table.string('nombre');
        table.string('correo_electronico');
        table.string('clave');
    })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('person'),
    ]);
  };