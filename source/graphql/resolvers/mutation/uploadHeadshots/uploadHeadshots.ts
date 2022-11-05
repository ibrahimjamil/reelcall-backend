import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
  headshots: string[],
};

const uploadHeadshots = async (_mutation: undefined, args: Args, context: ApolloContext) => {
  const currentProfilePicCount = await prisma.headshot.count({
    where: {
      userId: context.userId,
      isProfilePicture: true,
    },
  });
  await prisma.headshot.createMany({
    data: args.headshots.map((headshot, i) => ({
      userId: context.userId,
      image: headshot,
      isProfilePicture: currentProfilePicCount === 0 && i === 0,
    })),
  });
  return {
    success: true,
  };
};

export default uploadHeadshots;