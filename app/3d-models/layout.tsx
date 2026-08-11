import CategoryNavbar from "../components/CategoryNavbar";

export default function ModelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CategoryNavbar />

      <main>{children}</main>
    </div>
  );
}
