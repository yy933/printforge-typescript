import ModelsGrid from "@/app/components/ModelsGrid";
// import { getModels } from "@/app/utils/models";
import { getModels, SortOption } from "@/lib/models";
import type { ModelsPageProps } from "@/app/types";
import SearchForm from "@/app/components/SearchForm";

export default async function Page({ searchParams }: ModelsPageProps) {
  const { q, sort } = (await searchParams) ?? {};
 

  const models = await getModels({
    searchTerm: q,
    sort: sort as SortOption | undefined,
  });

  return (
    <>
      <SearchForm q={q} />
      <ModelsGrid models={models} search={q} />
    </>
  );
}