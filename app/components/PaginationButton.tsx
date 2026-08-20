"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface PaginationButtonProps {
  page: number;
}

export default function PaginationButton({ page }: PaginationButtonProps) {
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
    <button onClick={handlePageChange} className="px-3 py-1.5 text-sm rounded-md border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100">
      {page}
    </button>
  );
}
