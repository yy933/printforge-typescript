import ModelsGrid from "@/app/components/ModelsGrid";
// import { getModels } from "@/app/utils/models";
import { getModels } from "@/lib/models";
import type { ModelsPageProps, Model } from "@/app/types";
import SearchForm from "@/app/components/SearchForm";

export default async function Page({ searchParams }: ModelsPageProps) {
  const { q } = (await searchParams) ?? {};
  const queryLower = q?.toLowerCase();
  const filteredModels = await getModels(queryLower);

  return (
    <>
      <SearchForm q={q} />
      <ModelsGrid models={filteredModels} search={q} />
    </>
  );
}
