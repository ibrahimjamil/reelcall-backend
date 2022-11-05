import workerTypes from "./workerTypes";

describe("workerType", () => {
  test("Returns list of worker types", () => {
    expect(workerTypes()).toEqual([
      "NonUnion",
      "SagAftra",
    ]);
  });
});