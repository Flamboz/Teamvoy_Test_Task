import React, { useState, useEffect } from 'react';
import CardsGallery from '../CardsGallery/CardsGallery';
import styles from './Pokedex.module.css';

const Pokedex = () => {
  const [pokemonsData, setPokemonsData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15');
      const data = await res.json();
      setPokemonsData(data.results);
    }

    loadData();
  }, []);

  return (
    <section>
      <h1 className={styles.title}>Pokedex</h1>
      <CardsGallery pokemonsData={pokemonsData} />
    </section>
  );
};

export default Pokedex;
