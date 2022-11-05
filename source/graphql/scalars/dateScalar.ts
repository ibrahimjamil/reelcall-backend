import dayjs, { Dayjs } from "dayjs";
import { GraphQLScalarType, Kind } from "graphql";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value: Dayjs) {
    return value.toISOString();
  },
  parseValue(value: string) {
    return dayjs(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return dayjs(ast.value);
    }
    return null;
  },
});

export default dateScalar;
