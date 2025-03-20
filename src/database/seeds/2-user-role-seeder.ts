import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("user_has_roles").del();

  await knex.raw(
    `INSERT INTO user_has_roles (user_id, role_id) VALUES 
      ( (SELECT id FROM users WHERE name = 'Test User'), (SELECT id FROM roles WHERE stub='admin') ),  
      ( (SELECT id FROM users WHERE name = 'Another User'), (SELECT id FROM roles WHERE stub='user') ),
      ( (SELECT id FROM users WHERE name = 'Third User'), (SELECT id FROM roles WHERE stub='user') );`
  );

}
