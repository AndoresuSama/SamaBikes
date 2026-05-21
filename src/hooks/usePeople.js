import { useEffect, useState } from 'react';
import { PEOPLE_JSON_URL, SIMULATED_DELAYS } from '../utils/catalog';
import { withMinimumDelay } from '../utils/delay';

export function usePeople() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadTeam = async () => {
      try {
        const people = await withMinimumDelay(async () => {
          const response = await fetch(PEOPLE_JSON_URL);

          if (!response.ok) {
            throw new Error('No se pudo cargar el equipo de ventas.');
          }

          return response.json();
        }, SIMULATED_DELAYS.PEOPLE);

        if (isMounted) {
          setTeam(people);
          setError(null);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message || 'Error al cargar asesores.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadTeam();

    return () => {
      isMounted = false;
    };
  }, []);

  return { team, loading, error };
}
