/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '\\.js$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    './testSetup.ts'
  ],
};