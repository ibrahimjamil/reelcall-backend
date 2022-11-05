import prisma from "../../../../config/prisma";

const questionnaire = () => {
  return {
    sections: prisma.section.findMany({
      include: {
        questions: {
          include: { answers: true },
        },
      },
    }),
  };
};

export default questionnaire;