import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

const activeProjects = (_query: never, _args: never, context: ApolloContext) => {
  if (context.userRole !== 2) {
    return [];
  }
  return prisma.project.findMany({
    where: { userId: context.userId },
    include: {
      category: true,
      roles: true, // TODO include applicants as well
    },
  });
};

export default activeProjects;