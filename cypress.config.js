const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: '3-automation/cypress/e2e/**/*.*',
    baseUrl: 'https://www.tudocelular.com/compare/',
    supportFile: false
  }
})
