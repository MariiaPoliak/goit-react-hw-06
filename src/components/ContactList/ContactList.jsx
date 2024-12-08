import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice'; //iмпорт та використання селектора з contactSlice.js
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); //useSelector

  return (
    <ul className={styles.contact_box}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
