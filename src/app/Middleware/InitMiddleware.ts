import database from "@/src/config/database";
import Env from "@/src/config/env";
import { setLocale, unsetLocale } from "@/src/lang";
import { createMiddleware } from "hono/factory";

export default function InitMiddleware() {
  return createMiddleware(async (c, next) => {
    // Start database connection
    const knex = database.dbConfig(Env.DatabaseConnection);

    // Set locale
    const locale = c.req.header("Accept-Language") || "en-US";
    setLocale(locale.split("-")[0]);

    // Next middleware
    await next();

    // Close database connection
    knex.destroy().catch((err) => {
      console.error("Database Error: ", err);
    });

    // Clear locale
    unsetLocale();
  });
}
