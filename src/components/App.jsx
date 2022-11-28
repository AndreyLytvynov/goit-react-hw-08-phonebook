import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Box } from './Box';

const App = () => {
  const [contacts, setContacts] =
    useState(() => JSON.parse(localStorage.getItem('contacts'))) || [];
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = ({ name, number }) => {
    const checkedName = checkingNameInState(name);
    if (checkedName) {
      alert('this name is already available');
      return true;
    }
    setContacts(prevState => [{ id: nanoid(), name, number }, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(el => el.id !== contactId));
  };

  const checkingNameInState = newName => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
  };

  const handleFilterChangeInState = e => {
    setFilter(e.target.value);
  };

  const getFilterContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Box
      p="20px"
      ml="auto"
      mr="auto"
      mt="30px"
      width="500px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
     0px 2px 1px rgba(0, 0, 0, 0.2)"
    >
      <Box>
        <h2>Phonebook</h2>
        <ContactForm addContacts={addContacts} />
      </Box>
      <Box mt="20px">
        <h2>Contacts</h2>
        <Filter
          handleChange={handleFilterChangeInState}
          filterStateData={filter}
        />
        <ContactList
          filterContacts={getFilterContacts()}
          deleteContact={deleteContact}
        />
      </Box>
    </Box>
  );
};

export default App;
