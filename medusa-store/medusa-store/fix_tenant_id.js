const { Client } = require('pg');
require('dotenv').config();

async function fixTenantId() {
  const client = new Client({ connectionString: process.env.DATABASE_URL || 'postgres://postgres:lion@127.0.0.1:5432/medusa_ecom' });
  await client.connect();
  
  const res = await client.query("SELECT table_name FROM information_schema.columns WHERE column_name = 'tenant_id';");
  const tables = res.rows.map(r => r.table_name);
  
  console.log(`Fixing ${tables.length} tables...`);
  
  for (const table of tables) {
    try {
      // Set default to '' and make nullable if needed (or just set default)
      // Actually, if it's NOT NULL, setting a default will help INSERTs.
      await client.query(`ALTER TABLE "${table}" ALTER COLUMN tenant_id SET DEFAULT '';`);
      console.log(`Set default for ${table}`);
    } catch (e) {
      console.error(`Failed to fix ${table}:`, e.message);
    }
  }
  
  await client.end();
  console.log("Fix complete!");
}

fixTenantId().catch(console.error);
