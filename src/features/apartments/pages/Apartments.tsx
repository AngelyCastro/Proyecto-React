import { useApartments } from "../hooks/useApartments"
import ApartmentList from "../components/ApartmentList"
import Loader from "../../shared/components/Loader"
import ErrorMessage from "../../shared/components/ErrorMessage"
import EmptyState from "../../shared/components/EmptyState"
import "../styles/Apartments.css"

const Apartments = () => {
  const { apartments, isLoading, error } = useApartments()

  const renderContent = () => {
    if (isLoading) return <Loader message="Cargando apartamentos..." />

    if (error) {
      return <ErrorMessage message={error} onRetry={() => window.location.reload()} />
    }

    if (apartments.length === 0) {
      return (
        <EmptyState
          title="Aún no hay apartamentos"
          message="Vuelve pronto, estamos preparando nuevas propiedades."
        />
      )
    }

    return <ApartmentList apartments={apartments} />
  }

  return (
    <section className="apartments container">
      <header className="apartments__header">
        <p className="eyebrow">Catálogo</p>
        <h1 className="apartments__title">Nuestros apartamentos</h1>
      </header>

      {renderContent()}
    </section>
  )
}

export default Apartments