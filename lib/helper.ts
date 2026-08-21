export function getQueryParams(searchParams: {
  search?: string;
  sort?: string;
  page?: string;
}) {
  const search = searchParams.search?.toLowerCase() || "";
  const sort = searchParams.sort?.toLowerCase() || "";

  const rawPage = searchParams.page;
  let page;
  if (rawPage === undefined) {
    page = 1;
  } else {
    const parsedPage = Number(rawPage);
    page = Number.isNaN(parsedPage) ? 0 : parsedPage;
  }
  return { search, sort, page };
}
