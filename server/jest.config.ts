module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['../setup-jest.ts'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: ['TS151001'],
      },
    },
  },
};
