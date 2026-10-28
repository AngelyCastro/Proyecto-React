import type { Apartment } from "../types/Apartment"

interface ApartmentInfoProps {
  apartment: Apartment
}

const ApartmentInfo = ({ apartment }: ApartmentInfoProps) => {

  return (
    <section className="detail-info" aria-labelledby="detail-title">
      <p className="eyebrow">{apartment.location}</p>
      <h1 className="detail-info__title" id="detail-title">{apartment.name}</h1>

      <dl className="detail-info__stats">
        <div className="detail-info__stat">
          <dt>Habitaciones</dt>
          <dd>{apartment.bedrooms}</dd>
        </div>
        <div className="detail-info__stat">
          <dt>Baños</dt>
          <dd>{apartment.bathrooms}</dd>
        </div>
        <div className="detail-info__stat">
          <dt>Área</dt>
          <dd>{apartment.area} m²</dd>
        </div>
      </dl>

      <h2 className="detail-section-title">Descripción</h2>
      <p className="detail-info__description">{apartment.description}</p>
    </section>
  )
}

export default ApartmentInfo
