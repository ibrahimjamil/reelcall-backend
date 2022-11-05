import * as Sentry from "@sentry/node";
import { ForbiddenError } from "apollo-server-core";

import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
    roleId: string;
}

const deleteRole = async (_mutation: unknown, args: Args, context: ApolloContext) => {

  if (context.userRole !== 2) {
    const errorMessage = "Non-talent user tried to update role!";
    const forbiddenError = new ForbiddenError(errorMessage);
    Sentry.captureException(forbiddenError);
    throw forbiddenError;
  }

  await prisma.role.delete({
    where: {
      id: parseInt(args.roleId),
    },
  });

  return {
    success: true,
  };
};

export default deleteRole;