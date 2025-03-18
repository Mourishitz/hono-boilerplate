import { Hono } from "hono";
import { trimTrailingSlash } from "hono/trailing-slash";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { showRoutes } from "hono/dev";
import RateLimiter from "./config/RateLimiter";
import ErrorHandler from "./config/ErrorHandler";
import database from "./config/database";
import { checkHeartbeat } from "knex-utils";
import Env from "./config/env";
import { __ } from "./lang";
import InitMiddleware from "./app/Middleware/InitMiddleware";
import ApiRoot from "./routes/api";

const app = new Hono();

app.use(trimTrailingSlash(), cors(), logger(), InitMiddleware());
app.use(RateLimiter);

app.notFound((c) => c.json({ message: __("404: Resource not found") }, 404));

app.onError(ErrorHandler);

showRoutes(app, { verbose: Env.NodeEnv === "development" });

app.get("/", async (c) => {
  if (process.env.NODE_ENV === "development") {
    const db = database.dbConfig(
      process.env.DATABASE_CONNECTION || "localDatabase",
    );

    const heartbeat = await checkHeartbeat(db);
    return c.json({
      database: {
        status: heartbeat.isOk ? "Up" : "Down",
        isRunning: heartbeat.isOk,
      },
      app: {
        status: "Up",
        isRunning: true,
      },
      process: {
        cpu: process.cpuUsage(),
        memory: process.memoryUsage(),
      },
    });
  }

  c.json({ status: "Running!" });
});

app.route("/", ApiRoot);

export default {
  port: Env.Port,
  fetch: app.fetch,
};
