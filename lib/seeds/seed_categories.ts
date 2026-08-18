import { getDBConnection } from "@/lib/db";
import categories from "@/lib/data/categories.json";

async function seedCategories() {
  const db = await getDBConnection();

  // Create the categories table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      slug TEXT PRIMARY KEY,
      name TEXT NOT NULL
    );
  `);

  // prepare INSERT query
  const insertCategory = await db.prepare(`
    INSERT OR REPLACE INTO categories (slug, name) VALUES (?, ?);
  `);

  // loop through categories and run the INSERT query for each one
  for (const category of categories) {
    await insertCategory.run(category.slug, category.name);
  }

  // finalise the prepared statement and close the database connection
  await insertCategory.finalize();
  await db.close();

  console.log("Categories seeded successfully!");
}

seedCategories().catch((error) => {
  console.error("Seeding failed:", error);
});
