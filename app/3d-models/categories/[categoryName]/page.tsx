import ModelsGrid from "@/app/components/ModelsGrid";
// import { getCategoryBySlug } from "@/app/utils/categories";
import { getModelsByCategorySlug } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";
import type { CategoryPageProps } from "@/app/types";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = await getCategoryBySlug(categoryName);
  const models = await getModelsByCategorySlug(categoryName);

  return <ModelsGrid title={category.name} models={models} />;
}
