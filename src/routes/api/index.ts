import AuthMiddleware from "@Middleware/AuthMidleware";
import InitMiddleware from "@Middleware/InitMiddleware";
import UserRouter from "@/src/app/Api/User/Router";
import { Hono } from "hono";
import { timeout } from "hono/timeout";

const ApiRoot = new Hono().basePath("/api");

ApiRoot.use(
  InitMiddleware(),
  // AuthMiddleware(),
  timeout(30000),
);

ApiRoot.route("/user", UserRouter);

export default ApiRoot;
