const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Necessary for Render's SSL configuration
  },
});

// Test the connection and log the result
pool
  .query("SELECT NOW()")
  .then(() => {
    console.log("✅ Connected to PostgreSQL");
  })
  .catch((err) => {
    console.error("❌ Failed to connect to PostgreSQL:", err.message);
  });

module.exports = pool;
// const Pool = require("pg").Pool;
// require("dotenv").config();

// const pool = new Pool({
//   user: "postgres",
//   password: "password",
//   host: "localhost",
//   port: 5432,
//   database: "shop",
// });

// module.exports = pool;
