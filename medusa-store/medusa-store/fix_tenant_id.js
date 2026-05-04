const { Client } = require('pg');
require('dotenv').config();

async function fixTenantId() {
  const connectionString = process.env.DATABASE_URL || 'postgres://postgres:lion@127.0.0.1:5432/medusa_ecom';
  console.log("Connecting to:", connectionString.replace(/:([^:@]+)@/, ':****@')); // Hide password
  
  const client = new Client({ connectionString });
  await client.connect();
  
  // Find all tables that have a tenant_id column across all schemas
  const res = await client.query(`
    SELECT table_schema, table_name 
    FROM information_schema.columns 
    WHERE column_name = 'tenant_id' 
    AND table_schema NOT IN ('information_schema', 'pg_catalog');
  `);
  
  const tables = res.rows;
  console.log(`Found ${tables.length} tables with tenant_id.`);
  
  for (const row of tables) {
    const fullTableName = `"${row.table_schema}"."${row.table_name}"`;
    try {
      // Set default to '' for the tenant_id column
      await client.query(`ALTER TABLE ${fullTableName} ALTER COLUMN tenant_id SET DEFAULT '';`);
      
      // Also update any existing NULLs to '' just in case
      await client.query(`UPDATE ${fullTableName} SET tenant_id = '' WHERE tenant_id IS NULL;`);
      
      console.log(`- Fixed ${fullTableName}`);
    } catch (e) {
      console.error(`- Failed to fix ${fullTableName}:`, e.message);
    }
  }
  
  await client.end();
  console.log("Fix process complete!");
}

fixTenantId().catch(console.error);
