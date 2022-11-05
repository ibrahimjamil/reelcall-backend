import * as Sentry from "@sentry/node";
import { ForbiddenError, UserInputError } from "apollo-server-core";

import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = { id: string };

const setProfilePicture = async ( _mutation: never, args: Args, context: ApolloContext ) => {
  const where = {
    id: parseInt(args.id),
  };

  const userHeadshot = await prisma.headshot.findUnique({ where });
  if (!userHeadshot) {
    const userInputError = new UserInputError("User headshot not Found!");
    Sentry.captureException(userInputError, { user: { id: context.userId.toString() } });
    throw userInputError;
  }

  if (userHeadshot.userId !== context.userId) {
    const forbiddenError = new ForbiddenError("User tried to set headshot that was not their own");
    Sentry.captureException(forbiddenError, { user: { id: context.userId.toString() } });
    throw forbiddenError;
  }

  await prisma.headshot.updateMany({
    where: { userId: context.userId },
    data: {
      isProfilePicture: {
        set: false,
      },
    },
  });

  await prisma.headshot.update({
    where,
    data: {
      isProfilePicture: {
        set: true,
      },
    },
  });

  return {
    success: true,
  };
};

export default setProfilePicture;
