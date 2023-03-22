/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema.createTable('challenge', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.string('difficulty').notNullable();
    table.integer('time_limit').notNullable();
    table.integer('reward_points').notNullable();
    table.timestamps(true, true);
    table.integer("created_by").unsigned().references("id").inTable("users");
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
