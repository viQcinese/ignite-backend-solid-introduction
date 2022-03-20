import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: string;
  updated_at: string;

  constructor() {
    this.id = uuidV4();
    this.admin = false;
  }
}

export { User };
