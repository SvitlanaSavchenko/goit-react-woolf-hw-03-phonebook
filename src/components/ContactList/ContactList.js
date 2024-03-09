import React from 'react';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactList;
