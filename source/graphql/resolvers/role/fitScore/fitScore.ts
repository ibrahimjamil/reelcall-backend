import { Role, RoleRequirement } from "@prisma/client";

import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";
import { FitUtils } from "../../../../utils";

type RoleWithRequirements = Role & {
  fitScore?: number,
  requirements: RoleRequirement[],
};

const fitScore = async (role: RoleWithRequirements, _args: never, context: ApolloContext) => {
  if (role.fitScore) { return role.fitScore; }

  const user = await prisma.user.findUnique({
    where: { id: context.userId },
    include: {
      questionnaireAnswers: true,
    },
  });
  if (user?.questionnaireAnswers) {
    return FitUtils.calculateScore(role.requirements, user.questionnaireAnswers);
  }
};

export default fitScore;