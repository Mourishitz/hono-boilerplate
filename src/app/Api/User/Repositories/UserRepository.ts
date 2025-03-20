import BaseRepository from "@Repositories/BaseRepository";
import User from "@Api/User/Models/User";

class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }
}

export default new UserRepository();

