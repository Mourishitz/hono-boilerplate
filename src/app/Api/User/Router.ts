import ApiRoot from "@/src/routes/api";
import { Hono } from "hono";
import { UserController } from "./Controllers";

const UserRouter = new Hono();

UserRouter.get("/", UserController.index);
UserRouter.post("/", UserController.store);

UserRouter.get("/:id", UserController.show);

export default UserRouter;
