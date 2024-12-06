"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      const data = await response.json();
      setPokemonList(data.results);
    }
    fetchPokemon();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pokémon List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemonList.map((pokemon, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold">{pokemon.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
