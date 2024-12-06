"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await response.json();
        const pokemonWithDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            return detailResponse.json();
          })
        );
        setPokemonList(pokemonWithDetails);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemon();
  }, []);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="min-h-screen p-8 bg-opacity-90">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-200 tracking-tight">
        Pokémon Explorer
      </h1>
      {loading ? (
        <div className="flex flex-col justify-center items-center h-64 space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <p className="text-xl text-gray-300 animate-pulse">Loading Pokémon...</p>
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                style={{animationDelay: `${i * 0.1}s`}}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 sm:gap-6">
            {pokemonList.map((pokemon) => (
              <li 
                key={pokemon.id} 
                onClick={() => handlePokemonClick(pokemon)}
                className="bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg 
                           transform transition-all duration-300 ease-in-out 
                           cursor-pointer 
                           hover:scale-105 
                           hover:rotate-1 
                           hover:shadow-2xl 
                           hover:bg-gray-700 
                           active:scale-95 
                           group 
                           relative 
                           overflow-hidden"
              >
                <img 
                  src={pokemon.sprites.front_default} 
                  alt={pokemon.name} 
                  className="w-full h-auto mx-auto mb-2"
                />
                <h2 className="text-2xl font-semibold capitalize text-gray-200 text-center">
                  {pokemon.name}
                </h2>
              </li>
            ))}
          </ul>

          {selectedPokemon && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={closeModal}
            >
              <div 
                className="bg-gray-800 p-6 rounded-xl max-w-md w-full mx-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={closeModal} 
                  className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
                >
                  ×
                </button>
                <img 
                  src={selectedPokemon.sprites.front_default} 
                  alt={selectedPokemon.name} 
                  className="w-48 h-48 mx-auto"
                />
                <h2 className="text-3xl font-bold capitalize text-center mb-4">
                  {selectedPokemon.name}
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {selectedPokemon.stats.map((stat) => (
                    <div key={stat.stat.name} className="bg-gray-700 p-2 rounded">
                      <p className="capitalize text-sm">{stat.stat.name}</p>
                      <p className="font-bold">{stat.base_stat}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p>Types: {selectedPokemon.types.map(type => type.type.name).join(', ')}</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
