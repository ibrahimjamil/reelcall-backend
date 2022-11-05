import { generateMockReel } from "../../../../../test-generators";

import id from "./id";

describe("id", () => {
  test("Returns the correct type", () => {
    const result = id(generateMockReel());

    expect(result).toBeDefined();
    expect(typeof result).toBe("string");
  });
});