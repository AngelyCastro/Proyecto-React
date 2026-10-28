import { Link } from "react-router-dom"
import { useApartments } from "../../apartments/hooks/useApartments"
import ApartmentList from "../../apartments/components/ApartmentList"
import Loader from "../../shared/components/Loader"
import ErrorMessage from "../../shared/components/ErrorMessage"
import EmptyState from "../../shared/components/EmptyState"
import "../styles/FeaturedApartments.css"

const FEATURED_LIMIT = 3

const FeaturedApartments = () => {
  const { featuredApartments, isLoading, error } = useApartments()

  // Solo los primeros 3 destacados, sin modificar el arreglo original
  const visibleApartments = featuredApartments.slice(0, FEATURED_LIMIT)

  return (
    <section className="featured" aria-labelledby="featured-title">
      <div className="container">
        <div className="featured__header">
          <div>
            <p className="eyebrow">Selección destacada</p>
            <h2 className="featured__title" id="featured-title">
              Residencias que enamoran
            </h2>
          </div>

          <Link className="featured__link" to="/apartamentos">
            Ver todos los apartamentos <span aria-hidden="true">→</span>
          </Link>
        </div>

        {isLoading && <Loader message="Cargando destacados..." />}

        {error && <ErrorMessage message={error} />}

        {!isLoading && !error && visibleApartments.length === 0 && (
          <EmptyState title="Pronto tendremos nuevas residencias destacadas" />
        )}

        {!isLoading && !error && visibleApartments.length > 0 && (
          <ApartmentList apartments={visibleApartments} />
        )}
      </div>
    </section>
  )
}

export default FeaturedApartments