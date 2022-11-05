import { RoleRequirement, QuestionnaireAnswer } from "@prisma/client";

import logger from "../config/logger";
import prisma from "../config/prisma";


type ModifiedQuestionnaireAnswer = {
  id: number,
  requirement: string | string[],
  actorDetail: string | string[],
  importance: number | null,
};

export const calculateScore = async (roleRequirements: RoleRequirement[], actorDetails: QuestionnaireAnswer[]) => {
  const questions = await prisma.question.findMany();
  const questionnaireAnswers: Record<string | number, ModifiedQuestionnaireAnswer> = {};
  roleRequirements.forEach((requirement) => {
    questionnaireAnswers[requirement.questionId] = {
      id: requirement.questionId,
      requirement: requirement.answer.startsWith("[") ? JSON.parse(requirement.answer) : requirement.answer,
      importance: requirement.importance,
      actorDetail: "",
    };
  });
  actorDetails.forEach((actorDetail) => {
    if (questionnaireAnswers[actorDetail.questionId]) {
      questionnaireAnswers[actorDetail.questionId].actorDetail = actorDetail.answer.startsWith("[") ? JSON.parse(actorDetail.answer) : actorDetail.answer;
    }
  });

  let score = 0;
  let maxPossibleScore = 0;
  Object.values(questionnaireAnswers).map((question) => {
    if (!question.requirement || question.requirement.length === 0) {
      return;
    }
    const questionType = questions.find((q) => q.id === question.id)!.type;
    switch (questionType) {
    case 1: // Single Select
      if (question.id === 1) {
        maxPossibleScore += 5;
        score += question.requirement === question.actorDetail ? 5 : 0;
      } else {
        maxPossibleScore += question.importance ? question.importance : 0;
        score += question.requirement === question.actorDetail ? question.importance || 0 : 0;
      }
      return;
    case 2: { // Multi Select Overlap
      maxPossibleScore += question.importance || 0;
      const numRequirements = question.requirement.length;
      const roleRequirement = typeof question.requirement === "string" ? [] : question.requirement;
      const overlap = roleRequirement.filter((r) => {
        const actorAnswer = typeof question.actorDetail === "string" ? [] : question.actorDetail;
        return actorAnswer.some((d) => r === d);
      }).length;
      score += overlap / numRequirements * (question.importance || 0);
      return;
    }
    case 3: { // Multi Select Any
      maxPossibleScore += question.importance || 0;
      const roleRequirement = typeof question.requirement === "string" ? [] : question.requirement;
      const hasMatch = roleRequirement.some((r) => {
        const actorAnswer = typeof question.actorDetail === "string" ? [] : question.actorDetail;
        return actorAnswer.some((d) => r === d);
      });
      score += hasMatch ? question.importance || 0 : 0;
      return;
    }
    case 4: // Freeform Text
      return;
    default:
      logger.error(`Trying to calculate score for unknown question type ${questionType}.`);
      return;
    }
  });

  const normalizedScore = score && score / maxPossibleScore;
  return Math.trunc(normalizedScore * 100);
};
