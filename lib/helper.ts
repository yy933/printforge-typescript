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
  } else if (
    rawSort === "alpha" ||
    rawSort === "popular" ||
    rawSort === "recent"
  ) {
    sort = rawSort;
  } else {
    sort = null;
  }
  return { search, sort, page };
}
