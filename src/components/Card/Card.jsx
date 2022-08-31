import React from 'react';
import useFetchSinglePokemon from '../../hooks/useFetchSinglePokemon';
import pokemonTypeToColor from '../../models/pokemonTypeToColor';
import styles from './Card.module.css';
import getImageUrl from '../../models/getImageUrl';

const Card = ({ url, setSelectedCard, filter }) => {
  const { pokemonData } = useFetchSinglePokemon(url);

  const showCard = pokemonData && pokemonData.types.some((item) => item.type.name.includes(filter));

  if (!showCard) {
    return null;
  }

  return (
    <li className={styles.card}>
      <button type="button" className={styles.button} onClick={() => setSelectedCard(pokemonData)}>
        <img
          className={styles.img}
          src={getImageUrl(pokemonData.id)}
          alt={pokemonData.name}
        />
        <p className={styles.name}>{pokemonData.name}</p>
        <ul className={styles.typesList}>
          {pokemonData.types.map((item) => (
            <li
              key={item.slot}
              className={styles.type}
              style={{ backgroundColor: pokemonTypeToColor(item.type.name) }}
            >
              {item.type.name}
            </li>
          ))}
        </ul>
      </button>
    </li>
  );
};

export default Card;
