/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "source/**/*.[jt]s",
    // "!source/**/index.ts", // I think we want to do this because we don't put logic in these files
    "!source/test-generators/**",
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover",
    "html",
  ],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 20,
      function: 5,
      lines: 10,
    },
  },
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.(js|ts)$": "babel-jest",
  },
};
