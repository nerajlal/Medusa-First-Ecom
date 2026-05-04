
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

async function checkCategories() {
  const dbUrl = getDatabaseUrl() || "postgres://postgres:lion@127.0.0.1:5432/medusa_ecom";
  
  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    await client.connect();
    console.log("Connected to DB");

    const query = `
      SELECT pc.name, COUNT(pcp.product_id) as product_count
      FROM product_category pc
      LEFT JOIN product_category_product pcp ON pcp.product_category_id = pc.id
      GROUP BY pc.name
      ORDER BY product_count DESC
    `;

    const res = await client.query(query);
    console.log("Category Product Counts:");
    console.table(res.rows);

    const totalCategories = res.rows.length;
    const lowCategories = res.rows.filter(r => parseInt(r.product_count) < 3);

    console.log(`\nTotal Categories Found: ${totalCategories}`);
    if (lowCategories.length > 0) {
      console.log(`WARNING: ${lowCategories.length} categories have fewer than 3 products:`);
      lowCategories.forEach(c => console.log(`- ${c.name}: ${c.product_count} products`));
    } else {
      console.log("SUCCESS: All categories have at least 3 products.");
    }

  } catch (err) {
    console.error("Error connecting to DB:", err.message);
  } finally {
    await client.end();
  }
}

checkCategories();
