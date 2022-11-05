import { User } from "@prisma/client";

import { RoleUtils } from "../../../../utils";

const role = (user: User) => {
  return RoleUtils.getType(user.role);
};

export default role;