import * as Sentry from "@sentry/node";
import { ForbiddenError } from "apollo-server-core";

import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
  ids: string[],
};

const deleteHeadshots = async (_mutation: never, args: Args, context: ApolloContext) => {
  const where = { id: {
    in: args.ids.map((id)=> parseInt(id) ),
  } };

  const userHeadshots = await prisma.headshot.findMany({ where });

  const hasUnauthorizedOperation = userHeadshots.some((h) => h.userId !== context.userId);

  if (hasUnauthorizedOperation) {
    const forbiddenError = new ForbiddenError("User tried to delete headshot that was not their own");
    Sentry.captureException(forbiddenError, { user: { id: context.userId.toString() } });
    throw forbiddenError;
  }

  await prisma.headshot.deleteMany({ where });
  return {
    success: true,
  };
};

export default deleteHeadshots;