import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("roles", (table) => {
    table.increments("id").notNullable();
    table.string("name").notNullable();
    table.string("stub").notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("roles");
}

