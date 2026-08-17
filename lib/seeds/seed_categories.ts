/*
CHALLENGE — Seed the PrintForge database with categories data.

1. Import:
   - `getDBConnection` from `@/lib/db`
   - the categories data from `@/data/categories.json`

2. Create a `categories` table with:
   - `slug` as TEXT PRIMARY KEY
   - `name` as TEXT NOT NULL

3. Prepare an INSERT query using `db.prepare()`

4. Loop through the categories data and insert each one into the table

5. Finalise the prepared statement and close the database connection

6. Run the file in the terminal to seed the database:
   `npx tsx lib/seeds/seed_categories.ts`

7. (Optional) Run the provided `checkCategories.ts` script to verify your data

TIP: Use `seed_models.ts` as a reference!
*/
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
    await insertCategory.run(category.slug, category.displayName);
  }

  // finalise the prepared statement and close the database connection
  await insertCategory.finalize();
  await db.close();

  console.log("Categories seeded successfully!");
}

seedCategories().catch((error) => {
  console.error("Seeding failed:", error);
});
