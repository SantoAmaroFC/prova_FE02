import { useCallback, useEffect, useState } from "react";
 import type { Pokemon } from "../types/pokemons"; 
 import { getPokemons } from "../pages/pages"; 
 export function usePokemon() { 
    const [pokemons, setPokemons] = useState<Pokemon[]>([]); 
    const [loading, setLoading] = useState(false);
     const [error, setError] = useState("");
      const [offset, setOffset] = useState(0); const loadPokemons = useCallback(async () => { try { setLoading(true);
         setError(""); 
         const data = await getPokemons(offset); setPokemons((prev) => [...prev, ...data]); 
         setOffset((prev) => prev + 20); } catch (error) { setError("Não foi possível carregar os Pokémon.");

          } finally { setLoading(false); } }, [offset]);
           useEffect(() => { loadPokemons(); }, []);
            return { pokemons, loading, error, loadPokemons, }; }