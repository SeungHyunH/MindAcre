import config from "./jest.config.mjs";

export default {
  ...config,
  testMatch: [
    "<rootDir>/packages/**/test/**/*.unit-spec.ts",
    "<rootDir>/apps/**/test/**/*.unit-spec.ts",
  ],
};
