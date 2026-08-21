"use client";

import ModelsGrid from "@/app/components/ModelsGrid";
import { useTransition } from "react";
import { BrowserProvider } from "@/app/context/BrowserContext";
import type { Model } from "@/app/types";
import SearchForm from "@/app/components/SearchForm";
import PaginationControls from "@/app/components/PaginationControls";
interface ModelsBrowserProps {
  models: Model[];
  search?: string;
  categoryName?: string;
  page: number;
  modelsPerPage?: number;
  totalPages: number;
  currentPage: number;
}
export default function ModelsBrowser({
  models,
  search,
  categoryName,
  totalPages,
  currentPage
}: ModelsBrowserProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <BrowserProvider value={{ isPending, startTransition }}>
      <SearchForm q={search} />
      <ModelsGrid
        isPending={isPending}
        models={models}
        search={search}
        categoryName={categoryName}
        startTransition={startTransition}
      />
      <PaginationControls totalPages={totalPages} currentPage={currentPage} />
    </BrowserProvider>
  );
}
/*
CHALLENGE - Active PaginationButtons
1. Accept the `currentPage` prop  
2. Pass `currentPage` down into `PaginationControls`  
3. In `PaginationControls`, compare each page number to `currentPage`  
4. Pass an `isActive` prop into each `PaginationButton`  
5. In `PaginationButton`, use `isActive` to apply active styling  
  
The active page button should use the same orange styling pattern as our active sort buttons.  
*/
