/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("donations", function (table) {
    table.increments("id");
    table
      .integer("user_challenge_id")
      .unsigned()
      .references("id")
      .inTable("user_challenge");
    table
      .integer("charity_id")
      .unsigned()
      .references("id")
      .inTable("charities");
    table.decimal("amount", 10, 2).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("donations");
};
