import * as Sentry from "@sentry/node";
import { ForbiddenError } from "apollo-server-core";

import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
  roleId: string,
};

const applyForRole = async (_mutation: unknown, args: Args, context: ApolloContext) => {
  const roleId = parseInt(args.roleId);
  const userId = context.userId;

  if (context.userRole !== 1) {
    const errorMessage = "Non-talent user tried to apply for a role!";
    const forbiddenError = new ForbiddenError(errorMessage, { roleId, userId });
    Sentry.captureException(forbiddenError);
    throw forbiddenError;
  }

  await prisma.applicant.create({
    data: { roleId, userId },
  });

  return {
    success: true,
  };
};

export default applyForRole;