import * as Sentry from "@sentry/node";
import { ForbiddenError } from "apollo-server-core";

import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";

type Args = {
    roleData: [
        {
            id: string,
            questionId: string,
            answer: string,
        }
    ]
}

const updateRoleAnswer = async (_mutation: unknown, args: Args, context: ApolloContext) => {

  if (context.userRole !== 2) {
    const errorMessage = "Non-talent user tried to update role!";
    const forbiddenError = new ForbiddenError(errorMessage);
    Sentry.captureException(forbiddenError);
    throw forbiddenError;
  }

  args.roleData?.forEach(async (role) => {
    await prisma.roleRequirement.update({
      where: {
        id: parseInt(role.id),
      },
      data: {
        answer: role?.answer ?  
        role?.answer : 
          role.questionId === "2" ?
           "[]" : 
           "",
      },
    });
  });

  return {
    success: true,
  };
};

export default updateRoleAnswer;