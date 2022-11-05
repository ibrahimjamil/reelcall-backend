import * as RolesUtils from "./role";

describe("RoleUtils", () => {
  describe("getType", () => {
    test("Produces the correct results for valid role numbers", () => {
      expect(RolesUtils.getType(1)).toBe("Actor");
      expect(RolesUtils.getType(2)).toBe("Casting");
      expect(RolesUtils.getType(3)).toBe("Admin");
    });

    test("Throws an error for invalid role numbers", () => {
      const expectedError = "User is missing or has an invalid role.";
      expect(() => { RolesUtils.getType(0); }).toThrowError(expectedError);
      expect(() => { RolesUtils.getType(4); }).toThrowError(expectedError);
    });
  });
});