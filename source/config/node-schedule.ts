import { scheduleJob } from "node-schedule";

import { sendSubmissionEmail } from "../jobs";

import logger from "./logger";

export const startScheduledJobs = () => {
  logger.info("📅 Starting scheduled jobs");

  scheduleJob("30 9 * * *", sendSubmissionEmail);
};