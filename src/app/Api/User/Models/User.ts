import { Model } from "objection";

export default class User extends Model {
  static tableName = "users";

  static idColumn: string | string[] = "id";

  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}
