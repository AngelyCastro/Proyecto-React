import { useMemo } from "react";
import type { Apartment } from "../types/Apartment";
import type { Filters } from "../types/Filters";

// Estos son los valores con lo que la pagina inicia
export const INITIAL_FILTERS: Filters = {
  searchQuery: "",
  ubicacion: "",
  precioMax: 0,
  habitaciones: "",
};

// Pasa a minúsculas y quita tildes
const normalize = (text: string): string =>
  text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

interface UseApartmentFiltersResult {
  filteredApartments: Apartment[];
  locations: string[];
}

export function useApartmentFilters(
  apartments: Apartment[],
  filters: Filters,
): UseApartmentFiltersResult {
  // filter() devuelve un arreglo nuevo, el original nunca se modifica
  const filteredApartments = useMemo(() => {
    const query = normalize(filters.searchQuery.trim());
    const minBedrooms = Number(filters.habitaciones);

    return apartments.filter((apartment) => {
      const matchesSearch =
        query === "" ||
        normalize(apartment.name).includes(query) ||
        normalize(apartment.location).includes(query);

      const matchesLocation =
        filters.ubicacion === "" || apartment.location === filters.ubicacion;

      const matchesPrice =
        filters.precioMax === 0 || apartment.price <= filters.precioMax;

      const matchesBedrooms =
        filters.habitaciones === "" || apartment.bedrooms >= minBedrooms;

      return matchesSearch && matchesLocation && matchesPrice && matchesBedrooms;
    });
  }, [apartments, filters]);

  // Ubicaciones sin repetir, en orden alfabético, para el <select>
  const locations = useMemo(
    () =>
      [...new Set(apartments.map((apartment) => apartment.location))].sort((a, b) =>
        a.localeCompare(b, "es"),
      ),
    [apartments],
  );

  return { filteredApartments, locations };
}