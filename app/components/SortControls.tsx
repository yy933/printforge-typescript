import SortButton from "./SortButton";
export default function SortControls() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Sort by:</span>
      <SortButton>A-Z</SortButton>
      <SortButton>Popular</SortButton>
      <SortButton>Most Recent</SortButton>
    </div>
  );
}
