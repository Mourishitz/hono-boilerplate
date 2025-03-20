import { Hono } from "hono";
import { UserController } from "@Api/User/Controllers";

const UserRouter = new Hono();

UserRouter.get("/", UserController.index);
UserRouter.post("/", UserController.store);

UserRouter.get("/:id", UserController.show);
UserRouter.patch("/:id", UserController.update);
UserRouter.delete("/:id", UserController.destroy);

export default UserRouter;
