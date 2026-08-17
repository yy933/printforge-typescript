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

export async function getModelById(id: string | number) {
  const db = await getDBConnection();
  try {
    const foundModel = await db.get("SELECT * FROM models WHERE id = ?", [id]);
    return foundModel;
  } finally {
    await db.close();
  }
}
