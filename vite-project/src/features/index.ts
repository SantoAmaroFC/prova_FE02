import { useState } from "react";
 import { usePokemon } from "../features/pokemon/hooks/usePokemon"; 
 import { PokemonItem } from "../../pokemon/PokemonItem";
  export function PokemonList() { const { pokemons, loading, error, loadPokemons } = usePokemon();
   const [search, setSearch] = useState("");
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()) || String(pokemon.id) === search );
     return ( <main className="min-h-screen bg-gray-100 p-6"> <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow"> <h1 className="text-3xl font-bold text-center mb-6"> Pokédex </h1> <input type="text" placeholder="Buscar Pokémon por nome ou número..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-red-400" /> <div>