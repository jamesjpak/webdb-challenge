
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project_actions', table => {
   
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        table.integer('action_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('actions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('project_actions');
  };
  