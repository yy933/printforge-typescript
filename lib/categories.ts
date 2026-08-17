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

export async function getCategoryBySlug(slug: string) {
  const db = await getDBConnection();
  try {
    const categoryData = await db.get(
      "SELECT * FROM categories WHERE slug = ?",
      [slug],
    );
    return categoryData;
  } finally {
    await db.close();
  }
}
