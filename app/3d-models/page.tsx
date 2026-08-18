import ModelsGrid from "@/app/components/ModelsGrid";
// import { getModels } from "@/app/utils/models";
import { getModels } from "@/lib/models";
import type { ModelsPageProps, Model } from "@/app/types";
import Form from "next/form";
import SearchForm from "@/app/components/SearchForm";

export default async function Page({ searchParams }: ModelsPageProps) {
  const models = await getModels();
  const { q } = (await searchParams) ?? {};

  const queryLower = q?.toLowerCase();
  const filteredModels = queryLower
    ? models.filter((model: Model) => {
        const nameMatch = model.name?.toLowerCase().includes(queryLower);
        const descriptionMatch = model.description
          ?.toLowerCase()
          .includes(queryLower);

        return nameMatch || descriptionMatch;
      })
    : models;

  return (
    <>
      <SearchForm q={q} />
      <ModelsGrid title="3D Models" models={filteredModels} />
    </>
  );
}
