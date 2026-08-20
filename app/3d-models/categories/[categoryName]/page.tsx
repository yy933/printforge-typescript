import ModelsBrowser from "@/app/components/ModelsBrowser";
import { getModels, SortOption } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";
import type { CategoryPageProps } from "@/app/types";

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categoryName } = await params;
  const { sort } = await searchParams;
  const category = await getCategoryBySlug(categoryName);
  const models = await getModels({
    categorySlug: category.slug,
    sort: sort as SortOption | undefined,
  });

  return <ModelsBrowser categoryName={category.name} models={models} />;
}
