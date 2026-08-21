import { redirect } from "next/navigation";
import ModelsBrowser from "@/app/components/ModelsBrowser";
import { getModels, SortOption, getModelCount } from "@/lib/models";
import type { ModelsPageProps } from "@/app/types";
import { MODELS_PER_PAGE } from "@/lib/constants";
import { getQueryParams } from "@/lib/helper";

/*
CHALLENGE - Redirect out-of-bounds pages

1. Import `redirect` from `next/navigation`

2. In `3d-models/page.tsx`, check whether the current page is out of bounds:
   - less than 1
   - greater than the total number of pages

3. If the page is out of bounds, redirect the user back to:
   /3d-models
*/
export default async function Page({ searchParams }: ModelsPageProps) {
  const { search, sort, page } = getQueryParams(await searchParams);

  const models = await getModels({
    searchTerm: search,
    sort: sort as SortOption | undefined,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });
  const modelCount = await getModelCount({ search });
  const totalPages = Math.ceil(modelCount / MODELS_PER_PAGE);
  if (page < 1 || page > totalPages) return redirect("/3d-models");
  return (
    <ModelsBrowser
      models={models}
      search={search}
      modelsPerPage={MODELS_PER_PAGE}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
