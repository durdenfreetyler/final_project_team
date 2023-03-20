/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      first_name: 'Andrii',
      last_name: 'Andrii',
      password: 'test',
      email: 'test@test.com',
      is_player: true,
      is_challenge_captain: false},


      {  
      first_name: 'Jack',
      last_name: 'Jack',
      password: 'test',
      email: 'test1@test.com',
      is_player: true,
      is_challenge_captain: false},
      {
      first_name: 'Abe',
      last_name: 'Abe',
      password: 'test',
      email: 'test2@test.com',
      is_player: true,
      is_challenge_captain: false
    }
  ]);
};
