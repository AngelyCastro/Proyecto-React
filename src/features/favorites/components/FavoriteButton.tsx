import type { MouseEvent } from "react"
import { useFavorites } from "../hooks/useFavorites"
import "../styles/FavoriteButton.css"

interface FavoriteButtonProps {
  apartmentId: number
  apartmentName: string
  showLabel?: boolean
}

const FavoriteButton = ({ apartmentId, apartmentName, showLabel = false }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(apartmentId)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    // Evita que el clic abra un enlace si el botón está dentro de uno
    event.preventDefault()
    event.stopPropagation()
    toggleFavorite(apartmentId)
  }

  const label = active
    ? `Quitar ${apartmentName} de favoritos`
    : `Guardar ${apartmentName} en favoritos`

  const classes = [
    "favorite-btn",
    active ? "favorite-btn--active" : "",
    showLabel ? "favorite-btn--labeled" : "",
  ].join(" ")

  return (
    <button
      type="button"
      className={classes}
      aria-pressed={active}
      aria-label={label}
      title={label}
      onClick={handleClick}
    >
      <svg className="favorite-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20.5s-7.5-4.6-9.6-9.4C.9 7.6 3.1 4 6.8 4c2.2 0 3.9 1.2 5.2 3 1.3-1.8 3-3 5.2-3 3.7 0 5.9 3.6 4.4 7.1-2.1 4.8-9.6 9.4-9.6 9.4z" />
      </svg>
      {showLabel && <span>{active ? "En favoritos" : "Guardar en favoritos"}</span>}
    </button>
  )
}

export default FavoriteButton
