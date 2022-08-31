import React, { useState, useEffect } from 'react';
import CardInfo from '../CardInfo/CardInfo';
import CardsGallery from '../CardsGallery/CardsGallery';
import styles from './Pokedex.module.css';

const Pokedex = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    async function loadData() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
      const data = await res.json();
      setPokemonsData(data.results);
    }

    loadData();
  }, []);

  return (
    <section>
      <h1 className={styles.title}>Pokedex</h1>
      <div className={styles.wrapper}>
        <CardsGallery pokemonsData={pokemonsData} setSelectedCard={setSelectedCard} />
        {selectedCard && <CardInfo selectedCard={selectedCard} />}
      </div>
    </section>
  );
};

export default Pokedex;
