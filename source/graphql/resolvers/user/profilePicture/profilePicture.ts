import { Headshot, User } from "@prisma/client";

import prisma from "../../../../config/prisma";
import { S3Utils } from "../../../../utils";


type UserWithHeadshots = User & { headshots?: Headshot[] };

const profilePicture = async (user: UserWithHeadshots) => {
  const headshots = user.headshots || await prisma.headshot.findMany({
    where: { userId: user.id },
  });
  return S3Utils.constructObjectUrl(headshots.find((h) => h.isProfilePicture)?.image);
};

export default profilePicture;