"use client";
import Link from "next/link";
import { getAllCategories } from "@/app/lib/categories";
import { usePathname } from "next/navigation";

export default function CategoryNavbar() {
  const categories = getAllCategories();
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200 py-3 px-6">
      <ul className="flex items-center gap-4 text-sm font-medium text-gray-600">
        {categories.map((category) => {
          const href = `/3d-models/categories/${category.slug}`;
          const isActive = pathname === href;
          return (
            <li key={category.slug}>
              <Link
                href={href}
                className={`transition-colors hover:text-black ${
                  isActive ? "is-active" : "text-gray-500"
                }`}
              >
                {category.displayName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
