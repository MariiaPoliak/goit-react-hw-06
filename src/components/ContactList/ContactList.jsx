import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={styles.contact_box}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
