exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('challenge').del()
    .then(function () {
      // Inserts seed entries
      return knex('challenge').insert([
        {
          title: 'Build a Todo List',
          description: 'Create a web app that allows users to add and complete tasks',
          difficulty: 'medium',
          time_limit: 3600,
          reward_points: 50,
          created_by: 1
        },
        {
          title: 'Create a Weather App',
          description: 'Build a web app that shows the weather for a user-specified location',
          difficulty: 'hard',
          time_limit: 7200,
          reward_points: 100,
          created_by: 2
        },
        {
          title: 'Build a Calculator',
          description: 'Create a web app that allows users to perform basic math calculations',
          difficulty: 'easy',
          time_limit: 1800,
          reward_points: 25,
          created_by: 3
          
        }
      ]);
    });
};
