"use client";

import Head from 'next/head';
import { useState } from 'react';

function PokemonHistory() {
  const [pokemonHistory] = useState([
    {
      title: 'The Birth of a Phenomenon',
      description: 'In 1996, Satoshi Tajiri, inspired by his childhood love of insect collecting, created Pokémon through Game Freak. The concept was to capture the excitement of collecting and battling creatures.',
      year: 1996,
      impact: 'Revolutionized the gaming industry and created a global franchise.',
      icon: 'bi-star-fill'
    },
    {
      title: 'Red and Green: The First Adventure',
      description: 'Pokémon Red and Green launched in Japan for the Game Boy, introducing 151 original Pokémon. The games were an instant success, sparking a worldwide phenomenon.',
      year: 1996,
      impact: 'Launched the core Pokémon video game series and introduced iconic characters like Pikachu.',
      icon: 'bi-controller'
    },
    {
      title: 'Global Expansion',
      description: 'The Pokémon anime series, featuring Ash Ketchum and Pikachu, began in 1997, dramatically expanding the franchise\'s reach beyond video games.',
      year: 1997,
      impact: 'Created a multimedia franchise that transcended gaming into pop culture.',
      icon: 'bi-globe'
    },
    {
      title: 'Trading Card Game Revolution',
      description: 'The Pokémon Trading Card Game launched in 1996 in Japan, becoming a global phenomenon that allowed fans to collect and battle with physical cards.',
      year: 1998,
      impact: 'Created a massive collectible card game market and additional revenue stream.',
      icon: 'bi-cards'
    }
  ]);

  return (
    <div className="container py-5">
      <Head>
        <title>The Epic Journey of Pokémon</title>
        <meta name="description" content="Explore the rich history and global impact of the Pokémon franchise" />
      </Head>
      
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-light mb-4">
          The Pokémon Legacy
        </h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead text-light-emphasis">
              Discover the incredible journey of Pokémon from its humble beginnings to a global phenomenon
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {pokemonHistory.map((history, index) => (
          <div key={index} className="col-md-6">
            <div className="card h-100 bg-dark text-light border-secondary hover-card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className={`bi ${history.icon} fs-3 me-3 text-primary`}></i>
                  <h2 className="card-title h4 mb-0">{history.title}</h2>
                </div>
                <p className="card-text text-light-emphasis mb-4">
                  {history.description}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="badge bg-primary rounded-pill">
                    <i className="bi bi-calendar-event me-1"></i>
                    {history.year}
                  </span>
                  <small className="text-light-emphasis fst-italic">
                    <i className="bi bi-lightning me-1"></i>
                    {history.impact}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonHistory;
