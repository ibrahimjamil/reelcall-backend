import * as Sentry from "@sentry/node";
import { ForbiddenError } from "apollo-server-core";


import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
  ids: string[],
};


const deleteReels = async (_mutation: never, args: Args, context: ApolloContext) => {
  const where = {
    id: {
      in: args.ids.map((id) => parseInt(id)),
    },
  };
  const userReels = await prisma.reel.findMany({ where });
  const hasUnauthorizedOperation = userReels.some((r) => r.userId !== context.userId);

  if (hasUnauthorizedOperation) {
    const forbiddenError = new ForbiddenError("User tried to delete a reel that was not their own");
    Sentry.captureException(forbiddenError, { user: { id: context.userId.toString() } });
    throw forbiddenError;
  }

  await prisma.reel.deleteMany({ where });

  return {
    success: true,
  };
};

export default deleteReels;