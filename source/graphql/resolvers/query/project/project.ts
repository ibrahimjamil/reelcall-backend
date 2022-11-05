import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";
// TODO implement

type Args = {
  id: string;
}
const project = async (_query: never, _args: Args, context: ApolloContext) => {
  if (context.userRole !== 2) {
    return [];
  }
  const project = await prisma.project.findUnique({
    where: { id: parseInt(_args.id) },
    include: {
      category: true,
      roles: true,
    },
  });
  return project;
};

export default project;