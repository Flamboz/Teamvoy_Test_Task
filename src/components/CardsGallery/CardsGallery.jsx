import React from 'react';
import Card from '../Card/Card';
import styles from './CardsGallery.module.css';

const CardsGallery = ({ pokemonsData, setSelectedCard, filter }) => (
  <ul className={styles.gallery}>
    {pokemonsData.map((pokemon) => (
      <Card
        key={pokemon.name}
        url={pokemon.url}
        setSelectedCard={setSelectedCard}
        filter={filter}
      />
    ))}
  </ul>
);

export default CardsGallery;
