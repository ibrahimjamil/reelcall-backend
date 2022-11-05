import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
  id: string,
};

const deleteProject = async (_mutation: never, args: Args, context: ApolloContext) => {
  if (context.userRole !== 2) {
    throw new Error("Non-casting user tried to delete a project!");
  }

  const where = { id: parseInt(args.id) };
  const userIdOfProject = (await prisma.project.findUnique({ where }))?.userId;
  if (userIdOfProject !== context.userId) {
    throw new Error("Casting user tried to delete a project that was not their own!");
  }
  await prisma.project.delete({ where });
  return {
    success: true,
  };
};

export default deleteProject;