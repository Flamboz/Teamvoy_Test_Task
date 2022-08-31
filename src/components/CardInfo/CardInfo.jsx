import React from 'react';
import beautifyId from '../../helpers/beautifyId';
import getImageUrl from '../../models/getImageUrl';
import styles from './CardInfo.module.css';

const CardInfo = ({ selectedCard }) => {
  const cardTypes = selectedCard.types.map((type) => type.type.name);

  return (
    <div className={styles.cardInfo}>
      <img
        className={styles.img}
        src={getImageUrl(selectedCard.id)}
        alt={selectedCard.name}
      />
      <h2 className={styles.title}>
        {selectedCard.name}
        {beautifyId(' #', selectedCard.id)}
      </h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Type</td>
            <td className={styles.capitalize}>{cardTypes.join(', ')}</td>
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
