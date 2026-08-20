import ModelsBrowser from "@/app/components/ModelsBrowser";
import { notFound } from "next/navigation";
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
  if (!category) return notFound();
  const models = await getModels({
    categorySlug: category.slug,
    sort: sort as SortOption | undefined,
  });

  return <ModelsBrowser categoryName={category.name} models={models} />;
}
