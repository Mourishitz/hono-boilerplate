import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {

  localDatabase: {
    client: "pg",
    connection: {
      host: 'localhost',
      database: "app-database",
      user: "postgres",
      password: "postgres",
      port: 5432
    },
    pool: {
      min: 0,
      max: 1000,
      idleTimeoutMillis: 1000
    },
    debug: true,
    migrations: {
      directory: "./src/migrations",
      tableName: "knex_migrations"
    }
  },

};


module.exports = config;
