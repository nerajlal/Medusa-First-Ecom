const { resolve } = require("path");
require("dotenv").config();

async function run() {
  console.log("Starting Medusa DB Fixer...");
  try {
    const { Client } = require('pg');
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();

    // 1. Check/Create Admin User
    const userRes = await client.query("SELECT id FROM \"user\" WHERE email = 'admin@medusa-test.com';");
    if (userRes.rowCount === 0) {
      console.log("Admin user missing. You will need to run 'npx medusa user -e admin@medusa-test.com -p supersecret' later.");
    } else {
      console.log("Admin user exists!");
    }

    // 2. Fetch the Default Sales Channel
    const scRes = await client.query("SELECT id FROM sales_channel LIMIT 1;");
    if (scRes.rowCount === 0) {
       console.log("NO SALES CHANNEL FOUND!");
       process.exit(1);
    }
    const scId = scRes.rows[0].id;

    // 3. Fetch the API Key
    const keyRes = await client.query("SELECT id FROM api_key WHERE type = 'publishable' LIMIT 1;");
    if (keyRes.rowCount === 0) {
       console.log("NO API KEY FOUND!");
       process.exit(1);
    }
    const keyId = keyRes.rows[0].id;

    console.log(`Linking Sales Channel ${scId} to API Key ${keyId}`);

    // Inside Medusa 2.0, junction table for sales_channels & api_keys is usually module link table.
    // Let's inspect the link tables in the DB to find the exact name!
    const tableRes = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name LIKE '%api_key%sales_channel%';");
    
    if (tableRes.rowCount > 0) {
      const tableName = tableRes.rows[0].table_name;
      console.log(`Found pivot table: ${tableName}`);
      const crypto = require('crypto');
      const randomId = 'paksc_' + crypto.randomBytes(8).toString('hex');
      try {
        await client.query(`INSERT INTO ${tableName} (id, publishable_key_id, sales_channel_id) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING;`, [randomId, keyId, scId]);
        console.log("Successfully linked in DB!");
      } catch(e) { console.log(e.message); }
    } else {
       console.log("Could not find the api key link table. It might be handled differently.");
    }

    console.log("PUBLISHABLE_KEY_READY=" + keyId);
    await client.end();
  } catch (e) {
    console.error("Script Error:", e);
  }
}

run();
