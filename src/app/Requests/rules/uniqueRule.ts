import database from "@/src/config/database";
import Env from "@/src/config/env";
import vine from "@vinejs/vine";
import { FieldContext } from "@vinejs/vine/build/src/types";

/**
 * Options accepted by the unique rule
 */
type UniqueOptions = {
  table: string;
  column: string;
};

async function unique(
  value: unknown,
  options: UniqueOptions,
  field: FieldContext,
) {
  if (typeof value !== "string") {
    return;
  }

  const row = await database
    .dbConfig(Env.DatabaseConnection)
    .select(options.column)
    .from(options.table)
    .where(options.column, value)
    .first();

  if (row) {
    field.report("The {{ field }} field is not unique", "unique", field);
  }
}

const uniqueRule = vine.createRule(unique, { implicit: true, isAsync: true });

export { uniqueRule, UniqueOptions };
