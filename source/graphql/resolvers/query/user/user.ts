import prisma from "../../../../config/prisma";

type Args = {
  id: string;
};

const user = (_query: undefined, args: Args) => {
  return prisma.user.findUnique({
    where: { id: parseInt(args.id) },
    include: {
      reels: true,
      headshots: true,
    },
  });
};

export default user;