import BaseResource from "@Resources/BaseResource";
import User from "../Models/User";
import dateFormat from "@Utils/dateformat";

interface UserResourceInterface {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export default class UserResource extends BaseResource {
  static transform(data: User): UserResourceInterface {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      created_at: dateFormat(data.created_at, 'DD-MM-YYYY HH:mm:ss'),
      updated_at: dateFormat(data.updated_at, 'DD-MM-YYYY HH:mm:ss'),
    };
  }
}
