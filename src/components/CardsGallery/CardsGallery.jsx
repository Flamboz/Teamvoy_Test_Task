import React from 'react';
import Card from '../Card/Card';
import styles from './CardsGallery.module.css';

const CardsGallery = ({ pokemonsData, setSelectedCard }) => (
  <ul className={styles.gallery}>
    {pokemonsData.map((pokemon) => (
      <Card
        key={pokemon.name}
        singlePokemonData={pokemon}
        setSelectedCard={setSelectedCard}
      />
    ))}
  </ul>
);

export default CardsGallery;
