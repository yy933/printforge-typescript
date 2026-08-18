import { getDBConnection } from "@/lib/db";

type SortOption = "alpha" | "popular" | "recent";
export async function getModels(searchTerm?: string, sort?: string) {
  const db = await getDBConnection();
  let sql = "SELECT * FROM models";
  const placeholders = [];
  const sortMap: Record<SortOption, string> = {
    alpha: " ORDER BY name ASC",
    popular: " ORDER BY likes DESC",
    recent: " ORDER BY dateAdded DESC",
  };

  try {
    if (searchTerm) {
      sql += ` WHERE name LIKE ? OR description LIKE ? `;
      placeholders.push(`%${searchTerm}%`, `%${searchTerm}%`);
    }

    if (sort && sort in sortMap) {
      sql += sortMap[sort as SortOption];
    }
    const modelsData = await db.all(sql, placeholders);
    return modelsData;
  } finally {
    await db.close();
  }
}

export async function getModelsByCategorySlug(
  categorySlug: string,
  sort?: string,
) {
  const db = await getDBConnection();
  let sql = "SELECT * FROM models WHERE category = ?";
  const sortMap: Record<SortOption, string> = {
    alpha: " ORDER BY name ASC",
    popular: " ORDER BY likes DESC",
    recent: " ORDER BY dateAdded DESC",
  };

  try {
    if (sort && sort in sortMap) {
      sql += sortMap[sort as SortOption];
    }
    const filteredModels = await db.all(sql, [categorySlug]);
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
