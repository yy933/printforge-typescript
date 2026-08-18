import ModelsGrid from "@/app/components/ModelsGrid";
// import { getModels } from "@/app/utils/models";
import { getModels } from "@/lib/models";
import type { ModelsPageProps, Model } from "@/app/types";
import Form from "next/form";
import SearchForm from "@/app/components/SearchForm";

export default async function Page({ searchParams }: ModelsPageProps) {
  const { q } = (await searchParams) ?? {};
  const queryLower = q?.toLowerCase();
  const filteredModels = await getModels(queryLower);
  const title = q ? `Search results for "${q}"` : "3D Models";

  return (
    <>
      <SearchForm q={q} />
      <ModelsGrid title={title} models={filteredModels} />
    </>
  );
}
