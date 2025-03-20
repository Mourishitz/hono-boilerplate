import BaseModel from "@Models/BaseModel";

export default class User extends BaseModel {
  static tableName = "users";

  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}
