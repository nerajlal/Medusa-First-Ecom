
const { Client } = require('pg');

async function checkImages() {
  const client = new Client({
    connectionString: "postgres://postgres:lion@127.0.0.1:5432/medusa_ecom",
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
    console.error("Error connecting to DB:", err);
  } finally {
    await client.end();
  }
}

checkImages();
