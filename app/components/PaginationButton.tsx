"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface PaginationButtonProps {
  page: number;
  isActive: boolean;
}

export default function PaginationButton({
  page,
  isActive,
}: PaginationButtonProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  function handlePageChange() {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("page", page.toString());
    const url = `${pathname}?${urlSearchParams.toString()}`;
    router.push(url);
  }
  return (
    <button
      onClick={handlePageChange}
      className={`px-3 py-1.5 text-sm rounded-md border cursor-pointer transition-colors ${
        isActive
          ? "bg-orange-400 text-white border-orange-400 font-medium"
          : "border-gray-300 text-gray-700 hover:bg-gray-100"
      }`}
    >
      {page}
    </button>
  );
}
