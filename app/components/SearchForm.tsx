"use client";
import Form from "next/form";
import { usePathname, useRouter } from "next/navigation";
import { useBrowserContext } from "@/app/context/BrowserContext";
interface SearchFormProps {
  q?: string;
}

export default function SearchForm({ q }: SearchFormProps) {
  const { startTransition } = useBrowserContext();
  const router = useRouter();
  const pathname = usePathname();
  function handleSearch(formData: FormData) {
    const search = formData.get("q")?.toString().trim() ?? "";
    const url = search
      ? `${pathname}?q=${encodeURIComponent(search)}`
      : pathname;
    startTransition(() => {
      router.push(url);
    });
  }

  return (
    <Form action={handleSearch} className="w-full px-4 md:max-w-xl">
      <input
        type="search"
        name="q"
        placeholder="Search 3D models..."
        autoComplete="off"
        defaultValue={q}
        className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
      ></input>
    </Form>
  );
}
