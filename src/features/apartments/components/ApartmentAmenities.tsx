interface ApartmentAmenitiesProps {
  amenities: string[]
}

const ApartmentAmenities = ({ amenities }: ApartmentAmenitiesProps) => {
  return (
     <section className="detail-amenities" aria-labelledby="amenities-title">
      <h2 className="detail-section-title" id="amenities-title">Amenidades</h2>

      {amenities.length === 0 ? (
        <p>Esta propiedad no tiene amenidades registradas.</p>
      ) : (
        <ul className="detail-amenities__list">
          {amenities.map((amenity) => (
            <li key={amenity} className="detail-amenities__item">
              {amenity}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ApartmentAmenities
