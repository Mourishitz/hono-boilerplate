import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("roles").del();

  await knex("roles").insert([
    {
      name: "Administrator",
      stub: "admin",
    },
    {
      name: "User",
      stub: "user",
    },
  ]);
}
