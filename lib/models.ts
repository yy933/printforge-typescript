import { getDBConnection } from "@/lib/db";
export async function getModels(searchTerm?: string) {
  const db = await getDBConnection();
  let sql = "SELECT * FROM models";
  const placeholders = [];
  try {
    if (searchTerm) {
      sql = `SELECT * FROM models WHERE name LIKE ? OR description LIKE ? `;
      placeholders.push(`%${searchTerm}%`, `%${searchTerm}%`);
    }
    const modelsData = await db.all(sql, placeholders);
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

export async function getModelById(id: string | number) {
  const db = await getDBConnection();
  try {
    const foundModel = await db.get("SELECT * FROM models WHERE id = ?", [id]);
    return foundModel;
  } finally {
    await db.close();
  }
}


