"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

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

  // Filter and search functionality
  const filteredPokemon = pokemonList
    .filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === '' || pokemon.types.some(type => type.type.name === filterType))
    );

  // Random Pokemon feature
  const getRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    setSelectedPokemon(pokemonList[randomIndex]);
  };

  return (
    <div className="min-h-screen p-8 bg-opacity-90">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-200 tracking-tight">
          Pokémon Explorer
        </h1>
        
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <input 
            type="text" 
            placeholder="Search Pokémon..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
          />
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full md:w-auto p-2 rounded-lg bg-gray-700 text-white"
          >
            <option value="">All Types</option>
            {[...new Set(pokemonList.flatMap(p => p.types.map(t => t.type.name)))].map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <button 
            onClick={getRandomPokemon}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
          >
            Random Pokémon
          </button>
        </div>

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
              {filteredPokemon.map((pokemon) => (
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
                    src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
                    alt={pokemon.name} 
                    loading="lazy"
                    className="w-full h-auto mx-auto mb-2 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <h2 className="text-2xl font-semibold capitalize text-gray-200 text-center">
                    {pokemon.name}
                  </h2>
                  <div className="flex justify-center space-x-1 mt-2">
                    {pokemon.types.map(type => (
                      <span 
                        key={type.type.name} 
                        className={`px-2 py-1 rounded-full text-xs 
                          ${type.type.name === 'fire' ? 'bg-red-600' : 
                            type.type.name === 'water' ? 'bg-blue-600' : 
                            type.type.name === 'grass' ? 'bg-green-600' : 
                            type.type.name === 'electric' ? 'bg-yellow-500' : 
                            type.type.name === 'psychic' ? 'bg-pink-600' : 
                            type.type.name === 'dragon' ? 'bg-purple-600' : 
                            'bg-gray-600'} 
                          text-white`}
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </div>
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
                    src={selectedPokemon.sprites.other['official-artwork'].front_default || selectedPokemon.sprites.front_default} 
                    alt={selectedPokemon.name} 
                    className="w-64 h-64 mx-auto object-contain"
                  />
                  <h2 className="text-5xl font-extrabold capitalize text-center mb-6 text-white tracking-tight drop-shadow-lg">
                    {selectedPokemon.name}
                  </h2>
                  <div className="flex justify-center space-x-3 mb-6">
                    {selectedPokemon.types.map(type => (
                      <span 
                        key={type.type.name} 
                        className={`px-4 py-2 rounded-full text-md font-bold uppercase tracking-wider 
                          ${type.type.name === 'fire' ? 'bg-red-600' : 
                            type.type.name === 'water' ? 'bg-blue-600' : 
                            type.type.name === 'grass' ? 'bg-green-600' : 
                            type.type.name === 'electric' ? 'bg-yellow-500' : 
                            type.type.name === 'psychic' ? 'bg-pink-600' : 
                            type.type.name === 'dragon' ? 'bg-purple-600' : 
                            'bg-gray-600'} 
                          text-white shadow-md transform transition-all hover:scale-105`}
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {selectedPokemon.stats.map((stat) => {
                      const statNameMap = {
                        'hp': 'Hit Points',
                        'attack': 'Attack Power',
                        'defense': 'Defense',
                        'special-attack': 'Special Attack',
                        'special-defense': 'Special Defense',
                        'speed': 'Speed'
                      };
  
                      const fullStatName = statNameMap[stat.stat.name] || stat.stat.name;
  
                      return (
                        <div key={stat.stat.name} className="flex items-center space-x-2">
                          <p className="capitalize text-sm w-36 stat-label">{fullStatName}</p>
                          <div className="flex-grow bg-gray-700 rounded-full h-4 overflow-hidden">
                            <div 
                              className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
                              style={{
                                width: `${Math.min(stat.base_stat, 255) /255 * 100}%`,
                                backgroundColor: 
                                  stat.base_stat > 200 ? '#2ecc71' : 
                                  stat.base_stat > 150 ? '#3498db' : 
                                  stat.base_stat > 100 ? '#9b59b6' : 
                                  stat.base_stat > 50 ? '#f39c12' : '#e74c3c',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                              }}
                            ></div>
                          </div>
                          <p className="w-12 text-right font-bold">{stat.base_stat}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-center space-x-2">
                      {selectedPokemon.types.map(type => (
                        <span 
                          key={type.type.name} 
                          className={`px-3 py-1 rounded-full text-sm font-semibold 
                            ${type.type.name === 'fire' ? 'bg-red-600' : 
                              type.type.name === 'water' ? 'bg-blue-600' : 
                              type.type.name === 'grass' ? 'bg-green-600' : 
                              type.type.name === 'electric' ? 'bg-yellow-500' : 
                              type.type.name === 'psychic' ? 'bg-pink-600' : 
                              type.type.name === 'dragon' ? 'bg-purple-600' : 
                              'bg-gray-600'} 
                            text-white`}
                        >
                          {type.type.name}
                        </span>
                      ))}
                    </div>
                    <p className="text-center text-gray-400">
                      Height: {selectedPokemon.height / 10}m | Weight: {selectedPokemon.weight / 10}kg
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
