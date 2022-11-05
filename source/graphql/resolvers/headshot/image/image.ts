import { Headshot } from "@prisma/client";

import { S3Utils } from "../../../../utils";

const image = (headshot: Headshot) => {
  return S3Utils.constructObjectUrl(headshot.image);
};

export default image;