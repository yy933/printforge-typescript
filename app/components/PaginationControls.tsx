import PaginationButton from "@/app/components/PaginationButton";
export default function PaginationControls({
  totalPages,
}: {
  totalPages: number;
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  console.log(pages);
  return (
    <div className="flex justify-center gap-1">
      {pages.map((page) => (
        <PaginationButton key={page} page={page} />
      ))}
    </div>
  );
}
