import React from 'react';
import Card from '../Card/Card';
import styles from './CardsGallery.module.css';

const CardsGallery = ({ pokemonsData, setSelectedCard, desiredTypeToFilter }) => (
  <ul className={styles.gallery}>
    {pokemonsData.map((pokemon) => (
      <Card
        key={pokemon.name}
        singlePokemonData={pokemon}
        setSelectedCard={setSelectedCard}
        desiredTypeToFilter={desiredTypeToFilter}
      />
    ))}
  </ul>
);

export default CardsGallery;
