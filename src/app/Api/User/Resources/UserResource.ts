import BaseResource from "@Resources/BaseResource";

interface UserResourceInterface {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}

export default class UserResource extends BaseResource {
  static transform(data: any): UserResourceInterface {
    return {
      id: data?.id,
      name: data?.name,
      email: data?.email,
      created_at: data?.created_at,
      updated_at: data?.updated_at,
    };
  }
}
