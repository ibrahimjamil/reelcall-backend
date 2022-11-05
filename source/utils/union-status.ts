enum UnionStatus {
  NonUnion = "NonUnion",
  SagAftra = "SagAftra",
}

export const getAllUnionStatuses = (): UnionStatus[] => {
  return Object.values(UnionStatus);
};

export const getUnionStatus = (unionStatusInt: number): UnionStatus => {
  if (unionStatusInt === 1) { return UnionStatus.SagAftra; }
  if (unionStatusInt === 2) { return UnionStatus.NonUnion; }

  throw new Error(`Encountered project with unknown worker type ID ${unionStatusInt}`);
};

export const getUnionStatusId = (workerType: string): number => {
  if (workerType === UnionStatus.SagAftra) { return 1; }
  if (workerType === UnionStatus.NonUnion) { return 2; }

  throw new Error(`Encountered project with unknown worker type ${workerType}`);
};
