
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

async function checkBananas() {
  const dbUrl = getDatabaseUrl() || "postgres://postgres:lion@127.0.0.1:5432/medusa_ecom";
  
  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    await client.connect();
    console.log("Connected to DB");

    const res = await client.query("SELECT id, title, thumbnail FROM product WHERE title ILIKE '%banana%'");
    console.log("Banana Products:");
    console.table(res.rows);

    if (res.rows.length > 0) {
        const productId = res.rows[0].id;
        const res2 = await client.query("SELECT i.url FROM image i JOIN product_images pi ON pi.image_id = i.id WHERE pi.product_id = $1", [productId]);
        console.log("Images for Banana:");
        console.table(res2.rows);
    }

  } catch (err) {
    console.error("Error connecting to DB:", err.message);
  } finally {
    await client.end();
  }
}

checkBananas();
