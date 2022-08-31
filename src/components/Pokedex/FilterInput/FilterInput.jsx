import React from 'react';
import styles from '../Pokedex.module.css';

const FilterInput = ({ filter, setFilter }) => (
  <label htmlFor="filterInput" className={styles.label}>
    <span className={styles.labelText}>Filter by type</span>
    <input
      className={styles.input}
      type="text"
      name="filterInput"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  </label>
);

export default FilterInput;
