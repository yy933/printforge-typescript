interface PaginationButtonProps {
  page: number;
}
export default function PaginationButton({ page }: PaginationButtonProps) {
  return (
    <button className="px-3 py-1.5 text-sm rounded-md border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100">
      {page}
    </button>
  );
}
