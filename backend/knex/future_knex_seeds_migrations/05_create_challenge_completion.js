/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("challenge_completion", function (table) {
    table.increments("id");
    table
      .integer("user_challenge_id")
      .unsigned()
      .references("id")
      .inTable("user_challenge");
    table.timestamp("completed_at").defaultTo(knex.fn.now());
    table.boolean("is_completed").defaultTo(false);
  });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("challenge_completion");
};
