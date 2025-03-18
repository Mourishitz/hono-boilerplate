import vine from "@vinejs/vine";
import { Context } from "hono";

export default class BaseRequest {
  static async validate(c: Context, schema: any): Promise<typeof schema> {
    const contentType = c.req.header("Content-Type");
    let data = {};

    if (contentType && contentType.includes("application/json")) {
      data = await c.req.json();
    } else if (
      contentType &&
      (contentType.includes("application/x-www-form-urlencoded") ||
        contentType.includes("multipart/form-data"))
    ) {
      data = await c.req.parseBody();
    } else {
      data = c.req.query();
    }

    const validator = vine.compile(schema);
    return await validator.validate(data);
  }
}
