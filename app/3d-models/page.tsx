import Link from "next/link";
import { getAllModels } from "@/app/lib/models";
import type { Model } from "@/app/types";
export default async function ModelsPage() {
  const models = await getAllModels();
  return models.map((model: Model) => (
    <Link href={`/3d-models/${model.id.toString()}`}>
      <p key={model.id}>{model.name}</p>
    </Link>
  ));
}
