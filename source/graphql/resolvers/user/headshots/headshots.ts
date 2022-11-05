import { Headshot, User } from "@prisma/client";

import prisma from "../../../../config/prisma";

type UserWithHeadshots = User & { headshots?: Headshot[] };

const headshots = (user: UserWithHeadshots) => {
  return user.headshots || prisma.headshot.findMany({
    where: { userId: user.id },
  });
};

export default headshots;