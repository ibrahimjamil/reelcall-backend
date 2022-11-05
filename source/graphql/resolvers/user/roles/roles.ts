import { Role, User } from "@prisma/client";
import dayjs from "dayjs";

import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";
import { FitUtils } from "../../../../utils";


type UserWithRoles = User & {
  roles?: Role[],
};

const roles = async (user: UserWithRoles, _args: undefined, context: ApolloContext) => {
  if (user.roles) {
    return user.roles;
  }

  const userWithRoles = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      questionnaireAnswers: true,
      roleApplications: {
        include: {
          role: {
            include: {
              project: true,
              requirements: true,
            },
          },
        },
      },
    },
  });

  const roles = await Promise.all(
    userWithRoles?.roleApplications.map(async (a) => {
      const fitScore = await FitUtils.calculateScore(a.role.requirements, userWithRoles.questionnaireAnswers);
      return {
        fitScore,
        appliedAt: a.createdAt,
        ...a.role,
      };
    }) || [],
  );

  return roles
    .filter((r) => [user.id, r.project.userId].includes(context.userId))
    .sort((r1, r2) => dayjs(r2.appliedAt).valueOf() - dayjs(r1.appliedAt).valueOf())
    .slice(0, 4);
};

export default roles;