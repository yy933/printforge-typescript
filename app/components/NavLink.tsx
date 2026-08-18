import Link from "next/link";
import type { NavLinkProps } from "@/app/types";

export default function NavLink({ href, children, isActive = false, className }: NavLinkProps) {
  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-accent ${isActive ? "text-orange-accent font-bold" : "text-gray-700"} ${className}`}
      >
        {children}
      </Link>
    </li>
  );
}


/*  
CHALLENGE - Fix the "All" link active state
  
Right now, the "All" link is always marked as active.ß
  
We need a way for some links to only be active on an exact match,
while others can stay active for nested routes.
  
Update `NavLink` so that it can handle both of these cases.
  
Then, use that behaviour to fix the "All" link.

// Hint: not every link should use the same "active" check
*/
