import type { CategoryNamePageProps } from "@/app/types";

export default async function CategoryNamePage({
  params,
}: CategoryNamePageProps) {
  const { categoryName } = await params;
  

  return (
    <div>
      <h1>{categoryName}</h1>
    </div>
  )
}
