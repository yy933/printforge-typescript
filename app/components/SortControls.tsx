import SortButton from "./SortButton";

export default function SortControls() {
  const sortMap = {
    alpha: "A-Z",
    popular: "Popular",
    recent: "Most Recent",
  }
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Sort by:</span>
      {Object.entries(sortMap).map(([sort, label]) => (
        <SortButton key={sort} sort={sort}>
          {label}
        </SortButton>
      ))}
    </div>
  );
}
