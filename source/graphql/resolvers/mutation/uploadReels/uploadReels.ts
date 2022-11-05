import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
  reels: string[],
};

const uploadReels = async (_mutation: unknown, args: Args, context: ApolloContext) => {
  if (context.userRole !== 1) {
    // TODO throw an error?
    return;
  }

  // TODO validate that the strings are valid youtube or vimeo links!

  await prisma.reel.createMany({
    data: args.reels.map(reel => ({
      userId: context.userId,
      link: reel,
    })),
  });
  return {
    success: true,
  };
};

export default uploadReels;