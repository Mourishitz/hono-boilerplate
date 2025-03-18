import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('test', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('test');
}

