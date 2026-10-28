import { useState } from "react"
import { useApartments } from "../hooks/useApartments"
import { INITIAL_FILTERS, useApartmentFilters } from "../hooks/useApartmentFilters"
import { usePagination } from "../../shared/hooks/usePagination"
import type { Filters } from "../types/Filters"
import ApartmentFilters from "../components/ApartmentFilters"
import ApartmentList from "../components/ApartmentList"
import Pagination from "../../shared/components/Pagination"
import Loader from "../../shared/components/Loader"
import ErrorMessage from "../../shared/components/ErrorMessage"
import EmptyState from "../../shared/components/EmptyState"
import "../styles/Apartments.css"

const APARTMENTS_PER_PAGE = 5

const Apartments = () => {
  const { apartments, isLoading, error } = useApartments()
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS)

  const { filteredApartments, locations } = useApartmentFilters(apartments, filters)
  const { currentItems, currentPage, totalPages, goToPage } = usePagination(
    filteredApartments,
    APARTMENTS_PER_PAGE,
  )

  // Al cambiar un filtro se vuelve a la página 1
  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters)
    goToPage(1)
  }

  const handleReset = () => {
    handleFiltersChange(INITIAL_FILTERS)
  }

  const handlePageChange = (page: number) => {
    goToPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderContent = () => {
    if (isLoading) return <Loader message="Cargando apartamentos..." />

    if (error) {
      return <ErrorMessage message={error} onRetry={() => window.location.reload()} />
    }

    if (filteredApartments.length === 0) {
      return (
        <EmptyState
          title="No encontramos apartamentos"
          message="Prueba con otra búsqueda o quita algunos filtros."
        >
          <button className="btn btn--dark" type="button" onClick={handleReset}>
            Limpiar filtros
          </button>
        </EmptyState>
      )
    }

    return (
      <>
        <p className="apartments__count" aria-live="polite">
          {filteredApartments.length} de {apartments.length} apartamentos
        </p>

        <ApartmentList apartments={currentItems} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </>
    )
  }

  return (
    <section className="apartments container">
      <header className="apartments__header">
        <p className="eyebrow">Catálogo</p>
        <h1 className="apartments__title">Nuestros apartamentos</h1>
      </header>

      <ApartmentFilters
        filters={filters}
        locations={locations}
        onFiltersChange={handleFiltersChange}
        onReset={handleReset}
      />

      {renderContent()}
    </section>
  )
}

export default Apartments