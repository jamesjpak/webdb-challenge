
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'webdb-i-challenge', description: 'A wonderful project', completed: 'false' },
        {name: 'webdb-ii-challenge', description: 'A mysterious project', completed: 'false' },
        {name: 'webdb-iii-challenge', description: 'A cranky project', completed: 'false' }
      ]);
    });
};
