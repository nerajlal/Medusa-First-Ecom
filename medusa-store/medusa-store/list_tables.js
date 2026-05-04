
const { Client } = require('pg');

async function listTables() {
  const client = new Client({
    connectionString: "postgres://postgres:lion@127.0.0.1:5432/medusa_ecom",
  });

  try {
    await client.connect();
    console.log("Connected to DB");

    const res = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'");
    console.log("Tables:");
    console.table(res.rows.map(r => r.table_name).sort());

  } catch (err) {
    console.error("Error connecting to DB:", err);
  } finally {
    await client.end();
  }
}

listTables();
