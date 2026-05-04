const { Client } = require('pg');
require('dotenv').config();

async function checkUsers() {
  const client = new Client({ connectionString: process.env.DATABASE_URL || 'postgres://postgres:lion@127.0.0.1:5432/medusa_ecom' });
  await client.connect();
  
  const res = await client.query("SELECT id, email, tenant_id FROM \"user\";");
  console.log("Existing Users:", res.rows);
  
  await client.end();
}

checkUsers().catch(console.error);
