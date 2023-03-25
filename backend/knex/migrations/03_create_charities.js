/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("charities", function (table) {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.string("description", 255).notNullable();
    table.string("website", 255).notNullable();
    table.string("logo_url", 255);
    table.decimal("donation_target", 10, 2);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("charities");
};
