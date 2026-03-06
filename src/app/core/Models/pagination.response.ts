export interface PaginationResponse<T> {
  data: Array<T>;
  meta: {
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}
