import { getDBConnection } from "./db";

export async function getCategories() {
  const db = await getDBConnection();
  try {
    const categoriesData = await db.all("SELECT * FROM categories;");
    return categoriesData;
  } finally {
    await db.close();
  }
}
