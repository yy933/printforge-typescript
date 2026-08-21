export function getQueryParams(searchParams: {
  search?: string;
  sort?: string;
  page?: string;
}) {
  const search = searchParams.search?.toLowerCase() || "";

  const rawPage = searchParams.page;
  let page;
  if (rawPage === undefined) {
    page = 1;
  } else {
    const parsedPage = Number(rawPage);
    page = Number.isNaN(parsedPage) ? 0 : parsedPage;
  }

  const rawSort = searchParams.sort?.toLowerCase();
  let sort;
  if (rawSort === undefined) {
    sort = "";
  } else {
    sort = ["alpha", "popular", "recent"].includes(rawSort) ? rawSort : null;
  }
  return { search, sort, page };
}
