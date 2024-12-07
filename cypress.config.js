const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true, // Take screenshots on test failure
    screenshotsFolder: "cypress/screenshots", // Directory to save screenshots
    video: true, // Enable video recording
    videoCompression: 32, // Set video compression level (0-100)
    videoUploadOnPasses: false, // Do not upload videos of passing tests
    videosFolder: "cypress/videos", // Directory to save videos
    defaultCommandTimeout: 4000, // Default timeout for commands
    pageLoadTimeout: 60000, // Timeout for page load
    requestTimeout: 5000, // Timeout for network requests
    browser: "chrome", // Default browser for running tests
    chromeWebSecurity: false,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "custom-title",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
