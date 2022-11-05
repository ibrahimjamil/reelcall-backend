import { dateScalar } from "../scalars";

import * as Headshot from "./headshot";
import * as Mutation from "./mutation";
import * as Project from "./project";
import * as Query from "./query";
import * as Question from "./question";
import * as Reel from "./reel";
import * as Role from "./role";
import * as User from "./user";

export default {
  // Types
  Query,
  Mutation,
  User,
  Headshot,
  Project,
  Reel,
  Role,
  Question,

  // Scalars
  Date: dateScalar,
};
