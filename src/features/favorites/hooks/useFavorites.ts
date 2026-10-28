import { createContext, useContext } from "react"
import type { FavoritesContextValue } from "../types/FavoritesContext"

// El contexto se crea en este archivo .ts para que FavoritesContext.tsx
// solo exporte el componente Provider (así lo pide la regla react-refresh del lint)
export const FavoritesContext = createContext<FavoritesContextValue | null>(null)

export const useFavorites = (): FavoritesContextValue => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de <FavoritesProvider>")
  }
  return context
}