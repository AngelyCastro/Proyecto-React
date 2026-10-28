import { useMemo, useState } from "react";

interface UsePaginationResult<T> {
  currentItems: T[];
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

export function usePagination<T>(items: T[], itemsPerPage = 5): UsePaginationResult<T> {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  // si la lista llega a ser muy pequeña que nuca se quede sin una pagina
  const currentPage = Math.min(page, totalPages);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const goToPage = (newPage: number) => {
    setPage(Math.min(Math.max(1, newPage), totalPages));
  };

  return { currentItems, currentPage, totalPages, goToPage };
}