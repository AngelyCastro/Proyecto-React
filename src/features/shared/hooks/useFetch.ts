import { useEffect, useState } from "react";

// Lo que devuelve el hook, para cualquier tipo de dato T
export interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // hace que no se actualice todo el componente si ya se utilizo
    let ignore = false;

    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        const result: T = await response.json();

        if (!ignore) setData(result);
      } catch (error) {
        if (!ignore) {
          setError(error instanceof Error ? error.message : "Ocurrió un error");
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    getData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, isLoading, error };
}