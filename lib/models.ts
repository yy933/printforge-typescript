import { getDBConnection } from "@/lib/db";

export type SortOption = "alpha" | "popular" | "recent";
const sortMap: Record<SortOption, string> = {
  alpha: " ORDER BY name ASC",
  popular: " ORDER BY likes DESC",
  recent: " ORDER BY dateAdded DESC",
};

interface GetModelsParams {
  categorySlug?: string;
  searchTerm?: string;
  sort?: SortOption;
  q?: string;
}

export async function getModels({
  categorySlug,
  searchTerm,
  sort,
}: GetModelsParams = {}) {
  const db = await getDBConnection();
  let sql = "SELECT * FROM models";
  const conditions: string[] = [];
  const placeholders: string[] = [];

  try {
    if (categorySlug) {
      conditions.push("category = ?");
      placeholders.push(categorySlug);
    }

    if (searchTerm) {
      conditions.push("(name LIKE ? OR description LIKE ?)");
      placeholders.push(`%${searchTerm}%`, `%${searchTerm}%`);
    }

    if (conditions.length > 0) {
      sql += " WHERE " + conditions.join(" AND ");
    }

    if (sort && sort in sortMap) {
      sql += sortMap[sort];
    }

    const modelsData = await db.all(sql, placeholders);
    return modelsData;
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
