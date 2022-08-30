import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';

const Card = ({ singlePokemonData }) => {
  const [pokemonData, setPokemonData] = useState(null);
  // const [typeColor, setTypeColor] = useState('');

  useEffect(() => {
    async function loadData() {
      const res = await fetch(singlePokemonData.url);
      const data = await res.json();
      setPokemonData(data);
    }

    loadData();
  }, []);

  const pokemonTypeToColor = (type) => {
    const defaultColor = 'rgb(146,144,250)';

    const typeColor = {
      grass: 'rgb(162,212,135)',
      poison: 'rgb(158,128,171)',
      fire: 'rgb(229,111,107)',
      electic: 'rgb(250,215,107)',
    };

    return typeColor[type] || defaultColor;
  };

  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return pokemonData && (
  <li className={styles.card}>
    <img
      className={styles.img}
      src="https://via.placeholder.com/150"
      alt={pokemonData.name}
    />
    <p className={styles.name}>{capitalizeFirstLetter(pokemonData.name)}</p>
    <ul className={styles.typesList}>
      {pokemonData.types.map((type) => (
        <li
          key={type.slot}
          className={styles.type}
          style={{ backgroundColor: pokemonTypeToColor(type.type.name) }}
        >
          {capitalizeFirstLetter(type.type.name)}

        </li>
      ))}
    </ul>
  </li>
  );
};

export default Card;
