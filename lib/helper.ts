export function getQueryParams(searchParams: {
  search?: string;
  sort?: string;
  page?: string;
}) {
  const search = searchParams.search?.toLowerCase() || "";
  const sort = searchParams.sort?.toLowerCase() || "";
  const page = Number(searchParams.page) || 1;
  return { search, sort, page };
}
