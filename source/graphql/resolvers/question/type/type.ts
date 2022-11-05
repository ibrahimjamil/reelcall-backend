import { Question } from "@prisma/client";

import { QuestionnaireUtils } from "../../../../utils";

const type = (question: Question) => {
  return QuestionnaireUtils.getQuestionType(question.type);
};

export default type;