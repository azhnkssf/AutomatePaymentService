const { defineConfig } = require("cypress");
const { Pool } = require('pg');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on("task", {
        async READFROMDB({ dbConfig, sql }) {
          const client = new Pool(dbConfig);
          try {
            await client.connect();
            const result = await client.query(sql);
            await client.end();
            return result.rows;
          } catch (error) {
            await client.end();
            throw error;
          } 
        }
      });

      return config;
    },
    specPattern: 'cypress/e2e/',
  },
  env: {
    baseUrlen: "https://staging.easysunday.com/en/",
    baseUrlth: "https://staging.easysunday.com/th/",
    paymentUrlCreate: "https://payment-api.staging.easysunday.com/api/v3.0/bill",
    apiKey: "84C51DFEB32B2DE6318AB340CC85640F"
  },
  video: false,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  waitForAnimations: true
});