import nodemailer from "nodemailer";

import settings from "../settings";

const transporter = nodemailer.createTransport(settings.mailUrl);

export default transporter;