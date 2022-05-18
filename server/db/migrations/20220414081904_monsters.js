/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('monsters', function (table) {
    table.increments('id').primary
    table.text('image')
    table.string('name')
    table.text('description')
    table.integer('health')
    table.integer('damage')
    table.date('capture_date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('monsters')
}
