import { ApolloContext } from "../../../../types";
import prisma from "../../../../config/prisma";

type Args = {
    roleData: {
      name: string,
      projectId: string,
      description: string,
    }
};

const addRole = async (_mutation: unknown, args: Args, context: ApolloContext) => {

  if (context.userRole !== 2) {
    throw new Error("Non-casting user tried to add a role!");
  }

  const data = await prisma.role.create({
    data: {
      name: args.roleData.name,
      description: args.roleData.description,
      projectId: parseInt(args.roleData.projectId),
    }
  })

  return {
    roleId: data.id.toString(),
  };
};

export default addRole;