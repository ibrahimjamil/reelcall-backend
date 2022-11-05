import { ApolloContext } from "../../../../types";
import { S3Utils } from "../../../../utils";

type Args = {
  count: number,
};

const generateSignedS3Urls = (_query: undefined, args: Args, context: ApolloContext) => {
  return new Array(args.count).fill(1).map(() => S3Utils.getPreSignedUrl(context.userId));
};

export default generateSignedS3Urls;