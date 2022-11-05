import { Project } from "@prisma/client";

import { UnionStatusUtils } from "../../../../utils";

const workerType = (project: Project) => {
  return UnionStatusUtils.getUnionStatus(project.workerType);
};

export default workerType;