import { getDBConnection } from "@/lib/db";
export async function getModels() {
  const db = await getDBConnection();
  try {
    const modelsData = await db.all("SELECT * FROM models;");
    return modelsData;
  } finally {
    await db.close();
  }
}

export async function getModelsByCategorySlug(categorySlug: string) {
  const db = await getDBConnection();
  try {
    const filteredModels = await db.all(
      `SELECT * FROM models WHERE category = ?`,
      [categorySlug],
    );
    return filteredModels;
  } finally {
    await db.close();
  }
}
