import ModelsGrid from "@/app/components/ModelsGrid";
// import { getModels } from "@/app/utils/models";
import { getModels } from "@/lib/models";
import type { ModelsPageProps, Model } from "@/app/types";
import Form from "next/form";

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
      <Form action="/3d-models" className="w-full px-4 md:max-w-xl">
        <input
          type="search"
          name="q"
          placeholder="Search 3D models..."
          autoComplete="off"
          defaultValue={q}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        ></input>
      </Form>
      <ModelsGrid title="3D Models" models={filteredModels} />
    </>
  );
}
