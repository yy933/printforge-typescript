import ModelsBrowser from "@/app/components/ModelsBrowser";
import { getModels, SortOption, getModelCount } from "@/lib/models";
import type { ModelsPageProps } from "@/app/types";
import { MODELS_PER_PAGE } from "@/lib/constants";
import { getQueryParams } from "@/lib/helper";

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
