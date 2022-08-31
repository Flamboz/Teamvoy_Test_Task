import React, { useState } from 'react';
import useFetchAllPokemons from '../../hooks/useFetchAllPokemons';
import CardInfo from '../CardInfo/CardInfo';
import CardsGallery from '../CardsGallery/CardsGallery';
import FilterInput from './FilterInput/FilterInput';
import styles from './Pokedex.module.css';

const Pokedex = () => {
  const { pokemonsData, isLoading, loadMore } = useFetchAllPokemons();

  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState('');
  const buttonText = isLoading ? 'Loading...' : 'Load More';

  return (
    <section>
      <h1 className={styles.title}>Pokedex</h1>
      <FilterInput filter={filter} setFilter={setFilter} />
      <div className={styles.wrapper}>
        <div className={styles.width50percent}>
          <CardsGallery
            pokemonsData={pokemonsData}
            setSelectedCard={setSelectedCard}
            filter={filter}
          />
          <button onClick={loadMore} className={styles.button} type="button">{buttonText}</button>
        </div>
        {selectedCard && <CardInfo selectedCard={selectedCard} />}
      </div>
    </section>
  );
};

export default Pokedex;
