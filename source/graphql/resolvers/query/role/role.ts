import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
  id: string,
};

const role = async (_query: unknown, args: Args, context: ApolloContext) => {
  const roleId = parseInt(args.id);
  const userId = context.userId;

  let appliedAt;
  if (context.userRole === 1) {
    appliedAt = (await prisma.applicant.findUnique({
      where: {
        roleApplicant: {
          roleId,
          userId,
        },
      },
    }))?.createdAt;
  }

  const role = await prisma.role.findUnique({
    where: { id: roleId },
    include: {
      project: {
        include: { category: true },
      },
      requirements: true,
    },
  });

  return { ...role, appliedAt };
};

export default role;