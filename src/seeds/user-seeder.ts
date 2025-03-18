import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("users").del();

  await knex("users").insert([
    {
      name: "Test User",
      email: "test@email.com",
      password: "password",
    },
    {
      name: "Another User",
      email: "anotheruser@email.com",
      password: "password",
    },
    {
      name: "Third User",
      email: "thirduser@email.com",
      password: "password",
    },
  ]);
}
