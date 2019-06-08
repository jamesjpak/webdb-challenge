
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table.increments();
  
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    
        table.text('description')

        table.text('notes')
  
        table.boolean('completed')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('actions');
  };
  