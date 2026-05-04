
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

async function fixCategories() {
  const dbUrl = getDatabaseUrl() || "postgres://postgres:lion@127.0.0.1:5432/medusa_ecom";
  
  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    await client.connect();
    console.log("Connected to DB");

    // 1. Fix problematic handles
    console.log("Updating handles for URL compatibility...");
    await client.query("UPDATE product_category SET handle = 'meat-seafood' WHERE handle = 'meat-&-seafood'");
    await client.query("UPDATE product_category SET handle = 'dairy-eggs' WHERE handle = 'dairy-&-eggs'");
    console.log("Handles updated: 'meat-seafood' and 'dairy-eggs'");

    // 2. Remove unwanted categories (Shirts, Pants, Sweatshirts, Merch)
    const unwanted = ['Shirts', 'Pants', 'Sweatshirts', 'Merch'];
    console.log(`Removing unwanted categories: ${unwanted.join(', ')}`);
    
    // In Medusa, we should remove from links first
    for (const name of unwanted) {
        const cat = await client.query("SELECT id FROM product_category WHERE name = $1", [name]);
        if (cat.rows.length > 0) {
            const id = cat.rows[0].id;
            await client.query("DELETE FROM product_category_product WHERE product_category_id = $1", [id]);
            await client.query("DELETE FROM product_category WHERE id = $1", [id]);
            console.log(`- Deleted category: ${name}`);
        }
    }

    console.log("\nSUCCESS: Categories fixed. Please restart your backend and storefront.");

  } catch (err) {
    console.error("Error updating DB:", err.message);
  } finally {
    await client.end();
  }
}

fixCategories();
