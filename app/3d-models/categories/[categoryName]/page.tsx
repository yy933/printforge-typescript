import ModelsGrid from "@/app/components/ModelsGrid";
import { getCategoryBySlug } from "@/lib/categories";
import { getModels } from "@/app/utils/models";
import type { CategoryPageProps } from "@/app/types";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const filteredModels = await getModels({ category: categoryName });
  const category = getCategoryBySlug(categoryName);
  return <ModelsGrid title={category.displayName} models={filteredModels} />;
}
