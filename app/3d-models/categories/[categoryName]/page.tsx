import ModelsGrid from "@/app/components/ModelsGrid";
// import { getCategoryBySlug } from "@/app/utils/categories";
import { getModels } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";
import type { CategoryPageProps } from "@/app/types";

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categoryName } = await params;
  const { sort } = await searchParams;
  const category = await getCategoryBySlug(categoryName);
  const models = await getModels(categoryName, '',sort);

  return <ModelsGrid categoryName={category.name} models={models} />;
}
