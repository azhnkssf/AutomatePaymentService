const { defineConfig } = require("cypress");
const { Pool } = require('pg');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
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
    }
  },
  DB: {
    user: "wisaruth-lu",
    password: "9NwygrnyR59M1oZgjo62XrEhEAyQNu2G",
    host: "shared-postgres-staging.cmbagwipzfnw.ap-southeast-1.rds.amazonaws.com",
    database: "payment_db",
    ssl: {
      rejectUnauthorized: false
    },
    port: 5432
  }
});