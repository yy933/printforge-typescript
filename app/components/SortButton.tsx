"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface SortButtonProps {
  sort: string;
  children: React.ReactNode;
}
export default function SortButton({
  sort = "alpha",
  children,
}: SortButtonProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isActive = searchParams.get("sort") === sort;
  function handleSort() {
    const url = `${pathname}?sort=${sort}`;
    router.push(url);
  }
  return (
    <button
      onClick={handleSort}
      className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-800 ${isActive ? "text-white bg-orange-400 border-orange-400" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
    >
      {children}
    </button>
  );
}
