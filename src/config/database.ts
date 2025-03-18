import Knex from "knex";
import type { Knex as KnexType } from "knex";
import { Model } from "objection";

const dbConfig = (dbName: string): Knex.Knex => {
  const config = require('../../knexfile');

  const connections: { [key: string]: KnexType.Config } = config;
  if (!connections || !connections[dbName]) {
    throw new Error('Connection not found');
  }

  // Set Connection
  const currentConnection = connections[dbName];
  const knex = Knex(currentConnection);

  Model.knex(knex);

  return knex;
}

export default {
  dbConfig
}
