import { ApolloContext } from "../../../../types";
import prisma from "../../../../config/prisma";

type Args = {
    roleId: string,
    roleAnswers: [
      {
        questionId: string,
        answer: string,
      }
    ]
};

const addRoleAnswers = async (_mutation: unknown, args: Args, context: ApolloContext) => {

  if (context.userRole !== 2) {
    throw new Error("Non-casting user tried to add role answers!");
  }

  args.roleAnswers.forEach(async (roleAnswer) => {
    await prisma.roleRequirement.create({
      data: {
        roleId: parseInt(args.roleId),
        questionId: parseInt(roleAnswer.questionId),
        answer: roleAnswer?.answer ?  
          roleAnswer?.answer : 
            roleAnswer.questionId === "2" ?
             "[]" : 
             "",
      }
    })
  })

  return {
      success: true
  };
};

export default addRoleAnswers;