const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "babel",
  testEnvironment: "jsdom",
  // ... other configurations
};

module.exports = createJestConfig(config);
