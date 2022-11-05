import dayjs from "dayjs";

import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

const roles = (_query: unknown, _args: unknown, context: ApolloContext) => {
  const where = context.userRole === 2 ? {
    project: {
      status: 1,
      userId: context.userId,
    },
  } : {
    // Returns open projects that...
    // Have a non-null start date in the future
    // OR have no start date but been updated within 2 months
    project: {
      status: 1,
      OR: [
        {
          startDate: null,
          updatedAt: {
            gte: dayjs().subtract(2, "months").format(),
          },
        },
        {
          startDate: {
            not: null,
            gt: dayjs().format(),
          },
        },
      ],
    },
  };

  return prisma.role.findMany({
    where,
    include: {
      project: {
        include: { category: true },
      },
      requirements: true,
    },
  });
};

export default roles;