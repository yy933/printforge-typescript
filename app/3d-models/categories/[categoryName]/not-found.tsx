import NotFoundUI from "@/app/components/NotFoundUI";
export default function NotFound() {
  return (
    <NotFoundUI
      title="Category Not Found"
      subtitle="We can't find the requested category"
      link_text="See all categories"
      link_href="/3d-models"
    />
  );
}
