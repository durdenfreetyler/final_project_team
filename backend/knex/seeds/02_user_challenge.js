/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_challenge').del()
  await knex('user_challenge').insert([
    {
      user_id: 1,
      challenge_id: 1,
      criteria_type: 'steps',
      criteria_value: '10000',
      progress: 5000
    },
    {
      user_id: 2,
      challenge_id: 2,
      criteria_type: 'steps',
      criteria_value: '10000',
      progress: 7500
    },
    {
      user_id: 3,
      challenge_id: 3,
      criteria_type: 'minutes',
      criteria_value: '30',
      progress: 0
    }
  ]);
};
