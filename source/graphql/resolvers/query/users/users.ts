import prisma from "../../../../config/prisma";

const users = () => {
  return prisma.user.findMany();
};

export default users;