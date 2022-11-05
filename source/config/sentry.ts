import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

import settings from "../settings";

import logger from "./logger";

export const startMonitoring = () => {
  const { dsn, tracesSampleRate = 0.2 } = settings.sentry;
  if (dsn) {
    Sentry.init({
      dsn,
      tracesSampleRate,
      integrations: [
        new Sentry.Integrations.FunctionToString(),
        new Sentry.Integrations.OnUncaughtException(),
        new Sentry.Integrations.OnUnhandledRejection(),

        new Tracing.Integrations.Mysql(),
        new Tracing.Integrations.Express(),
      ],
    });
    logger.info("📉 Sentry monitoring is enabled");
  }
};