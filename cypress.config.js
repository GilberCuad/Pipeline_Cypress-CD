const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xo348t",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
