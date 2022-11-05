import { Reel } from "@prisma/client";

const id = (reel: Reel) => {
  return reel.id.toString();
};

export default id;