import { useCallback, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"
import { FavoritesContext } from "../hooks/useFavorites"
import type { FavoritesContextValue } from "../types/FavoritesContext"

const STORAGE_KEY = "amarea:favorites"

// Lee los favoritos guardados; si no hay nada o el dato está dañado, devuelve []
const readStoredFavorites = (): number[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    const parsed: unknown = JSON.parse(stored)
    return Array.isArray(parsed)
      ? parsed.filter((id): id is number => typeof id === "number")
      : []
  } catch {
    return []
  }
}

interface FavoritesProviderProps {
  children: ReactNode
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  // Inicialización perezosa: localStorage se lee una sola vez, al montar
  const [favorites, setFavorites] = useState<number[]>(readStoredFavorites)

  // Cada vez que cambia la lista, se guarda en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      // Sin almacenamiento disponible: los favoritos funcionan solo en memoria
    }
  }, [favorites])

  const isFavorite = useCallback(
    (id: number) => favorites.includes(id),
    [favorites],
  )

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    )
  }, [])

  const removeFavorite = useCallback((id: number) => {
    setFavorites((prev) => prev.filter((favId) => favId !== id))
  }, [])

  const clearFavorites = useCallback(() => setFavorites([]), [])

  const value = useMemo<FavoritesContextValue>(
    () => ({ favorites, isFavorite, toggleFavorite, removeFavorite, clearFavorites }),
    [favorites, isFavorite, toggleFavorite, removeFavorite, clearFavorites],
  )

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  )
}