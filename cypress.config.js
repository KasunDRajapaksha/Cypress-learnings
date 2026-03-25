const { defineConfig } = require("cypress");

module.exports = defineConfig({

  allowCypressEnv: false,
  env: {
    loginUrl: "https://the-internet.herokuapp.com/login",
    checkboxUrl: "https://the-internet.herokuapp.com/checkboxes"
  },
  e2e: {
    browser: "chrome",
    headless: true,
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
