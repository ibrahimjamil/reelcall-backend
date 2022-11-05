import prisma from "../../../../config/prisma";

const projectCategories = () => {
  return prisma.category.findMany();
};

export default projectCategories;