import { Reel } from "@prisma/client";
import dayjs from "dayjs";

export const generateMockReel = (seed?: Partial<Reel>): Reel => ({
  id: seed?.id || BigInt(1000000),
  userId: seed?.userId || 1,
  link: seed?.link || "https://youtu.be/Sv5woNs9WRE",
  createdAt: seed?.createdAt || dayjs().toDate(),
  updatedAt: seed?.updatedAt || dayjs().toDate(),
});