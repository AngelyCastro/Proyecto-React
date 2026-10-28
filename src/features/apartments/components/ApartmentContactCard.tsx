import { Link } from "react-router-dom"
import type { Apartment } from "../types/Apartment"
interface ApartmentContactCardProps {
  apartment: Apartment
}

const ApartmentContactCard = ({ apartment }: ApartmentContactCardProps) => {
  return (
    <div className="detail-card">
      
      <p className="detail-card__label">Alquiler mensual</p>
      <p className="detail-card__price">
        USD {apartment.price.toLocaleString("en-US")}
        <span className="detail-card__period"> / mes</span>
      </p>

      <p className="detail-card__text">
        ¿Te interesa esta propiedad? Agenda una visita y un asesor te contactará.
      </p>

      {/* Query param ?propiedad=ID: el formulario de contacto la usa para prellenarse */}
      <Link
        to={`/contacto?propiedad=${apartment.id}`}
        className="btn btn--primary detail-card__cta"
      >
        Solicitar visita
      </Link>

      {/*<FavoriteButton apartmentId={apartment.id} apartmentName={apartment.name} showLabel />*/}
    </div>
  )
}

export default ApartmentContactCard
