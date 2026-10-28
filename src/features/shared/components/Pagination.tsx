import "../styles/Pagination.css"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  // si hay una sola pagina enotnces no hace falta poner la paginacion 
  if (totalPages <= 1) return null

  // [1, 2, 3, 4]
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav className="pagination" aria-label="Paginación del catálogo">
      <button
        className="pagination__button"
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        ←
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className="pagination__button"
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination__button"
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
      >
        →
      </button>
    </nav>
  )
}

export default Pagination