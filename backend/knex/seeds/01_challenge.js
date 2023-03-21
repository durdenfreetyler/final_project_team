/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('challenge').del()
  await knex('challenge').insert([
    { 
      title: 'FirstOne',
      description: 'this is the first chellenge',
      created_by: 1
    },
    {
       
      title: 'Second',
      description: 'this is the second chellenge',
      created_by: 2},
    {
       
      title: 'Third',
      description: 'this is the third chellenge',
      created_by: 3},
  ]);
};
