
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

async function checkImages() {
  const dbUrl = getDatabaseUrl() || "postgres://postgres:lion@127.0.0.1:5432/medusa_ecom";
  
  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    await client.connect();
    console.log("Connected to DB");

    const res = await client.query('SELECT id, thumbnail FROM product WHERE thumbnail IS NOT NULL LIMIT 10');
    console.log("Product Thumbnails (Non-null):");
    console.table(res.rows);

    const res2 = await client.query('SELECT id, url FROM image');
    console.log("All Image URLs:");
    console.table(res2.rows);

  } catch (err) {
    console.error("Error connecting to DB:", err.message);
  } finally {
    await client.end();
  }
}

checkImages();
