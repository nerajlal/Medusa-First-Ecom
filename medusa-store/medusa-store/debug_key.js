const { resolve } = require("path");
const { Medusa } = require("@medusajs/medusa");
const dotenv = require("dotenv");

dotenv.config();

async function run() {
  const fetch = require("node-fetch");

  // First let's get an admin token to query the keys
  console.log("Logging into admin...");
  try {
    const authRes = await fetch("http://localhost:9000/auth/user/emailpass", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@medusa-test.com", password: "supersecret" })
    });
    
    const text = await authRes.text();
    console.log("Auth response:", text);

    // Using direct DB is easier since we know Medusa uses pg
    const { Client } = require('pg');
    const client = new Client({
      connectionString: process.env.DATABASE_URL
    });
    await client.connect();
    const res = await client.query("SELECT id, token FROM api_key WHERE type = 'publishable' LIMIT 1;");
    console.log("DB keys:", res.rows);
    await client.end();
  } catch (e) {
    console.error(e);
  }
}

run();
