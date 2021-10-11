/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  projects: ["./client", "./server"],
  testPathIgnorePatterns: ["./node_modules/", "./dist/", "./cypress/"],
};
