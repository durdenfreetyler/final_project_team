/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      first_name: "Ted",
      last_name: "Mosby",
      email: "ted@ted.com",
      password: "test",
      created_date: knex.fn.now(),
      is_player: true,
      is_challenge_captain: false,
    },
    {
      first_name: "Marshall",
      last_name: "Eriksen",
      email: "marshall@marshall.com",
      password: "test",
      created_date: knex.fn.now(),
      is_player: true,
      is_challenge_captain: false,
    },
    {
      first_name: "Lily",
      last_name: "Aldrin",
      email: "lily@lily.com",
      password: "test",
      created_date: knex.fn.now(),
      is_player: true,
      is_challenge_captain: false,
    },
    {
      first_name: "Barney",
      last_name: "Stinson",
      email: "barney@barney.com",
      password: "test",
      created_date: knex.fn.now(),
      is_player: true,
      is_challenge_captain: false,
    },
    {
      first_name: "Robin",
      last_name: "Scherbatsky",
      email: "robin@robin.com",
      password: "test",
      created_date: knex.fn.now(),
      is_player: true,
      is_challenge_captain: false,
    },
    {
      first_name: "Ranjit",
      last_name: "Singh",
      email: "ranjit@ranjit.com",
      password: "test",
      created_date: knex.fn.now(),
      is_player: true,
      is_challenge_captain: false,
    },
    {
      first_name: "Carl",
      last_name: "MacLaren",
      email: "carl@carl.com",
      password: "test",
      created_date: knex.fn.now(),
      is_player: true,
      is_challenge_captain: false,
    },
    {
      first_name: "Zoey",
      last_name: "Pierson",
      email: "zoey@zoey.com",
      password: "test",
      created_date: knex.fn.now(),
      is_player: true,
      is_challenge_captain: false,
    },
    {
      first_name: "Gary",
      last_name: "Blahd",
      email: "gary@gary.com",
      password: "test",
      created_date: knex.fn.now(),
      is_player: true,
      is_challenge_captain: false,
    },
    {
      first_name: "James",
      last_name: "Stinson",
      email: "james@james.com",
      password: "test",
      created_date: knex.fn.now(),
      is_player: true,
      is_challenge_captain: false,
    },
  ]);
};








 
    //     {
    //   user_id: 10,
    //   challenge_id: 21,
    //   criteria_type: "distance",
    //   criteria_value: "5",
    //   progress: 0,
    //   is_completed: false,
    // },