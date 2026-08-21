import ModelsBrowser from "@/app/components/ModelsBrowser";
import { getModels, SortOption, getModelCount } from "@/lib/models";
import type { ModelsPageProps } from "@/app/types";
import { MODELS_PER_PAGE } from "@/lib/constants";

export default async function Page({ searchParams }: ModelsPageProps) {
  const q = (await searchParams).q?.toLowerCase() || "";
  const sort = (await searchParams).sort?.toLowerCase() || "";
  const page = Number((await searchParams).page) || 1;
  const modelCount = await getModelCount({ search: q });

  const totalPages = Math.ceil(modelCount / MODELS_PER_PAGE);
  const models = await getModels({
    searchTerm: q,
    sort: sort as SortOption | undefined,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });

  return (
    <ModelsBrowser
      models={models}
      search={q}
      modelsPerPage={MODELS_PER_PAGE}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
