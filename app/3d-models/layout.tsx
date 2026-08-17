import CategoryNavbar from "../components/CategoryNavbar";
import { getCategories } from "@/lib/categories";
export default async function ModelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CategoryNavbar categories={categories} />
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
