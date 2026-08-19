import ModelsBrowser from "@/app/components/ModelsBrowser";
import { getModels, SortOption } from "@/lib/models";
import type { ModelsPageProps } from "@/app/types";

export default async function Page({ searchParams }: ModelsPageProps) {
  const { q, sort } = (await searchParams) ?? {};

  const models = await getModels({
    searchTerm: q,
    sort: sort as SortOption | undefined,
  });

  return <ModelsBrowser models={models} q={q} />;
}
