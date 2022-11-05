import { PrismaClient } from "@prisma/client";
import * as Sentry from "@sentry/node";

const client = new PrismaClient();

// Measure each query
client.$use(async (params, next) => {
  const trace = Sentry.startTransaction({name: `${params.action} ${params.model}`});
  const result = await next(params);
  trace?.finish();
  return result;
});

// TODO increment segment metrics for every CRUD operation

export default client;