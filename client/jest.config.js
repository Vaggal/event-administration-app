module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["../setup-jest.ts"],
  globals: {
    "ts-jest": {
      stringifyContentPathRegex: "\\.html$",
      diagnostics: {
        ignoreCodes: ["TS151001"],
      },
    },
  },
};
