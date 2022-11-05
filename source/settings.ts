import { resolve } from "path";

import dotenv from "dotenv";

dotenv.config({ path: resolve(__dirname, "../.env") });

process.env.TZ = "America/Los_Angeles";

const settings = {
  env: process.env.NODE_ENV,
  uiUrl: process.env.UI_URL,
  appPort: process.env.APP_PORT || 4000,
  logLevel: process.env.LOG_LEVEL || "info",
  aws: {
    region: process.env.AWS_DEFAULT_REGION,
    s3Url: process.env.AWS_URL,
    s3Bucket: process.env.AWS_BUCKET,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: process.env.SENTRY_TRACES_SAMPLE_RATE ? parseInt(process.env.SENTRY_TRACES_SAMPLE_RATE) : undefined,
  },
  mailUrl: process.env.MAIL_URL,
};

export default settings;
