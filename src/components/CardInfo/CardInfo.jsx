import React from 'react';
import styles from './CardInfo.module.css';

const CardInfo = ({ selectedCard }) => {
  const beautifyId = (id) => {
    if (id >= 100) {
      return id.toString();
    }

    if (id >= 10) {
      return `0${id}`;
    }

    return `00${id}`;
  };

  const typesArr = selectedCard.types.map((type) => type.type.name);

  return (
    <div className={styles.cardInfo}>
      <img
        className={styles.img}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedCard.id}.png`}
        alt={selectedCard.name}
      />
      <h2 className={styles.title}>
        {selectedCard.name}
        {' '}
        #
        {beautifyId(selectedCard.id)}
      </h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Type</td>
            <td className={styles.capitalize}>{typesArr.join(', ')}</td>
          </tr>
          {selectedCard.stats.map((item) => (
            <tr key={item.stat.name}>
              <td className={styles.capitalize}>{item.stat.name}</td>
              <td>{item.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardInfo;
