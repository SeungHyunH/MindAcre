import config from "./jest.config.mjs";

export default {
  ...config,
  testMatch: [
    "<rootDir>/packages/**/test/**/*.e2e-spec.ts",
    "<rootDir>/apps/**/test/**/*.e2e-spec.ts",
  ],
};
