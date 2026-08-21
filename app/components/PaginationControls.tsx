import PaginationButton from "@/app/components/PaginationButton";
export default function PaginationControls({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 1);
  const pages: number[] = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const showFirst = startPage > 1;
  const showLast = endPage < totalPages;

  return (
    <div className="flex justify-center gap-1">
      {showFirst && <PaginationButton page={1} label="<<" />}
      {pages.map((page) => (
        <PaginationButton
          key={page}
          page={page}
          isActive={page === currentPage}
        />
      ))}
      {showLast && <PaginationButton page={totalPages} label=">>" />}
    </div>
  );
}
