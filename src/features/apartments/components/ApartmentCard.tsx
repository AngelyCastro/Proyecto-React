import { Link } from "react-router-dom"
import type { Apartment } from "../types/Apartment"
import "../styles/ApartmentCard.css"
import FavoriteButton from "../../favorites/components/FavoriteButton";

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  return (
    <article className="apartment-card">
      <div className="apartment-card__media">
        <img
          className="apartment-card__image"
          src={apartment.image}
          alt={`Vista de ${apartment.name}`}
          loading="lazy"
        />

        <span className="apartment-card__badge">{apartment.location}</span>

        <FavoriteButton apartmentId={apartment.id} apartmentName={apartment.name} />
      </div>

      <div className="apartment-card__body">
        <h3 className="apartment-card__name">{apartment.name}</h3>

        <p className="apartment-card__description">{apartment.description}</p>

        <ul className="apartment-card__specs">
          <li className="apartment-card__spec">{apartment.bedrooms} hab.</li>
          <li className="apartment-card__spec">{apartment.bathrooms} baños</li>
          <li className="apartment-card__spec">{apartment.area} m²</li>
        </ul>

        <div className="apartment-card__footer">
          <p className="apartment-card__price">
            USD {apartment.price.toLocaleString("en-US")}
            <span className="apartment-card__period"> / mes</span>
          </p>

          <Link className="apartment-card__link" to={`/apartamentos/${apartment.id}`}>
            Ver detalle <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ApartmentCard