export default {
  testEnvironment: "node",
  preset: "ts-jest/presets/default-esm",
  transform: {
    "^.+\\.m?tsx?$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "./packages/typescript-config/base.json",
      },
    ],
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "^@repo/([^/]+)$": "<rootDir>/packages/$1",
    "^@repo/([^/]+)/(.*)$": "<rootDir>/packages/$1/src/$2",
  },
  testMatch: [
    "<rootDir>/packages/**/test/**/*.(e2e-spec|unit-spec).ts",
    "<rootDir>/apps/**/test/**/*.(e2e-spec|unit-spec).ts",
  ],
};
