import { Context } from "hono";
import User from "../Models/User";
import UserResource from "../Resources/UserResource";
import UserRequest from "../Requests/UserRequest";

export default class UserController {
  static async index(c: Context) {
    const users = await User.query().select("*");

    return c.json({ data: UserResource.collection(users) });
  }

  static async store(c: Context) {
    const dto = await UserRequest.validate(c, UserRequest.schema.post);
    const user = await User.query().insert(dto);

    return c.json({ data: UserResource.transform(user) });
  }

  static async show(c: Context) {
    const user = await User.query().findById(c.req.param("id"));
    return c.json({ data: UserResource.transform(user) });
  }
}
