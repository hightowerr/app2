"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemon();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-opacity-90">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-200 tracking-tight">
        Pokémon Explorer
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-white"></div>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pokemonList.map((pokemon, index) => (
            <li 
              key={index} 
              className="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold capitalize text-gray-200">
                {pokemon.name}
              </h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
