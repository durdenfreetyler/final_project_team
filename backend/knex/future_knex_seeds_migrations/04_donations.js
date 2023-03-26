/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("donations").del();
  await knex("donations").insert([
    {
      user_challenge_id: 1,
      charity_id: 1,
      amount: 20,
    },
    {
      user_challenge_id: 1,
      charity_id: 2,
      amount: 15,
    },
    {
      user_challenge_id: 2,
      charity_id: 3,
      amount: 10,
    },
    {
      user_challenge_id: 2,
      charity_id: 4,
      amount: 25,
    },
    {
      user_challenge_id: 3,
      charity_id: 5,
      amount: 30,
    },
    {
      user_challenge_id: 3,
      charity_id: 6,
      amount: 15,
    },
    {
      user_challenge_id: 4,
      charity_id: 7,
      amount: 50,
    },
    {
      user_challenge_id: 5,
      charity_id: 8,
      amount: 40,
    },
    {
      user_challenge_id: 6,
      charity_id: 9,
      amount: 15,
    },
    {
      user_challenge_id: 7,
      charity_id: 10,
      amount: 20,
    },
  ]);
};
