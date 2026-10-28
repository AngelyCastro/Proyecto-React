import ApartmentCard from "./ApartmentCard"
import type { Apartment } from "../types/Apartment"
import "../styles/ApartmentList.css"

interface ApartmentListProps {
  apartments: Apartment[];
}

const ApartmentList = ({ apartments }: ApartmentListProps) => {
  return (
    <div className="apartment-list">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  )
}

export default ApartmentList