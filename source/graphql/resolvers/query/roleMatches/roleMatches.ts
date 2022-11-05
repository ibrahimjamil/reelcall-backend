import prisma from "../../../../config/prisma";
import { FitUtils } from "../../../../utils";

type Args = {
  roleId: string,
};

const roleMatches = async (_query: unknown, args: Args) => {
  const role = await prisma.role.findUnique({
    where: { id: parseInt(args.roleId) },
    select: { requirements: true },
  });
  if (!role) {
    return;
  }

  const users = (await prisma.user.findMany({
    where: {
      role: 1,
    },
    include: {
      questionnaireAnswers: true,
      headshots: {
        where: { isProfilePicture: true },
      },
      roleInvitations: {
        where: { roleId: parseInt(args.roleId) },
      },
    },
  })).filter((u) => u.questionnaireAnswers.length);
  const matches = await Promise.all(
    users.map(async (u) => ({
      ...u,
      fitScore: await FitUtils.calculateScore(role.requirements, u.questionnaireAnswers),
      isInvitedToRole: !!u.roleInvitations.length,
    })),
  );
  return matches.filter(async (u) => u.fitScore < 65);
};

export default roleMatches;