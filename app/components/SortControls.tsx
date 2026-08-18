/*  
CHALLENGE  
- Create a <SortButton /> component  
- Move the existing <button> into that component  
- Use `children` so each button can display different text  
- Replace the three buttons with your new <SortButton /> component  
*/
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
