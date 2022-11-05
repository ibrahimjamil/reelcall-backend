import * as Sentry from "@sentry/node";
import { ForbiddenError } from "apollo-server-core";

import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
    roleData: {
        roleId: string,
        name: string,
        description: string, 
    }
}

const updateRoleDetail = async (_mutation: unknown, args: Args, context: ApolloContext) => {

  if (context.userRole !== 2) {
    const errorMessage = "Non-talent user tried to update role!";
    const forbiddenError = new ForbiddenError(errorMessage);
    Sentry.captureException(forbiddenError);
    throw forbiddenError;
  }

  await prisma.role.update({
    where: {
      id: parseInt(args.roleData.roleId),
    },
    data:{
      name: args.roleData.name,
      description: args.roleData.description,
    },
  });

  return {
    success: true,
  };
};

export default updateRoleDetail;