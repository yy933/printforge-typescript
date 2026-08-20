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
}
export default function ModelsBrowser({
  models,
  search,
  categoryName,
}: ModelsBrowserProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <BrowserProvider value={{ isPending, startTransition }}>
      <PaginationControls />
      <SearchForm q={search} />
      <ModelsGrid
        isPending={isPending}
        models={models}
        search={search}
        categoryName={categoryName}
        startTransition={startTransition}
      />
    </BrowserProvider>
  );
}
