"use client";

import ModelsGrid from "@/app/components/ModelsGrid";
import { useTransition } from "react";
import type { Model } from "@/app/types";
import SearchForm from "@/app/components/SearchForm";
interface ModelsBrowserProps {
  models: Model[];
  search?: string;
  categoryName?: string;
}
export default function ModelsBrowser({ models, search, categoryName }: ModelsBrowserProps) {
 const [isPending, startTransition] = useTransition();

  return (
    <>
      <SearchForm q={search} />
      <ModelsGrid models={models} search={search} />
    </>
  );
}
