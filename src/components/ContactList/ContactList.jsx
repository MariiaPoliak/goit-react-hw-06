import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaTrashAlt } from 'react-icons/fa'; // Importing trash icon from react-icons
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contact_box}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact_item}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            onClick={() => handleDelete(id)}
            aria-label="Delete contact"
          >
            <FaTrashAlt className={styles.icon} /> Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
