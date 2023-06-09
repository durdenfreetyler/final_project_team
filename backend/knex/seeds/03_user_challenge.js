/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_challenge").del();
  await knex("user_challenge").insert([
    {
      user_id: 1,
      challenge_id: 7,
      criteria_type: "distance",
      criteria_value: "5",
      progress: 2,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 1,
      challenge_id: 9,
      criteria_type: "repetitions",
      criteria_value: "50",
      progress: 30,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 1,
      challenge_id: 14,
      criteria_type: "distance",
      criteria_value: "10",
      progress: 5,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 1,
      challenge_id: 19,
      criteria_type: "time",
      criteria_value: "15",
      progress: 10,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 7,
      challenge_id: 20,
      criteria_type: "distance",
      criteria_value: "2",
      progress: 1,
      is_completed: true,
      completed_before_expiration: false,
    },
    {
      user_id: 8,
      challenge_id: 13,
      criteria_type: "repetitions",
      criteria_value: "100",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 9,
      challenge_id: 18,
      criteria_type: "distance",
      criteria_value: "3",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 10,
      challenge_id: 21,
      criteria_type: "steps",
      criteria_value: "15000",
      progress: 5000,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 2,
      challenge_id: 22,
      criteria_type: "time",
      criteria_value: "60",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 4,
      challenge_id: 16,
      criteria_type: "distance",
      criteria_value: "5",
      progress: 2,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 3,
      challenge_id: 7,
      criteria_type: "distance",
      criteria_value: "3",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 4,
      challenge_id: 10,
      criteria_type: "repetitions",
      criteria_value: "50",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 5,
      challenge_id: 12,
      criteria_type: "time",
      criteria_value: "2",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 6,
      challenge_id: 14,
      criteria_type: "repetitions",
      criteria_value: "30",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 7,
      challenge_id: 16,
      criteria_type: "distance",
      criteria_value: "10",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 8,
      challenge_id: 19,
      criteria_type: "time",
      criteria_value: "1",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 9,
      challenge_id: 20,
      criteria_type: "time",
      criteria_value: "1",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 1,
      challenge_id: 22,
      criteria_type: "repetitions",
      criteria_value: "50",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
    {
      user_id: 2,
      challenge_id: 20,
      criteria_type: "time",
      criteria_value: "1",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    },
  ]);
};
