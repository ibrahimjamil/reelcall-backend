// TODO this should come from a shared library
enum QuestionType {
  RadioSelect = "RadioSelect", // 1
  MultiSelectOverlap = "MultiSelectOverlap", // 2
  MultiSelectAny = "MultiSelectAny", // 3
  FreeformText = "FreeformText", // 4
}

export const getQuestionType = (typeNum: number): QuestionType => {
  if (typeNum === 1) { return QuestionType.RadioSelect; }
  if (typeNum === 2) { return QuestionType.MultiSelectOverlap; }
  if (typeNum === 3) { return QuestionType.MultiSelectAny; }
  if (typeNum === 4) { return QuestionType.FreeformText; }

  throw new Error("Question is missing or has in invalid type.");
};
