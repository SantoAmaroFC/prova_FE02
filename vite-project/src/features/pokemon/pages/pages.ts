import { api } from "../API/api";
 import type { Pokemon, PokemonListResponse } from "../types/pokemons";
  export const getPokemons = async ( offset: number = 0, limit: number = 20 ):
   Promise<Pokemon[]> => { const response = await fetch( `${api.baseURL}/pokemon?limit=${limit}
    &offset=${offset}` );
     if (!response.ok) { throw new Error("Erro ao buscar os Pokémon"); 

     } 
    const data: PokemonListResponse = await response.json();
     const pokemons = await Promise.all( data.results.map(async (pokemon) => { const response = await fetch(pokemon.url);
         if (!response.ok) { throw new Error("Erro ao buscar detalhes do Pokémon"); 

         } return response.json() as Promise<Pokemon>; }) ); return pokemons; };