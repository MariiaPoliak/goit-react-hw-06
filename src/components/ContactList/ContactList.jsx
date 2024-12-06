import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
