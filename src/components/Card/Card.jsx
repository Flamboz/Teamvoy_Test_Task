import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';

const Card = ({ singlePokemonData, setSelectedCard }) => {
  const [pokemonData, setPokemonData] = useState(null);

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

  return pokemonData && (
  <li className={styles.card}>
    <button type="button" className={styles.button} onClick={() => setSelectedCard(pokemonData)}>
      <img
        className={styles.img}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
        alt={pokemonData.name}
      />
      <p className={styles.name}>{pokemonData.name}</p>
      <ul className={styles.typesList}>
        {pokemonData.types.map((type) => (
          <li
            key={type.slot}
            className={styles.type}
            style={{ backgroundColor: pokemonTypeToColor(type.type.name) }}
          >
            {type.type.name}

          </li>
        ))}
      </ul>
    </button>
  </li>
  );
};

export default Card;
