import ModelsBrowser from "@/app/components/ModelsBrowser";
import { notFound } from "next/navigation";

import { getModels, SortOption, getModelCount } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";
import { MODELS_PER_PAGE } from "@/lib/constants";
import type { CategoryPageProps } from "@/app/types";

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categoryName } = await params;
  const sort = (await searchParams)?.sort?.toLowerCase() || "";
  const q = (await searchParams)?.q?.toLowerCase() || "";
  const category = await getCategoryBySlug(categoryName);
  const page = Number((await searchParams).page) || 1;

  const modelsCount = await getModelCount({
    categorySlug: category.slug,
    search: q,
  });
  const totalPages = Math.ceil(modelsCount / MODELS_PER_PAGE);
  if (!category) return notFound();

  const models = await getModels({
    categorySlug: category.slug,
    sort: sort as SortOption | undefined,
    searchTerm: q,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });

  return (
    <ModelsBrowser
      categoryName={category.name}
      models={models}
      search={q}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
