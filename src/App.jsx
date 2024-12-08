import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './redux/contactsSlice';
import { selectNameFilter, setNameFilter } from './redux/filtersSlice';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { FaPhoneAlt } from 'react-icons/fa';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <div>
      <h1>
        <FaPhoneAlt className="icon" /> Phonebook
      </h1>
      <ContactForm />
      <SearchBox value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
