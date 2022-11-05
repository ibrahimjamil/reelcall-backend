import { Headshot } from "@prisma/client";

const id = (headshot: Headshot) => {
  return headshot.id.toString();
};

export default id;