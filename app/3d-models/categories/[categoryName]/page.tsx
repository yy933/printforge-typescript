import ModelsBrowser from "@/app/components/ModelsBrowser";
import { notFound, redirect } from "next/navigation";

import { getModels, SortOption, getModelCount } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";
import { MODELS_PER_PAGE } from "@/lib/constants";
import { getQueryParams } from "@/lib/helper";
import type { CategoryPageProps } from "@/app/types";

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categoryName } = await params;
  const category = await getCategoryBySlug(categoryName);
  if (!category) return notFound();

  const { search, sort, page } = getQueryParams(await searchParams);

  const modelsCount = await getModelCount({
    categorySlug: category.slug,
    search,
  });
  const totalPages = Math.max(1, Math.ceil(modelsCount / MODELS_PER_PAGE));

  const models = await getModels({
    categorySlug: category.slug,
    sort: sort as SortOption | undefined,
    searchTerm: search,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });

  if (page < 1 || page > totalPages || sort === null)
    return redirect(`/3d-models/categories/${category.slug}`);

  return (
    <ModelsBrowser
      categoryName={category.name}
      models={models}
      search={search}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
