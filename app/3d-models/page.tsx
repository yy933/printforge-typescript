import ModelsBrowser from "@/app/components/ModelsBrowser";
import { getModels, SortOption, getModelCount } from "@/lib/models";
import type { ModelsPageProps } from "@/app/types";

export default async function Page({ searchParams }: ModelsPageProps) {
  const q = (await searchParams).q?.toLowerCase() || "";
  const sort = (await searchParams).sort?.toLowerCase() || "";
  const page = Number((await searchParams).page) || 1;
  const modelCount = await getModelCount({ search: q });

  const modelsPerPage = 6;
  const totalPages = Math.ceil(modelCount / modelsPerPage);
  const models = await getModels({
    searchTerm: q,
    sort: sort as SortOption | undefined,
    page,
    modelsPerPage,
  });

  return (
    <ModelsBrowser
      models={models}
      search={q}
      page={page}
      modelsPerPage={modelsPerPage}
      totalPages={totalPages}
    />
  );
}
