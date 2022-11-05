import { ContextFunction } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express";

const context: ContextFunction<ExpressContext> = ({ req }) => {
  return {
    userId: parseInt(req.headers["user-id"] as string),
    userRole: parseInt(req.headers["user-role"] as string),
  };
};

export default context;