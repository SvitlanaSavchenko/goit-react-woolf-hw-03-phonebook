import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      className={styles.filterInput}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Find contacts by name"
    />
  );
};

export default Filter;
