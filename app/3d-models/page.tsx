import ModelsBrowser from "@/app/components/ModelsBrowser";
import { getModels, SortOption } from "@/lib/models";
import type { ModelsPageProps } from "@/app/types";
/*  
CHALLENGE  

Here in `page.tsx`:
1. Add `page` to the `searchParams` type.  
2. Read `page` from `searchParams`.  
3. Clean it up like we did with `search` and `sort`.  
   But remember, `page` needs to be a number.  
4. If there is no page in the URL, default to page 1.  
5. Pass `page` and `modelsPerPage` into `getModels()`.  

Then, in lib/models.ts:  
6. Update `getModels()` so it accepts `page` and
   `modelsPerPage` in its object argument.  
   
*/
export default async function Page({ searchParams }: ModelsPageProps) {
  const q = (await searchParams).q?.toLowerCase() || "";
  const sort = (await searchParams).sort?.toLowerCase() || "";
  const page = Number((await searchParams).page) || 1;

  const modelsPerPage = 12;
  const models = await getModels({
    searchTerm: q,
    sort: sort as SortOption | undefined,
    page,
    modelsPerPage,
  });

  return (
    <ModelsBrowser
      models={models}
      search={q}
      page={page}
      modelsPerPage={modelsPerPage}
    />
  );
}
