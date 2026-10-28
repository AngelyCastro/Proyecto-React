import type { ChangeEvent } from "react"
import SearchBar from "../../shared/components/SearchBar"
import type { Filters } from "../types/Filters"
import "../styles/ApartmentFilters.css"

interface ApartmentFiltersProps {
  filters: Filters;
  locations: string[];
  onFiltersChange: (filters: Filters) => void;
  onReset: () => void;
}

const PRICE_OPTIONS = [3000, 5000, 7000, 9000]
const BEDROOM_OPTIONS = ["1", "2", "3", "4"]

const ApartmentFilters = ({ filters, locations, onFiltersChange, onReset }: ApartmentFiltersProps) => {
  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, searchQuery: value })
  }

  const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, ubicacion: event.target.value })
  }

  const handlePriceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, precioMax: Number(event.target.value) })
  }

  const handleBedroomsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, habitaciones: event.target.value })
  }

  return (
    <form className="apartment-filters" role="search" onSubmit={(event) => event.preventDefault()}>
      <div className="apartment-filters__search">
        <SearchBar
          value={filters.searchQuery}
          onChange={handleSearchChange}
          label="Buscar"
          placeholder="Nombre o ubicación..."
        />
      </div>

      <label className="apartment-filters__field">
        <span className="apartment-filters__label">Ubicación</span>
        <select className="apartment-filters__select" value={filters.ubicacion} onChange={handleLocationChange}>
          <option value="">Todas</option>
          {locations.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </label>

      <label className="apartment-filters__field">
        <span className="apartment-filters__label">Precio máximo</span>
        <select className="apartment-filters__select" value={filters.precioMax} onChange={handlePriceChange}>
          <option value={0}>Sin límite</option>
          {PRICE_OPTIONS.map((price) => (
            <option key={price} value={price}>USD {price.toLocaleString("en-US")}</option>
          ))}
        </select>
      </label>

      <label className="apartment-filters__field">
        <span className="apartment-filters__label">Habitaciones</span>
        <select className="apartment-filters__select" value={filters.habitaciones} onChange={handleBedroomsChange}>
          <option value="">Cualquiera</option>
          {BEDROOM_OPTIONS.map((bedrooms) => (
            <option key={bedrooms} value={bedrooms}>{bedrooms}+</option>
          ))}
        </select>
      </label>

      <button className="btn btn--dark apartment-filters__reset" type="button" onClick={onReset}>
        Limpiar filtros
      </button>
    </form>
  )
}

export default ApartmentFilters