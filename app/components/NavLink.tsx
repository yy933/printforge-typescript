import Link from "next/link";
import type { NavLinkProps } from "@/app/types";

export default function NavLink({ href, children, isActive = false, className  }: NavLinkProps) {
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
