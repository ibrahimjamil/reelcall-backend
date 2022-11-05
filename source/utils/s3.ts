import crypto from "crypto";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import settings from "../settings";

const client = new S3Client({
  region: settings.aws.region,
});

export const constructObjectUrl = (object?: string | null) => {
  if (!object) { return; }
  return `${settings.aws.s3Url}/${object}`;
};

export const getPreSignedUrl = (userId: number) => {
  const path = `users/${userId}/headshots/${crypto.randomBytes(16).toString("hex")}.jpg`;
  const command = new PutObjectCommand({
    ACL: "public-read",
    Bucket: `${settings.aws.s3Bucket}`,
    Key: path,
    ContentType: "media-type",
  });
  const url = getSignedUrl(client, command);
  return { url, path };
};