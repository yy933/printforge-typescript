import SortButton from "./SortButton";
/*  
CHALLENGE  
Update the buttons so each one pushes a different sort value:

- A-Z → sort=alpha  
- Popular → sort=popular  
- Most Recent → sort=recent  

You can pass the sort value into your handler however you like
*/


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
