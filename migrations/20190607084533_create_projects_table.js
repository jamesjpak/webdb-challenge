
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
      table.increments();

      table.string('name', 128)
      .notNullable()
      .unique()
      
      table.text('description')

      table.boolean('completed')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
