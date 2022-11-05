import { createLogger, format, transports } from "winston";

import settings from "../settings";

const logger = createLogger({
  level: settings.logLevel,
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: "reelcall-graph" },
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
    new transports.Console({ format: format.combine(format.colorize(), format.simple()) }),
  ],
});

export default logger;
