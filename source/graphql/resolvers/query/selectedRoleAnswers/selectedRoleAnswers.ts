import prisma from "../../../../config/prisma";

type Args = {
  roleId: string,
};

const selectedRoleAnswers = async (_query: unknown, args: Args) => {
  const selectedRoleAnswers = await prisma.roleRequirement.findMany({
    where: { roleId: parseInt(args.roleId) },
  });
  return selectedRoleAnswers;
};

export default selectedRoleAnswers;