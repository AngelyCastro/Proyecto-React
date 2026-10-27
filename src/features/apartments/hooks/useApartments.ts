import { useMemo } from "react";
import { useFetch } from "../../shared/hooks/useFetch";
import type { Apartment } from "../types/Apartment";

interface UseApartmentsResult {
  apartments: Apartment[];
  featuredApartments: Apartment[];
  isLoading: boolean;
  error: string | null;
}

export function useApartments(): UseApartmentsResult {
  const { data, isLoading, error } = useFetch<Apartment[]>("/data/apartments.json");

  const apartments = useMemo(() => data ?? [], [data]);

  // solo los que estan en true en el json
  const featuredApartments = useMemo(
    () => apartments.filter((apartment) => apartment.featured),
    [apartments],
  );

  return { apartments, featuredApartments, isLoading, error };
}