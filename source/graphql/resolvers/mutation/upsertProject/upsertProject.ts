import { Dayjs } from "dayjs";

import prisma from "../../../../config/prisma";
import { ApolloContext } from "../../../../types";
import { UnionStatusUtils } from "../../../../utils";

type Args = {
  project: {
    id?: string,
    name: string,
    description: string,
    location: string,
    companyName?: string,
    categoryId: string,
    workerType: string,
    director?: string,
    producer?: string,
    writer?: string,
    castingDirector?: string,
    startDate?: Dayjs,
  },
};

const upsertProject = async (_mutation: unknown, args: Args, context: ApolloContext) => {
  if (context.userRole !== 2) {
    throw new Error("Non-casting user tried to create a project!");
  }
  const userId = context.userId;
  const projectInput = args.project;
  await prisma.project.upsert({
    where: {
      id: projectInput.id ? parseInt(projectInput.id) : -1,
    },
    update: {
      name: projectInput.name,
      description: projectInput.description,
      location: projectInput.location,
      companyName: projectInput.companyName || "",
      categoryId: parseInt(projectInput.categoryId),
      workerType: UnionStatusUtils.getUnionStatusId(projectInput.workerType),
      director: projectInput.director,
      producer: projectInput.producer,
      writer: projectInput.writer,
      castingDirector: projectInput.castingDirector,
      startDate: projectInput.startDate?.toDate(),
    },
    create: {
      userId,
      name: projectInput.name,
      description: projectInput.description,
      location: projectInput.location,
      companyName: projectInput.companyName || "",
      categoryId: parseInt(projectInput.categoryId),
      workerType: UnionStatusUtils.getUnionStatusId(projectInput.workerType),
      director: projectInput.director,
      producer: projectInput.producer,
      writer: projectInput.writer,
      castingDirector: projectInput.castingDirector,
      startDate: projectInput.startDate?.toDate(),
      status: 1,
    },
  });
  return {
    success: true,
  };
};

export default upsertProject;