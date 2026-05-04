
const { Client } = require('pg');

const OLD_URL = 'http://localhost:9000';
const NEW_URL = 'http://64.23.160.217:9000';

async function updateUrls() {
  const client = new Client({
    connectionString: "postgres://postgres:lion@127.0.0.1:5432/medusa_ecom",
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
    console.error("Error updating DB:", err);
  } finally {
    await client.end();
  }
}

updateUrls();
