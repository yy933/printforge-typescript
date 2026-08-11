
import Link from "next/link";
import { getAllCategories } from "@/app/lib/categories";

export default function CategoryNavbar() {
  const categories = getAllCategories();

  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200 py-3 px-6">
      <ul className="flex items-center gap-4 text-sm font-medium text-gray-600">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/3d-models/categories/${category.slug}`}
              className="hover:text-black"
            >
              {category.displayName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
