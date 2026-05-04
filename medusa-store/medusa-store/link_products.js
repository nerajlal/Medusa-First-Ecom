const { Client } = require('pg');
require('dotenv').config();

async function linkProducts() {
  const connectionString = process.env.DATABASE_URL || 'postgres://postgres:lion@127.0.0.1:5432/medusa_ecom';
  const client = new Client({ connectionString });
  await client.connect();

  // Fetch Category IDs
  const catRes = await client.query("SELECT id, handle FROM product_category;");
  const categories = catRes.rows;
  
  const freshProduce = categories.find(c => c.handle === 'fresh-produce');
  const pantry = categories.find(c => c.handle === 'pantry');
  const chocolates = categories.find(c => c.handle === 'chocolates');

  if (!freshProduce) {
    console.log("Could not find 'fresh-produce' category. Check your categories.");
    await client.end();
    return;
  }

  const productsRes = await client.query("SELECT id, title FROM product;");
  const products = productsRes.rows;

  console.log(`Linking ${products.length} products...`);

  for (const product of products) {
    let catId = freshProduce.id; // Default

    if (product.title.toLowerCase().includes('sourdough') || 
        product.title.toLowerCase().includes('muffin') || 
        product.title.toLowerCase().includes('milk') || 
        product.title.toLowerCase().includes('juice')) {
      catId = pantry?.id || freshProduce.id;
    } else if (product.title.toLowerCase().includes('chocolate')) {
      catId = chocolates?.id || freshProduce.id;
    }

    try {
      await client.query(
        "INSERT INTO product_category_product (product_id, product_category_id) VALUES ($1, $2) ON CONFLICT DO NOTHING;",
        [product.id, catId]
      );
      console.log(`- Linked ${product.title} to ${catId}`);
    } catch (e) {
      console.error(`- Failed to link ${product.title}:`, e.message);
    }
  }

  await client.end();
  console.log("Linking complete!");
}

linkProducts().catch(console.error);
