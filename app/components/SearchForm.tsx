import Form from "next/form";
interface SearchFormProps {
  q?: string;
}
export default function SearchForm({ q }: SearchFormProps) {
  return (
    <Form action="/3d-models" className="w-full px-4 md:max-w-xl">
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
