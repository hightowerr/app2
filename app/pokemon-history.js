import Head from 'next/head';
import { useState } from 'react';

function PokemonHistory() {
  const [pokemonHistory, setPokemonHistory] = useState([
    {
      title: 'The Creation of Pokémon',
      description: 'The concept of Pokémon was created by Satoshi Tajiri in 1996.',
    },
    {
      title: 'The First Pokémon Games',
      description: 'The first Pokémon games, Pokémon Red and Green, were released in Japan in 1996.',
    },
    {
      title: 'The Pokémon Anime and Manga',
      description: 'The Pokémon anime and manga series were first released in 1997.',
    },
  ]);

  return (
    <div className="bg-gray-900 text-white p-4">
      <Head>
        <title>Pokémon History</title>
        <meta name="description" content="A brief history of Pokémon" />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Pokémon History</h1>
      <ul>
        {pokemonHistory.map((history, index) => (
          <li key={index} className="mb-4">
            <h2 className="text-2xl font-bold">{history.title}</h2>
            <p>{history.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonHistory;
