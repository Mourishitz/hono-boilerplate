import vine from "@vinejs/vine";
import { Context } from "hono";
import BaseRequest from "@Requests/BaseRequest";
import { uniqueRule } from "@Requests/rules/uniqueRule";

interface get {
  name: string;
  email: string;
}
interface post {
  name: string;
  email: string;
  password: string;
}

export default class UserRequest extends BaseRequest {
  static schema = {
    get: vine.object({
      name: vine.string().minLength(3),
      email: vine.string().email()
    }),
    post: vine.object({
      name: vine.string().minLength(3),
      email: vine.string().email().use(
        uniqueRule({ table: "users", column: "email" })
      ),
      password: vine.string().minLength(6),
    }),
    put: vine.object({
      name: vine.string().minLength(3).nullable(),
      email: vine.string().email().use(
        uniqueRule({ table: "users", column: "email" })
      ).nullable(),
      password: vine.string().minLength(6).nullable(),
    }),
  };

  static parse = {
    get: async (c: Context): Promise<get> => {
      return await this.validate(c, this.schema.get);
    },
    post: async (c: Context): Promise<post> => {
      return await this.validate(c, this.schema.post);
    },
  };
}
