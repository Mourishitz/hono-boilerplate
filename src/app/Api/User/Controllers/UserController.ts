import { Context } from "hono";
import UserResource from "@Api/User/Resources/UserResource";
import UserRequest from "@Api/User/Requests/UserRequest";
import UserRepository from "@Api/User/Repositories/UserRepository";

export default class UserController {

  static async index(c: Context) {
    const users = await UserRepository.all();
    return c.json({ data: UserResource.collection(users) });
  }

  static async store(c: Context) {
    const dto = await UserRequest.validate(c, UserRequest.schema.post);
    const user = await UserRepository.create(dto);

    return c.json({ data: UserResource.transform(user) });
  }

  static async show(c: Context) {
    const user = await UserRepository.find(c.req.param("id"));

    if (!user) {
      return c.notFound();
    }

    return c.json({ data: UserResource.transform(user) });
  }

  static async update(c: Context) {
    const dto = await UserRequest.validate(c, UserRequest.schema.put);
    const user = await UserRepository.update(c.req.param("id"), dto);

    if (!user) {
      return c.notFound();
    }

    return c.json({ data: UserResource.transform(user) });
  }

  static async destroy(c: Context) {
    await UserRepository.delete(c.req.param("id"));
    return c.newResponse(null, 204);
  }
}
