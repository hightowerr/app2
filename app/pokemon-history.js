import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';

function PokemonHistory() {
  const [pokemonHistory, setPokemonHistory] = useState([
    {
      title: 'The Birth of a Phenomenon',
      description: 'In 1996, Satoshi Tajiri, inspired by his childhood love of insect collecting, created Pokémon through Game Freak. The concept was to capture the excitement of collecting and battling creatures.',
      year: 1996,
      impact: 'Revolutionized the gaming industry and created a global franchise.'
    },
    {
      title: 'Red and Green: The First Adventure',
      description: 'Pokémon Red and Green launched in Japan for the Game Boy, introducing 151 original Pokémon. The games were an instant success, sparking a worldwide phenomenon.',
      year: 1996,
      impact: 'Launched the core Pokémon video game series and introduced iconic characters like Pikachu.'
    },
    {
      title: 'Global Expansion',
      description: 'The Pokémon anime series, featuring Ash Ketchum and Pikachu, began in 1997, dramatically expanding the franchise\'s reach beyond video games.',
      year: 1997,
      impact: 'Created a multimedia franchise that transcended gaming into pop culture.'
    },
    {
      title: 'Trading Card Game Revolution',
      description: 'The Pokémon Trading Card Game launched in 1996 in Japan, becoming a global phenomenon that allowed fans to collect and battle with physical cards.',
      year: 1998,
      impact: 'Created a massive collectible card game market and additional revenue stream.'
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-6 md:p-12">
      <Head>
        <title>The Epic Journey of Pokémon</title>
        <meta name="description" content="Explore the rich history and global impact of the Pokémon franchise" />
      </Head>
      
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          The Pokémon Legacy
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {pokemonHistory.map((history, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl p-6 shadow-2xl border-2 border-blue-600 hover:border-yellow-400 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-3 text-yellow-400">{history.title}</h2>
              <p className="text-gray-300 mb-4">{history.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-300">Year: {history.year}</span>
                <span className="text-sm text-green-400 italic">Impact: {history.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default PokemonHistory;
