/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('users', function (table) {
      table.increments('id');
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable();
      table.timestamp('created_date').defaultTo(knex.fn.now());
      table.boolean('is_player').defaultTo(true);
      table.boolean('is_challenge_captain').defaultTo(false);
  })

  .createTable('challenge', function(table) {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.text('description').notNullable();
    table.integer('created_by').unsigned().references('id').inTable('users');

})

.createTable('user_challenge', function(table) {
  table.increments('id');
  table.integer('user_id').unsigned().references('id').inTable('users');
  table.integer('challenge_id').unsigned().references('id').inTable('challenge');
  table.string('criteria_type', 255).notNullable();
  table.string('criteria_value', 255).notNullable();
  table.integer('progress').defaultTo(0);
  table.unique(['user_id', 'challenge_id']);
});


};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('user_challenge')
    .dropTable("challenge")
    .dropTable("users");
};



