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
