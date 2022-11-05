import { Project, User } from "@prisma/client";
import { uniqBy } from "lodash";

import prisma from "../../../../config/prisma";

const applicants = async (project: Project) => {
  const roles = await prisma.role.findMany({
    where: { projectId: project.id },
    select: {
      applicants: {
        include: {
          user: true,
        },
      },
    },
  });
  return uniqBy(
    roles.reduce((result: User[], role) => result.concat(role.applicants.map(a => a.user)), []),
    "id",
  );

};

export default applicants;