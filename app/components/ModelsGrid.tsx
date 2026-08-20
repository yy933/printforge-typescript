import ModelCard from "@/app/components/ModelCard";
import SortControls from "@/app/components/SortControls";
import LoadingUI from "@/app/components/LoadingUI";
import NotFoundUI from "@/app/components/NotFoundUI";
import { ModelsGridProps, Model } from "@/app/types";

export default function ModelsGrid({
  models,
  categoryName,
  search,
  isPending,
}: ModelsGridProps) {
  let title = "3D Models";
  if (categoryName) {
    title = categoryName;
  } else if (search) {
    title = `Search results for "${search}"`;
  }
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <SortControls />
      </div>

      {isPending ? (
        <LoadingUI>Loading models...</LoadingUI>
      ) : models.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {models.map((model: Model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      ) : (
        <NotFoundUI
          title={`No search results for "${search}"`}
          subtitle="We can't find any models that match your search query"
          link_text="See all models"
          link_href="/3d-models"
        />
      )}
    </div>
  );
}
