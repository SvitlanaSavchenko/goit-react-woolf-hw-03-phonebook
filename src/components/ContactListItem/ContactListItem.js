import React from 'react';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.listItem}>
      {name}: {number}{' '}
      <button className={styles.button} onClick={() => onRemove(id)}>
        delete
      </button>
    </li>
  );
};

export default ContactListItem;
