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
  page?: number;
  modelsPerPage?: number;
}

export async function getModels({
  categorySlug,
  searchTerm,
  sort,
  page = 1,
  modelsPerPage = 6,
}: GetModelsParams = {}) {
  const db = await getDBConnection();
  let sql = "SELECT * FROM models";
  const conditions: string[] = [];
  const placeholders: (string | number)[] = [];

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

    const offset = modelsPerPage * (page - 1);
    sql += " LIMIT ? OFFSET ?";
    placeholders.push(modelsPerPage, offset);

    const modelsData = await db.all(sql, placeholders);
    return modelsData;
  } finally {
    await db.close();
  }
}

export async function getModelCount({
  search,
  categorySlug,
}: {
  search?: string;
  categorySlug?: string;
}) {
  const db = await getDBConnection();
  let sql = "SELECT COUNT(*) as count FROM models";
  const placeholders: (string | number)[] = [];
  const conditions: string[] = [];
  if (search) {
    conditions.push("(name LIKE ? OR description LIKE ?)");
    placeholders.push(`%${search}%`, `%${search}%`);
  }
  if (categorySlug) {
    conditions.push("category = ?");
    placeholders.push(categorySlug);
  }
  if (conditions.length > 0) {
    sql += " WHERE " + conditions.join(" AND ");
  }
  try {
    const result = await db.get(sql, placeholders);

    return result.count;
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
