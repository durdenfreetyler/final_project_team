/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema

  .createTable("user_challenge", function (table) {
    table.increments("id");
    table.integer("user_id").unsigned().references("id").inTable("users");
    table
      .integer("challenge_id")
      .unsigned()
      .references("id")
      .inTable("challenge");
    table.string("criteria_type", 255).notNullable();
    table.string("criteria_value", 255).notNullable();
    table.integer("progress").defaultTo(0); //change boolean
    table.boolean("is_completed").defaultTo(false);
    table.unique(["user_id", "challenge_id"]);
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema
    .dropTable("user_challenge")  
};