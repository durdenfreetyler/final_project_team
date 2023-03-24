/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("challenge", function (table) {
    table.increments("id");
    table.string("title", 255).notNullable();
    table.text("description").notNullable();
    table.integer("points").unsigned().notNullable().checkIn([1, 2, 3, 4, 5]);
    table.date("expiration_date").notNullable();
    table.integer("created_by").unsigned().references("id").inTable("users");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema
    .dropTable("challenge")
};
