import * as Sentry from "@sentry/node";
import { ApolloServer } from "apollo-server";

import smtpTransport from "./config/email";
import logger from "./config/logger";
import { startScheduledJobs } from "./config/node-schedule";
import prisma from "./config/prisma";
import { startMonitoring } from "./config/sentry";
import { context, formatError, resolvers, typeDefs } from "./graphql";
import settings from "./settings";

const main = async () => {
  logger.info("⚡ ReelCall Graph is starting up!");

  startMonitoring();
  startScheduledJobs();

  await smtpTransport.verify();
  logger.info("✉️ SMTP connection verified");

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    formatError,
    logger,
  });

  try {
    const { url } = await server.listen({ port: settings.appPort });
    logger.info(`🚀 GraphQL Server ready at ${url}`);
  } catch (e) {
    Sentry.captureException(e);
  }
};

const shutdown = async () => {
  logger.info("🧹 Cleaning up before shutting down");
  await prisma.$disconnect();
  logger.info("👋 Process is done shutting down - goodbye");
};

process.on("SIGTERM", async () => {
  await shutdown();
});

main().catch(async (e) => {
  logger.error("☠️ Shutting down ReelCall Graph due to uncaught error", e);
  Sentry.captureException(e);
  await shutdown();
  process.exit(1);
});
