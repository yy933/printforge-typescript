import NotFoundUI from "@/app/components/NotFoundUI";
export default function NotFound() {
  return (
    <NotFoundUI
      title="Page Not Found"
      subtitle="Sorry, we couldn't find the requested page!"
      link_text="Go Back Home"
      link_href="/"
    />
  );
}
