import PaginationButton from "@/app/components/PaginationButton";
export default function PaginationControls() {
  return (
    <div className="flex justify-center gap-1">
      <PaginationButton page={1} />
      <PaginationButton page={2} />
      <PaginationButton page={3} />
      <PaginationButton page={4} />
      <PaginationButton page={5} />
    </div>
  );
}
