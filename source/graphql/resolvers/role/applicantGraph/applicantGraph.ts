import { Role } from "@prisma/client";
import { groupBy } from "lodash";

import prisma from "../../../../config/prisma";
import { FitUtils } from "../../../../utils";

const BUCKETS = [
  { name: "10%", bucket: "0%-10%" },
  { name: "20%", bucket: "11%-20%" },
  { name: "30%", bucket: "21%-30%" },
  { name: "40%", bucket: "31%-40%" },
  { name: "50%", bucket: "41%-50%" },
  { name: "60%", bucket: "51%-60%" },
  { name: "70%", bucket: "61%-70%" },
  { name: "80%", bucket: "71%-80%" },
  { name: "90%", bucket: "81%-90%" },
  { name: "100%", bucket: "91%-100%" },
];

const applicantGraph = async (role: Role) => {
  const roleRequirements = (await prisma.role.findUnique({
    where: { id: role.id },
    select: { requirements: true },
  }))!.requirements;

  const applicants = await prisma.applicant.findMany({
    where: { roleId: role.id },
    include: {
      user: {
        include: { questionnaireAnswers: true },
      },
    },
  });

  const fitScores = await Promise.all(applicants.map(async (a) => {
    return FitUtils.calculateScore(roleRequirements, a.user.questionnaireAnswers);
  }));
  const scoreGroups = groupBy(fitScores, (score) => score ? Math.floor((score-1)/10) : 0);

  return BUCKETS.map((b, i) => ({
    ...b,
    count: scoreGroups[i] ? scoreGroups[i].length : 0,
  }));
};

export default applicantGraph;