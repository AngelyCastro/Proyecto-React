import { Link, useParams } from "react-router-dom"
import ApartmentAmenities from "../components/ApartmentAmenities"
import ApartmentGallery from "../components/ApartmentGallery"
import ApartmentInfo from "../components/ApartmentInfo"
import ApartmentContactCard from "../components/ApartmentContactCard"
import ErrorMessage from "../../shared/components/ErrorMessage"
import Loader from "../../shared/components/Loader"
import { useEffect, useMemo } from "react"
import { useApartments } from "../hooks/useApartments"
import "../styles/ApartmentDetail.css"

const ApartmentDetail = () => {
 // El id llega como texto desde la URL: /apartamentos/:id
  const { id } = useParams<{ id: string }>()
  const { apartments, isLoading, error } = useApartments()

  const apartment = useMemo(
    () => apartments.find((item) => item.id === Number(id)),
    [apartments, id],
  )

  // Al entrar a otro apartamento, la página empieza desde arriba
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (isLoading) return <Loader message="Cargando apartamento..." />

  if (error) {
    return <ErrorMessage message={error} onRetry={() => window.location.reload()} />
  }

  if (!apartment) {
    return (
      <section className="detail-missing container">
        <p className="eyebrow">Propiedad no encontrada</p>
        <h1>No existe un apartamento con el código “{id}”</h1>
        <p>Puede que la propiedad ya no esté disponible o que el enlace sea incorrecto.</p>
        <Link to="/apartamentos" className="btn btn--primary">
          Volver al catálogo
        </Link>
      </section>
    )
  }

  return (
    <article className="detail container">
      <Link to="/apartamentos" className="detail__back">
        <span aria-hidden="true">←</span> Volver al catálogo
      </Link>

      <ApartmentGallery apartment={apartment} />

      <div className="detail__layout">
        <div className="detail__main">
          <ApartmentInfo apartment={apartment} />
          <ApartmentAmenities amenities={apartment.amenities} />
        </div>

        <aside className="detail__aside">
          <ApartmentContactCard apartment={apartment} />
        </aside>
      </div>
    </article>
  )
}

export default ApartmentDetail
