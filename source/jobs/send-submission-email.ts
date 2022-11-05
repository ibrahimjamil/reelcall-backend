import fs from "fs";
import path from "path";

import * as Sentry from "@sentry/node";
import dayjs from "dayjs";
import handlebars from "handlebars";
import { groupBy } from "lodash";

import transporter from "../config/email";
import logger from "../config/logger";
import prisma from "../config/prisma";
import settings from "../settings";

export const sendSubmissionEmail = async () => {
  try {
    const newApplications = await prisma.applicant.findMany({
      where: {
        createdAt: {
          gte: dayjs().subtract(1, "day").toDate(),
        },
      },
      include: {
        role: {
          include: {
            project: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (newApplications.length > 0) {
      logger.info(`✉️ Sending submission emails for ${newApplications.length} new applicants`);

      const applicationMap = groupBy(newApplications, (a) => a.role.project.user.email);
      applicationMap["dylan@reelcall.com"] = [] as any; // This is probably a mistake

      const hbsSource = fs.readFileSync(path.join(__dirname, "../email-templates/base.hbs"), "utf8");
      const htmlTemplate = handlebars.compile(hbsSource);

      await Promise.all(Object.entries(applicationMap).map(async ([castingEmail, applications]) => {
        const appCount = applications.length;
        const subject = `You have ${appCount} new submission${appCount > 1 ? "s" : ""}`;
        await transporter.sendMail({
          from: "\"ReelCall\" <no-reply@reelcall.io>",
          to: castingEmail,
          subject,
          text: "Visit reelcall.com to see your new submissions.",
          html: htmlTemplate({
            title: subject,
            body: `${subject} since yesterday. Click the link below to check ${appCount > 1 ? "them" : "it"} out.`,
            ctaText: "View Submissions",
            link: settings.uiUrl,
            currentYear: dayjs().year(),
          }),
        });
      }));
    }
  } catch (e) {
    logger.error("😱 Error sending submission emails", e);
    Sentry.captureException(e);
  }
};