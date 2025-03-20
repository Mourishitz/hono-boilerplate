import Env from "@/src/config/env";
import BaseModel from "@Models/BaseModel";

export default class User extends BaseModel {
  static tableName = "users";

  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;

  $hidden = ["password"];

  $beforeInsert() {
    this.password = this.hashPassword(this.password);
  }

  private hashPassword(password: string): string {
    return Bun.password.hashSync(password);
  }
}
