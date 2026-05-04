
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

function getDatabaseUrl() {
  const searchPaths = [
    path.join(process.cwd(), '.env'),
    path.join(process.cwd(), '..', '.env'),
    path.join(__dirname, '.env'),
  ];

  for (const envPath of searchPaths) {
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      const match = envContent.match(/^DATABASE_URL=(.+)/m);
      if (match) return match[1].trim();
    }
  }
  return null;
}

async function checkHandles() {
  const dbUrl = getDatabaseUrl() || "postgres://postgres:lion@127.0.0.1:5432/medusa_ecom";
  
  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    await client.connect();
    console.log("Connected to DB");

    const res = await client.query('SELECT id, name, handle FROM product_category');
    console.log("Categories in DB:");
    console.table(res.rows);

    const problematic = res.rows.filter(r => /[^a-z0-9-]/.test(r.handle));
    if (problematic.length > 0) {
      console.log("\nWARNING: Some category handles contain special characters which cause 404 errors:");
      problematic.forEach(c => console.log(`- ${c.name}: handle is "${c.handle}"`));
      
      console.log("\nTIP: You should update these handles to use only lowercase letters, numbers, and hyphens.");
    } else {
      console.log("\nAll handles look URL-safe.");
    }

  } catch (err) {
    console.error("Error connecting to DB:", err.message);
  } finally {
    await client.end();
  }
}

checkHandles();
