
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const OLD_URL = 'http://localhost:9000';
const NEW_URL = 'http://64.23.160.217:9000';

function getDatabaseUrl() {
  // Try to find .env in current directory or parent
  const searchPaths = [
    path.join(process.cwd(), '.env'),
    path.join(process.cwd(), '..', '.env'),
    path.join(__dirname, '.env'),
  ];

  for (const envPath of searchPaths) {
    if (fs.existsSync(envPath)) {
      console.log(`Loading environment from ${envPath}`);
      const envContent = fs.readFileSync(envPath, 'utf8');
      const match = envContent.match(/^DATABASE_URL=(.+)/m);
      if (match) return match[1].trim();
    }
  }
  return null;
}

async function updateUrls() {
  const dbUrl = getDatabaseUrl() || "postgres://postgres:lion@127.0.0.1:5432/medusa_ecom";
  
  // Mask password for logging
  const maskedUrl = dbUrl.replace(/:([^@]+)@/, ':****@');
  console.log(`Connecting to: ${maskedUrl}`);

  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    await client.connect();
    console.log("Connected to DB");

    // Update product thumbnails
    const res1 = await client.query(
      `UPDATE product SET thumbnail = REPLACE(thumbnail, $1, $2) WHERE thumbnail LIKE $3`,
      [OLD_URL, NEW_URL, `%${OLD_URL}%`]
    );
    console.log(`Updated ${res1.rowCount} product thumbnails.`);

    // Update image URLs
    const res2 = await client.query(
      `UPDATE image SET url = REPLACE(url, $1, $2) WHERE url LIKE $3`,
      [OLD_URL, NEW_URL, `%${OLD_URL}%`]
    );
    console.log(`Updated ${res2.rowCount} image URLs.`);

  } catch (err) {
    console.error("Error updating DB:", err.message);
    if (err.code === '28P01') {
      console.error("\nTIP: It seems the database password in the script or .env is incorrect.");
      console.error("Please ensure the DATABASE_URL in your .env file is correct.");
    }
  } finally {
    await client.end();
  }
}

updateUrls();
