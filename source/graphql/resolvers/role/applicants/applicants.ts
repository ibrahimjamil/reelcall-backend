import { Role } from "@prisma/client";

import prisma from "../../../../config/prisma";

const applicants = async (role: Role) => {
  const applicants = (await prisma.role.findUnique({
    where: { id: role.id },
    select: {
      applicants: {
        include: {
          user: true,
        },
      },
    },
  }))?.applicants;
  return applicants?.map(a => a.user) || [];
};

export default applicants;