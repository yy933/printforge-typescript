import PaginationButton from "@/app/components/PaginationButton";
export default function PaginationControls({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const isActive = (page: number) => page === currentPage; 
  return (
    <div className="flex justify-center gap-1">
      {pages.map((page) => (
        <PaginationButton key={page} page={page} isActive={isActive(page)} />
      ))}
    </div>
  );
}
