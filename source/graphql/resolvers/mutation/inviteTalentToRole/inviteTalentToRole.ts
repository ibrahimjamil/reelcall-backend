import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
  roleId: string,
  actorId: string,
};

const inviteTalentToRole = async (_mutation: unknown, args: Args, context: ApolloContext) => {
  if (context.userRole !== 2) {
    throw new Error("Non-casting user tried to invite actor to a role!");
  }

  const userIdOfRole = (await prisma.role.findUnique({
    where: { id: parseInt(args.roleId) },
    select: {
      project: true,
    },
  }))?.project.userId;

  if (userIdOfRole !== context.userId) {
    throw new Error("Casting user tried to invite a user to a role that wasn't theirs!");
  }

  await prisma.roleInvitation.create({
    data: {
      roleId: parseInt(args.roleId),
      actorId: parseInt(args.actorId),
    },
  });
  return {
    success: true,
    errorMessage: "Unimplemented",
  };
};

export default inviteTalentToRole;