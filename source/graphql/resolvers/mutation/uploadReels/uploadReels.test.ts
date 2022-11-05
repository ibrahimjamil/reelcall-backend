import { PrismaClient } from "@prisma/client";
import { mockDeep } from "jest-mock-extended";

jest.mock("@prisma/client", () => ({
  PrismaClient: mockDeep<PrismaClient>(),
}));

import uploadReels from "./uploadReels";

describe("uploadReels", () => {
  test("Creates new reel records for each string", () => {
    const mockArgs = {
      reels: [ "https://youtu.be/Sv5woNs9WRE" ],
    };
    const mockContext = {
      userId: 1,
      userRole: 1,
    };

    const result = uploadReels(null, mockArgs, mockContext);

    expect(result).toBeDefined();
  });

  test.todo("Doesn't allow casting users to upload reels");
  test.todo("Throw an error if the reels aren't valid links");
});