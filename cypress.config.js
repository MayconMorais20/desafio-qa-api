const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.js'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true
  }
}) 