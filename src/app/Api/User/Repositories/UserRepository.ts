import BaseRepository from "@Repositories/BaseRepository";
import User from "@Api/User/Models/User";
import database from "@/src/config/database";
import Env from "@/src/config/env";

class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }
}

export default new UserRepository();

