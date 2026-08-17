import { getDBConnection } from "@/lib/db";

async function checkCategories() {
  let db;
  try {
    // Connect to the database
    db = await getDBConnection();

    // 1. Check the total count of categories
    const countResult = await db.get(
      "SELECT COUNT(*) AS count FROM categories;",
    );
    console.log(`Total count of categories: ${countResult.count} `);

    // 2. Check the content of categories
    const categories = await db.all("SELECT * FROM categories;");

    if (categories.length === 0) {
      console.log("categories table is empty.");
    } else {
      console.log("Categories table content:");
      console.table(categories);
    }
  } catch (error) {
    console.error("Error checking categories: ", error);
  } finally {
    // Close the database connection
    if (db) {
      await db.close();
    }
  }
}

checkCategories();
