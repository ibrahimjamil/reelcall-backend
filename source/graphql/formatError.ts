import * as Sentry from "@sentry/node";
import { GraphQLError } from "graphql";

const formatError = (e: GraphQLError) => {
  Sentry.captureException(e);
  return e;
};

export default formatError;