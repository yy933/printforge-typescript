import ModelsBrowser from "@/app/components/ModelsBrowser";
import { notFound } from "next/navigation";

import { getModels, SortOption, getModelCount } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";
import type { CategoryPageProps } from "@/app/types";
/*  
CHALLENGE - Add pagination to the category page  
 
PART 2: Update category/page.tsx  
  
4. Grab `page` from the URL using `searchParams`.  
  
5. Set `modelsPerPage`.  
  
6. Use `getModelCount()` to determine `totalPages`.  
Make sure you pass in both:  
- search  
- categorySlug  
  
4. Update the call to `getModels()` so it receives:  
- page  
- modelsPerPage  
  
5. Pass `totalPages` and `currentPage` into `ModelsBrowser`.  
  
Don't worry about any repeated code right now.  
We'll clean that up later.  
*/

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categoryName } = await params;
  const sort = (await searchParams)?.sort?.toLowerCase() || "";
  const q = (await searchParams)?.q?.toLowerCase() || "";
  const category = await getCategoryBySlug(categoryName);
  const page = Number((await searchParams).page) || 1
  const modelsPerPage = 6
  const modelsCount = await getModelCount({ categorySlug: category.slug, search: q })
  const totalPages = Math.ceil(modelsCount / modelsPerPage)
  if (!category) return notFound();
 
  const models = await getModels({
    categorySlug: category.slug,
    sort: sort as SortOption | undefined,
    searchTerm: q,
    page,
    modelsPerPage
  });

  return <ModelsBrowser categoryName={category.name} models={models} search={q} totalPages={totalPages} currentPage={page}/>;
}
