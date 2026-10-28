
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { useApartments } from "../../apartments/hooks/useApartments"
import ApartmentList from "../../apartments/components/ApartmentList"
import Loader from "../../shared/components/Loader"
import ErrorMessage from "../../shared/components/ErrorMessage"
import EmptyState from "../../shared/components/EmptyState"
import { useFavorites } from "../hooks/useFavorites"
import "../styles/Favorites.css"

const Favorites = () => {
  const { apartments, isLoading, error } = useApartments()
  const { favorites, clearFavorites } = useFavorites()

  // Se calcula una lista nueva; no se modifica el arreglo original
  const favoriteApartments = useMemo(
    () => apartments.filter((apartment) => favorites.includes(apartment.id)),
    [apartments, favorites],
  )

  const count = favoriteApartments.length

  const renderContent = () => {
    if (isLoading) return <Loader message="Cargando tus favoritos..." />

    if (error) {
      return <ErrorMessage message={error} onRetry={() => window.location.reload()} />
    }

    if (count === 0) {
      return (
        <EmptyState
          title="Aún no tienes favoritos"
          message="Toca el corazón de cualquier apartamento para guardarlo aquí y compararlo después."
        >
          <Link className="btn btn--primary" to="/apartamentos">
            Explorar apartamentos
          </Link>
        </EmptyState>
      )
    }

    return <ApartmentList apartments={favoriteApartments} />
  }

  return (
    <section className="favorites container">
      <header className="favorites__header">
        <div>
          <p className="eyebrow">Tu selección</p>
          <h1 className="favorites__title">Favoritos</h1>
          {!isLoading && !error && (
            <p className="favorites__count" aria-live="polite">
              {count === 1 ? "1 propiedad guardada" : `${count} propiedades guardadas`}
            </p>
          )}
        </div>

        {count > 0 && (
          <button type="button" className="btn btn--dark" onClick={clearFavorites}>
            Vaciar favoritos
          </button>
        )}
      </header>

      {renderContent()}
    </section>
  )

}

export default Favorites
