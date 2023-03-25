/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("challenge_completion")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("challenge_completion").insert([
        {
          user_challenge_id: 1,
          completed_at: knex.fn.now(),
          is_completed: true,
        },
        {
          user_challenge_id: 2,
          completed_at: knex.fn.now(),
          is_completed: true,
        },
        {
          user_challenge_id: 3,
          completed_at: knex.fn.now(),
          is_completed: false,
        },
        {
          user_challenge_id: 4,
          completed_at: knex.fn.now(),
          is_completed: true,
        },
        {
          user_challenge_id: 5,
          completed_at: knex.fn.now(),
          is_completed: false,
        },
        {
          user_challenge_id: 6,
          completed_at: knex.fn.now(),
          is_completed: true,
        },
        {
          user_challenge_id: 7,
          completed_at: knex.fn.now(),
          is_completed: false,
        },
        {
          user_challenge_id: 8,
          completed_at: knex.fn.now(),
          is_completed: false,
        },
        {
          user_challenge_id: 9,
          completed_at: knex.fn.now(),
          is_completed: true,
        },
        {
          user_challenge_id: 10,
          completed_at: knex.fn.now(),
          is_completed: false,
        },
      ]);
    });
};
