import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user_has_roles", (table) => {
    table.increments("id").notNullable();
    table.integer("user_id").notNullable().unsigned().references("id").inTable("users").onDelete("CASCADE");
    table.integer("role_id").notNullable().unsigned().references("id").inTable("roles").onDelete("CASCADE");
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user_has_roles");
}

