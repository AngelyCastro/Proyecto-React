export interface FavoritesContextValue {
  favorites: number[]
  isFavorite: (id: number) => boolean
  toggleFavorite: (id: number) => void
  removeFavorite: (id: number) => void
  clearFavorites: () => void
}