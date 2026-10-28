import type { Apartment } from "../types/Apartment"

interface ApartmentGalleryProps {
  apartment: Apartment
}

const ApartmentGallery = ({ apartment }: ApartmentGalleryProps) => {
  return (
    <figure className="detail-gallery">
      <img className="detail-gallery__image" src={apartment.image} alt={`Vista principal de ${apartment.name}`} />
    </figure>
  )
}

export default ApartmentGallery
