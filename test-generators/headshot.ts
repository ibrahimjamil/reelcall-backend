import { Headshot } from "@prisma/client";
import dayjs from "dayjs";

export const generateMockHeadshot = (seed?: Partial<Headshot>): Headshot => ({
  id: seed?.id || BigInt(1000000),
  userId: seed?.userId || 1,
  image: seed?.image || "/profile-pic",
  isProfilePicture: !!seed?.isProfilePicture,
  createdAt: seed?.createdAt || dayjs().toDate(),
  updatedAt: seed?.updatedAt || dayjs().toDate(),
});