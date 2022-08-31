import React, { useState, useEffect } from 'react';
import CardInfo from '../CardInfo/CardInfo';
import CardsGallery from '../CardsGallery/CardsGallery';
import styles from './Pokedex.module.css';

const Pokedex = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState('');
  const [chunks, setChunks] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${12 * chunks}`);
      const data = await res.json();
      setPokemonsData(data.results);
      setIsLoading(false);
    }

    loadData();
  }, [chunks]);

  const loadMore = () => {
    setChunks(chunks + 1);
  };

  return (
    <section>
      <h1 className={styles.title}>Pokedex</h1>
      <label htmlFor="filterInput" className={styles.label}>
        <span className={styles.labelText}>Filter by type</span>
        <input
          className={styles.input}
          type="text"
          name="filterInput"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
      <div className={styles.wrapper}>
        <div className={styles.width50percent}>
          <CardsGallery
            pokemonsData={pokemonsData}
            setSelectedCard={setSelectedCard}
            filter={filter}
          />
          <button onClick={loadMore} className={styles.button} type="button">{isLoading ? 'Loading...' : 'Load More'}</button>
        </div>
        {selectedCard && <CardInfo selectedCard={selectedCard} />}
      </div>
    </section>
  );
};

export default Pokedex;
